import React from 'react';
import { SunriseProps } from '../../interfaces';
import { timestampToDate } from '../../Utils/dateUtils';
import { ReactComponent as SunriseImage } from './sunrise.svg';
import styles from './styles.module.scss';

export default function Sunrise({ timestamp }: SunriseProps) {
  const {hours, minutes} = timestampToDate(timestamp);

  return (
    <div className={styles.sunrise}>
      <p className={styles['sunrise__text']}>Sunrise at {hours}:{minutes}</p>
      <SunriseImage className={styles['sunrise__image']} />
    </div>
  );
}
