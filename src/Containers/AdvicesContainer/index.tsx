import React, { Component } from 'react';
import { Card } from 'antd';
import { AdvicesContainerProps } from '../../interfaces';
import AdvicesDress from '../../Components/AdvicesDress';
import AdvicesAttributes from '../../Components/AdvicesAttributes';
import styles from './styles.module.scss';

export default class AdvicesContainer extends Component<AdvicesContainerProps> {
  render() {
    const { status, feelsLike } = this.props;

    return (
      <Card title="What should I wear and take with?">
        <div className={styles['advices__container']}>
          <AdvicesDress temperature={feelsLike} />
          <AdvicesAttributes temperature={feelsLike} status={status} />
        </div>
      </Card>
    );
  }
}
