export interface LocationInfoProps {
  country: string;
  regionName: string;
}

export interface WeatherContainerProps {
  weather: {
    main: string;
    description: string;
    temp: number;
    tempFeelsLike: number;
    tempMin: number;
    tempMax: number;
    windSpeed: number;
    sunrise: number;
    sunset: number;
  };
}

export interface SunriseProps {
  timestamp: number;
}

export interface SunsetProps {
  timestamp: number;
}

export interface WeatherImageProps {
  condition: string;
}