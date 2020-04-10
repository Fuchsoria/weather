import React, { Component } from 'react';
import { WeatherContainerProps } from '../../interfaces';
import WeatherImage from '../../Components/WeatherImage';
import Sunrise from '../../Components/Sunrise';
import Sunset from '../../Components/Sunset';
import styles from './styles.module.scss';

export default class WeatherContainer extends Component<WeatherContainerProps> {
  render() {
    const { main, description, temp, tempFeelsLike, tempMin, tempMax, windSpeed, sunrise, sunset } = this.props.weather;

    return (
      <div className={styles.weather}>
        <WeatherImage condition={main}/>
        <p>Now is {description}</p>
        <div>
          <p>Current Temperature: {temp.toFixed(1)} &#8451;</p>
          <p>Wind Speed: {windSpeed.toFixed(1)} Km/h</p>
        </div>
        <div>
          <p>Minimal Temperature: {tempMin.toFixed(1)} &#8451;</p>
          <p>Maximal Temperature: {tempMax.toFixed(1)} &#8451;</p>
          <p>Temperature Feels like: {tempFeelsLike.toFixed(1)} &#8451;</p>
        </div>
        <Sunrise timestamp={sunrise}/>
        <Sunset timestamp={sunset}/>
      </div>
    );
  }
}
