import React from 'react';
import { WeatherImageProps } from '../../interfaces';
import { ReactComponent as Thunderstorm } from './images/thunderstorm.svg';
import { ReactComponent as Drizzle } from './images/drizzle.svg';
import { ReactComponent as Rain } from './images/rain.svg';
import { ReactComponent as Snow } from './images/snow.svg';
import { ReactComponent as Clear } from './images/clear.svg';
import { ReactComponent as Clouds } from './images/clouds.svg';
import { ReactComponent as Atmosphere } from './images/atmosphere.svg';
import styles from './styles.module.scss';

export default function WeatherImage({ condition }: WeatherImageProps) {
  let ImageComponent;

  switch (condition) {
    case 'Thunderstorm':
      ImageComponent = Thunderstorm;
      break;
    case 'Drizzle':
      ImageComponent = Drizzle;
      break;
    case 'Rain':
      ImageComponent = Rain;
      break;
    case 'Snow':
      ImageComponent = Snow;
      break;
    case 'Clear':
      ImageComponent = Clear;
      break;
    case 'Clouds':
      ImageComponent = Clouds;
      break;
    default:
      ImageComponent = Atmosphere;
      break;
  }

  return <ImageComponent className={styles['weather__image']} />;
}
