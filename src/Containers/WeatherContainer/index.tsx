import React, { Component } from 'react';
import { WeatherContainerProps } from '../../interfaces';
import AdvicesContainer from '../AdvicesContainer';
import WeatherForecast from '../../Components/WeatherForecast';
import WeatherDetails from '../../Components/WeatherDetails';
import WeatherSun from '../../Components/WeatherSun';
import styles from './styles.module.scss';

export default class WeatherContainer extends Component<WeatherContainerProps> {
  render() {
    const {
      main,
      description,
      temp,
      tempFeelsLike,
      tempMin,
      tempMax,
      pressure,
      humidity,
      windSpeed,
      sunrise,
      sunset,
    } = this.props.weather;

    return (
      <div className={styles.weather}>
        <WeatherForecast
          temp={temp}
          tempMin={tempMin}
          tempMax={tempMax}
          tempFeelsLike={tempFeelsLike}
          main={main}
          description={description}
        />
        <WeatherDetails pressure={pressure} humidity={humidity} windSpeed={windSpeed} />
        <WeatherSun sunrise={sunrise} sunset={sunset} />
        <AdvicesContainer status={main} feelsLike={tempFeelsLike} />
      </div>
    );
  }
}
