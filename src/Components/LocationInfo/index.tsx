import React from 'react';
import styles from './styles.module.scss';
import { LocationInfoProps } from '../../interfaces';

export default function LocationInfo({ country, countryCode, regionName }: LocationInfoProps) {
  return (
    <div className={styles['location__container']}>
      <p className={styles['location__country']}>Country: {country}</p>
      <img src={`https://www.countryflags.io/${countryCode}/flat/32.png`} alt={country} />
      <p className={styles['location__region']}>Region: {regionName}</p>
    </div>
  );
}
