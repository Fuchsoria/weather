import React from 'react';
import { Input } from 'antd';
import { LocationInfoProps } from '../../interfaces';
import styles from './styles.module.scss';

const { Search } = Input;

export default function LocationInfo({ country, countryCode, regionName, handleSubmit }: LocationInfoProps) {
  return (
    <div className={styles['location__container']}>
      {country && countryCode && regionName && (
        <>
          <p className={styles['location__country']}>Country: {country}</p>
          <img
            className={styles['location__image']}
            src={`https://www.countryflags.io/${countryCode}/flat/32.png`}
            alt={country}
          />
          <p className={styles['location__region']}>City: {regionName}</p>
        </>
      )}

      <Search
        className={styles['location__search']}
        placeholder="Weather in another city?"
        onSearch={(value) => handleSubmit(value)()}
        enterButton
      />
    </div>
  );
}
