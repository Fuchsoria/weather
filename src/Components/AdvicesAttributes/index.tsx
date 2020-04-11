import React from 'react';
import { AdvicesAttributesProps } from '../../interfaces';
import { ReactComponent as Umbrella } from './images/umbrella.svg';
import { ReactComponent as SunGlasses } from './images/sunglasses.svg';
import styles from './styles.module.scss';

export default function AdvicesAttributes({ temperature, status }: AdvicesAttributesProps) {
  let ImageComponent, attributeName;

  if (temperature >= 15 && (status === 'Clear' || status === 'Clouds')) {
    ImageComponent = SunGlasses;
    attributeName = 'SunGlasses';
  } else if (status === 'Rain') {
    ImageComponent = Umbrella;
    attributeName = 'Umbrella';
  }

  return (
    <div className={styles['advices-attributes']}>
      <p className={styles['advices-attributes__text']}>
        {attributeName ? (
          <>
            You should take with: <br />
            <span className={styles['advices-attributes__text_marked']}>{attributeName}</span>
          </>
        ) : (
          <>You don't need to take anything</>
        )}
      </p>
      {ImageComponent && <ImageComponent className={styles['advices-attributes__image']} />}
    </div>
  );
}
