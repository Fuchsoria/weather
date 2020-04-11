import React from 'react';
import { Card } from 'antd';
import cn from 'classnames';
import { WeatherDetailsProps } from '../../interfaces';
import styles from './styles.module.scss';

export default function WeatherDetails({ pressure, humidity, windSpeed }: WeatherDetailsProps) {
  const paragraphWithoutMargin = cn([styles['details__paragraph'], styles['details__paragraph_margin_zero']]);

  return (
    <Card title="Current Details">
      <div className={styles.details}>
        <p className={styles['details__paragraph']}>Pressure: {pressure} hPa</p>
        <p className={styles['details__paragraph']}>Humidity: {humidity} &#37;</p>
        <p className={paragraphWithoutMargin}>Wind Speed: {windSpeed.toFixed(1)} Km/h</p>
      </div>
    </Card>
  );
}
