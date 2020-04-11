import React, { Component } from 'react';
import { Card } from 'antd';
import cn from 'classnames';
import { WeatherContainerProps } from '../../interfaces';
import AdvicesContainer from '../AdvicesContainer';
import WeatherImage from '../../Components/WeatherImage';
import Sunrise from '../../Components/Sunrise';
import Sunset from '../../Components/Sunset';
import ForecastProgress from '../../Components/ForecastProgress';
import { getUiDate } from '../../Utils/dateUtils';
import { toCapitalize } from '../../Utils/textUtils';
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
    const { day, month, hours, minutes } = getUiDate();
    const paragraphWithoutMargin = cn([styles['weather__paragraph'], styles['weather__paragraph_margin_zero']]);

    return (
      <div className={styles.weather}>
        <Card title="Weather Forecast">
          <div className={styles['weather__main-container']}>
            <div className={styles['weather__main-info']}>
              <p className={styles['weather__date']}>
                {day} {month}, {hours}:{minutes}
              </p>
              <p className={styles['weather__temperature']}>{temp.toFixed(1)} &#8451;</p>
              <div className={styles['weather__progress']}>
                <p className={paragraphWithoutMargin}>{tempMin.toFixed(1)} &#8451;</p>
                <ForecastProgress min={tempMin} max={tempMax} />
                <p className={paragraphWithoutMargin}>{tempMax.toFixed(1)} &#8451;</p>
              </div>
              <p className={paragraphWithoutMargin}>Feels like: {tempFeelsLike.toFixed(1)} &#8451;</p>
            </div>
            <div className="weather__visual-info">
              <WeatherImage condition={main} />
              <p className={styles['weather__description']}>{toCapitalize(description)}</p>
            </div>
          </div>
        </Card>
        <Card title="Current Details">
          <div className={styles['weather__details']}>
            <p className={styles['weather__paragraph']}>Pressure: {pressure} hPa</p>
            <p className={styles['weather__paragraph']}>Humidity: {humidity} &#37;</p>
            <p className={paragraphWithoutMargin}>Wind Speed: {windSpeed.toFixed(1)} Km/h</p>
          </div>
        </Card>
        <Card title="Sunrise and Sunset">
          <div className={styles['weather__grid-columns']}>
            <Sunrise timestamp={sunrise} />
            <Sunset timestamp={sunset} />
          </div>
        </Card>
        <AdvicesContainer status={main} feelsLike={tempFeelsLike} />
      </div>
    );
  }
}
