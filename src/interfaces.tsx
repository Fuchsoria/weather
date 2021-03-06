export interface LocationInfoProps {
  country: string;
  countryCode: string;
  regionName: string;
  handleSubmit: (city: string) => () => void;
}

export interface WeatherContainerProps {
  weather: {
    main: string;
    description: string;
    temp: number;
    tempFeelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
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

export interface ForecastProgressProps {
  min: number;
  max: number;
}

export interface AdvicesContainerProps {
  status: string;
  feelsLike: number;
}

export interface AdvicesDressProps {
  temperature: number;
}

export interface AdvicesAttributesProps {
  temperature: number;
  status: string;
}

export interface WeatherForecastProps {
  main: string;
  description: string;
  temp: number;
  tempFeelsLike: number;
  tempMin: number;
  tempMax: number;
}
export interface WeatherDetailsProps {
  pressure: number;
  humidity: number;
  windSpeed: number;
}

export interface WeatherSunProps {
  sunrise: number;
  sunset: number;
}

export interface ContentContainerState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  country: string;
  countryCode: string;
  regionName: string;
  weather: {
    main: string;
    description: string;
    temp: number;
    tempFeelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
    windSpeed: number;
    sunrise: number;
    sunset: number;
  };
}
