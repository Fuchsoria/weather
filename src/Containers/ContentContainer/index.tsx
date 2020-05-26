import React, { Component } from 'react';
import { ContentContainerState } from '../../interfaces';
import WeatherContainer from '../WeatherContainer';
import LocationInfo from '../../Components/LocationInfo';
import { GEO_API_LINK, GEO_API_KEY, WEATHER_API_LINK, WEATHER_API_KEY } from '../../Configurations/config';
import {
  LOADING_MESSAGE,
  LOCATION_API_ERROR,
  WEATHER_API_ERROR,
  GEO_LOCATION_BROWSER_ERROR,
} from '../../Configurations/constants';
import styles from './styles.module.scss';

export default class ContentContainer extends Component<{}, ContentContainerState> {
  state = {
    isLoading: false,
    isError: false,
    errorMessage: '',
    country: '',
    countryCode: '',
    regionName: '',
    weather: {
      main: '',
      description: '',
      temp: 0,
      tempFeelsLike: 0,
      tempMin: 0,
      tempMax: 0,
      pressure: 0,
      humidity: 0,
      windSpeed: 0,
      sunrise: 0,
      sunset: 0,
    },
  };

  componentDidMount() {
    this.getLocation();
  }

  getWeather = (latitude: number | null, longitude: number | null, city?: string) => {
    const link = city
      ? `${WEATHER_API_LINK}/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      : `${WEATHER_API_LINK}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`;

    this.onLoading(LOADING_MESSAGE);
    fetch(link)
      .then((weatherResponse) => {
        if (weatherResponse.status !== 200) {
          throw new Error(WEATHER_API_ERROR);
        }

        return weatherResponse.json();
      })
      .then((weatherResult) => {
        if (weatherResult.cod !== 200) {
          throw new Error(WEATHER_API_ERROR);
        }

        this.setState(() => {
          const {
            weather: [{ main, description }],
            main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
            wind: { speed },
            sys: { sunrise, sunset, country },
            name,
          } = weatherResult;

          return {
            weather: {
              main,
              description,
              temp,
              tempFeelsLike: feels_like,
              tempMin: temp_min,
              tempMax: temp_max,
              pressure,
              humidity,
              windSpeed: speed,
              sunrise,
              sunset,
            },
            country,
            countryCode: country,
            regionName: name,
          };
        });

        this.onStable();
      })
      .catch((err) => {
        this.onError(err.message);
      });
  };

  getWeatherByCity = (city: string) => () => {
    this.getWeather(null, null, city);
  };

  getWeatherByBrowserGeo = (position: any) => {
    this.getWeather(position.coords.latitude, position.coords.longitude);
  };

  getWeatherByIpGeo = () => {
    this.onLoading(LOADING_MESSAGE);
    fetch(`${GEO_API_LINK}/ipgeo?apiKey=${GEO_API_KEY}&fields=latitude,longitude&output=json`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(LOCATION_API_ERROR);
        }
        return response.json();
      })
      .then((result) => {
        this.onStable();
        this.getWeather(result.latitude, result.longitude);
      })
      .catch((err) => {
        this.onError(err.message);
      });
  };

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getWeatherByBrowserGeo, this.getWeatherByIpGeo, {
        timeout: 3000,
        enableHighAccuracy: true,
      });
    } else {
      this.onError(GEO_LOCATION_BROWSER_ERROR);
    }
  }

  onLoading(message: string) {
    this.setState({
      isLoading: true,
      errorMessage: message,
    });
  }

  onError(message: string) {
    this.setState({
      isError: true,
      errorMessage: message,
    });
  }

  onStable() {
    this.setState({
      isLoading: false,
      isError: false,
      errorMessage: '',
    });
  }

  render() {
    if (this.state.isLoading || this.state.isError) {
      return (
        <div className={styles.container}>
          <LocationInfo
            country={this.state.country}
            countryCode={this.state.countryCode}
            regionName={this.state.regionName}
            handleSubmit={this.getWeatherByCity}
          />
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        {this.state.country && (
          <LocationInfo
            country={this.state.country}
            countryCode={this.state.countryCode}
            regionName={this.state.regionName}
            handleSubmit={this.getWeatherByCity}
          />
        )}
        <div className={styles.content}>
          {this.state.weather.main && <WeatherContainer weather={this.state.weather} />}
        </div>
      </div>
    );
  }
}
