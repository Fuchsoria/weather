import React from 'react';
import { Card } from 'antd';
import cn from 'classnames';
import { WeatherForecastProps } from '../../interfaces';
import ForecastProgress from '../ForecastProgress';
import WeatherImage from '../WeatherImage';
import { toCapitalize } from '../../Utils/textUtils';
import { getUiDate } from '../../Utils/dateUtils';
import styles from './styles.module.scss';

export default function WeatherForecast({
  temp,
  tempMin,
  tempMax,
  tempFeelsLike,
  main,
  description,
}: WeatherForecastProps) {
  const { day, month, hours, minutes } = getUiDate();
  const paragraphWithoutMargin = cn([styles['forecast__paragraph'], styles['forecast__paragraph_margin_zero']]);

  return (
    <Card title="Weather Forecast">
      <div className={styles['forecast__main-container']}>
        <div className={styles['forecast__main-info']}>
          <p className={styles['forecast__date']}>
            {day} {month}, {hours}:{minutes}
          </p>
          <p className={styles['forecast__temperature']}>{temp.toFixed(1)} &#8451;</p>
          <div className={styles['forecast__progress']}>
            <p className={paragraphWithoutMargin}>{tempMin.toFixed(1)} &#8451;</p>
            <ForecastProgress min={tempMin} max={tempMax} />
            <p className={paragraphWithoutMargin}>{tempMax.toFixed(1)} &#8451;</p>
          </div>
          <p className={paragraphWithoutMargin}>Feels like: {tempFeelsLike.toFixed(1)} &#8451;</p>
        </div>
        <div className="forecast__visual-info">
          <WeatherImage condition={main} />
          <p className={styles['forecast__description']}>{toCapitalize(description)}</p>
        </div>
      </div>
    </Card>
  );
}
