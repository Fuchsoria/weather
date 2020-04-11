import React, { Component } from 'react';
import WeatherContainer from '../WeatherContainer';
import AdvicesContainer from '../AdvicesContainer';
import LocationInfo from '../../Components/LocationInfo';
import { GEO_API_LINK, WEATHER_API_LINK, WEATHER_API_KEY } from '../../Configurations/config';
import { LOADING_MESSAGE, LOCATION_API_ERROR, WEATHER_API_ERROR } from '../../Configurations/constants';
import styles from './styles.module.scss';

export default class ContentContainer extends Component {
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
    this.onLoading(LOADING_MESSAGE);
    fetch(`${GEO_API_LINK}/json/?fields=status,message,country,countryCode,regionName,zip`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(LOCATION_API_ERROR);
        }

        return response.json();
      })
      .then((result) => {
        if (result.status !== 'success') {
          throw new Error(LOCATION_API_ERROR);
        }

        this.setState({
          country: result.country,
          countryCode: result.countryCode,
          regionName: result.regionName,
        });

        return fetch(
          `${WEATHER_API_LINK}/data/2.5/weather?zip=${result.zip},${result.countryCode}&appid=${WEATHER_API_KEY}&units=metric`
        );
      })
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
        this.setState(
          () => {
            const {
              weather: [{ main, description }],
              main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
              wind: { speed },
              sys: { sunrise, sunset },
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
            };
          },
          () => console.log(this.state.weather)
        );

        this.onStable();
      })
      .catch((err) => {
        console.log(err);

        this.onError(err);
      });
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
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        {this.state.country && this.state.regionName && this.state.countryCode && (
          <LocationInfo
            country={this.state.country}
            countryCode={this.state.countryCode}
            regionName={this.state.regionName}
          />
        )}
        <div className={styles.content}>
          {this.state.weather.temp && <WeatherContainer weather={this.state.weather} />}
          {this.state.weather.main && <AdvicesContainer status={this.state.weather.main} feelsLike={this.state.weather.tempFeelsLike}/>}
        </div>
      </div>
    );
  }
}
