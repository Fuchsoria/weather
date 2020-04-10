import React from 'react';
import { SunsetProps } from '../../interfaces';
import { timestampToDate } from '../../Utils/dateUtils';
import { ReactComponent as SunsetImage } from './sunset.svg';
import styles from './styles.module.scss';

export default function Sunset({ timestamp }: SunsetProps) {
  const {hours, minutes} = timestampToDate(timestamp);

  return (
    <div className={styles.sunset}>
      <p className={styles['sunset__text']}>Sunset at {hours}:{minutes}</p>
      <SunsetImage className={styles['sunset__image']} />
    </div>
  );
}
