import React, { Component } from 'react';
import { WeatherContainerProps } from '../../interfaces';
import styles from './styles.module.scss';

export default class WeatherContainer extends Component<WeatherContainerProps> {
  render() {
    return <div>{this.props.weather.temp}</div>;
  }
}
