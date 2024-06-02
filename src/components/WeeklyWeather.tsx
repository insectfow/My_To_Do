import dayjs from "dayjs";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { getWeather } from "../lib/weather";
import { WeatherData } from "../types/types";
import WeaterImage from "./WeatherImage";

const weatherDateFormat = (
  date: string | number | Date | dayjs.Dayjs | null | undefined
) => dayjs(date, "YYYY-MM-DD").format("MM/DD (ddd)");

const WeeklyWeather: FC = () => {
  const weatherListRef = useRef<HTMLUListElement>(null);
  const [todayWeatherIndex, setTodayWeatherIndex] = useState<number>(0);
  const [weeklyWeather, setWeeklyWeather] = useState<WeatherData[]>([]);
  const [error, setError] = useState<string | null>(null);
  // fetch weather
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getWeather();
        setWeeklyWeather(weatherData);
      } catch (err) {
        setError("날씨 정보를 불러오는데 실패했습니다.");
      }
    };

    fetchWeather();
  }, []);

  // weeklyWeater 데이터 감지 후 오늘 날짜로 스크롤 이동
  useEffect(() => {
    if (weeklyWeather?.length) {
      const today = dayjs().format("YYYY-MM-DD");
      const index = weeklyWeather.findIndex(
        (weather) => weather.date === today
      );
      if (index !== -1 && weatherListRef.current) {
        const element = weatherListRef.current.children[index] as HTMLElement;
        weatherListRef.current.scrollLeft = element.offsetLeft;
        setTodayWeatherIndex(index);
      }
    }
  }, [weeklyWeather]);

  const handleWeatherScroll = useCallback((index: number) => {
    if (weatherListRef.current) {
      const element = weatherListRef.current.children[index] as HTMLElement;
      weatherListRef.current.scrollTo({
        left: element.offsetLeft,
        behavior: "smooth",
      });
    }
  }, []);

  if (error) {
    return <div className="error-box">Error: {error}</div>;
  }

  if (!weeklyWeather.length)
    return <div className="loading-box">Loading...</div>;

  return (
    <ul className="weekly-weather-list" ref={weatherListRef}>
      {weeklyWeather?.length &&
        weeklyWeather.map((weather, index) => (
          <li key={index} className="weekly-weather-item">
            <button
              type="button"
              className={`weekly-weather-item-button ${
                todayWeatherIndex === index && "active"
              }`}
              onClick={() => {
                handleWeatherScroll(index);
              }}
            >
              <span className="weekly-weather-item-date">
                {weatherDateFormat(weather.date)}
              </span>
              <span className="weekly-weather-item-icon">
                <WeaterImage weather={weather.weather} />
                <picture>
                  <img src="../assets/images/weather.png" alt="" />
                </picture>
              </span>
              <span className="weekly-weather-item-temperature">
                {weather.temperature + "도"}
              </span>
            </button>
          </li>
        ))}
    </ul>
  );
};

export default WeeklyWeather;
