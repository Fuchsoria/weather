import React from 'react';
import { Progress } from 'antd';
import { ForecastProgressProps } from '../../interfaces';

export default function ForecastProgress({ min, max } : ForecastProgressProps) {
  const percent = (min * 100) / max;

  return (
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      showInfo={false}
      percent={percent}
    />
  );
}
