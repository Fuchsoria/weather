import React from 'react';
import { AdvicesDressProps } from '../../interfaces';
import { ReactComponent as LiteShirt } from './images/liteshirt.svg';
import { ReactComponent as Polo } from './images/polo.svg';
import { ReactComponent as Hoodie } from './images/hoodie.svg';
import { ReactComponent as Jacket } from './images/jacket.svg';
import { ReactComponent as Coat } from './images/coat.svg';
import { ReactComponent as FurCoat } from './images/furcoat.svg';
import styles from './styles.module.scss';

export default function AdvicesDress({ temperature }: AdvicesDressProps) {
  let ImageComponent, dressName;

  if (temperature >= 30) {
    ImageComponent = LiteShirt;
    dressName = 'lite T-Shirt';
  } else if (temperature >= 20) {
    ImageComponent = Polo;
    dressName = 'Polo or T-Shirt';
  } else if (temperature >= 15) {
    ImageComponent = Hoodie;
    dressName = 'Hoodie or Pullover';
  } else if (temperature >= 10) {
    ImageComponent = Jacket;
    dressName = 'Jacket';
  } else if (temperature >= 0) {
    ImageComponent = Coat;
    dressName = 'Coat';
  } else {
    ImageComponent = FurCoat;
    dressName = 'Fur Coat';
  }

  return (
    <div className={styles['advices-dress']}>
      <p className={styles['advices-dress__text']}>
        You should wear: <br />
        <span className={styles['advices-dress__text_marked']}>{dressName}</span>
      </p>
      <ImageComponent className={styles['advices-dress__image']} />
    </div>
  );
}
