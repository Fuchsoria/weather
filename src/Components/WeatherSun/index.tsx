import React from 'react';
import { Card } from 'antd';
import { WeatherSunProps } from '../../interfaces';
import Sunrise from '../Sunrise';
import Sunset from '../Sunset';
import styles from './styles.module.scss';

export default function WeatherSun({ sunrise, sunset }: WeatherSunProps) {
  return (
    <Card title="Sunrise and Sunset">
      <div className={styles.sun}>
        <Sunrise timestamp={sunrise} />
        <Sunset timestamp={sunset} />
      </div>
    </Card>
  );
}
