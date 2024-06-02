import { FC } from "react";
import PartlyCloudyImage from "../assets/images/partlyCloudy.png";
import RainyImage from "../assets/images/rainy.png";
import SunnyImage from "../assets/images/sunny.png";

interface WeatherImageProps {
  weather: string;
}

const WeaterImage: FC<WeatherImageProps> = ({ weather }: WeatherImageProps) => {
  switch (weather) {
    case "sunny":
      return <img src={SunnyImage} alt="맑음" />;
    case "partlyCloudy":
      return <img src={PartlyCloudyImage} alt="조금 구름" />;
    case "rainy":
      return <img src={RainyImage} alt="비옴" />;
    default:
      return <div>weather이 잘못 되었습니다.</div>;
  }
};

export default WeaterImage;
