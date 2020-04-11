import React from 'react';
import { LocationInfoProps } from '../../interfaces';

export default function LocationInfo({ country, regionName }: LocationInfoProps) {
  return (
    <div>
      Country: {country}. Approximately Region: {regionName}
    </div>
  );
}
