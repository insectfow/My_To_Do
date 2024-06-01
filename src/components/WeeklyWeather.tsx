import dayjs from "dayjs";
import { FC, useCallback, useEffect, useRef, useState } from "react";

const weatherDateFormat = (
  date: string | number | Date | dayjs.Dayjs | null | undefined
) => dayjs(date, "YYYY-MM-DD").format("MM/DD (ddd)");

const WeeklyWeather: FC = () => {
  const weatherListRef = useRef<HTMLUListElement>(null);
  const [todayWeatherIndex, setTodayWeatherIndex] = useState<number>(0);
  const [weeklyWeather, setWeeklyWeather] = useState([
    { date: "2024-05-27", weather: "Sunny", temperature: "24°C" },
    { date: "2024-05-28", weather: "Sunny", temperature: "25°C" },
    { date: "2024-05-29", weather: "Sunny", temperature: "20°C" },
    { date: "2024-05-30", weather: "Sunny", temperature: "22°C" },
    { date: "2024-05-31", weather: "Sunny", temperature: "24°C" },
    { date: "2024-06-01", weather: "Sunny", temperature: "25°C" },
    { date: "2024-06-02", weather: "Sunny", temperature: "21°C" },
  ]);

  useEffect(() => {
    const today = dayjs().format("YYYY-MM-DD");
    const index = weeklyWeather.findIndex((weather) => weather.date === today);
    if (index !== -1 && weatherListRef.current) {
      const element = weatherListRef.current.children[index] as HTMLElement;
      weatherListRef.current.scrollLeft = element.offsetLeft;
      setTodayWeatherIndex(index);
    }
  }, []);

  const handleWeatherScroll = useCallback((index: number) => {
    if (weatherListRef.current) {
      const element = weatherListRef.current.children[index] as HTMLElement;
      weatherListRef.current.scrollTo({
        left: element.offsetLeft,
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <ul className="weekly-weather-list" ref={weatherListRef}>
      {weeklyWeather.map((weather, index) => (
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
              {weather.weather}
              <picture>
                <img src="../assets/images/weather.png" alt="" />
              </picture>
            </span>
            <span className="weekly-weather-item-temperature">
              {weather.temperature}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default WeeklyWeather;
