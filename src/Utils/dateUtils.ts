const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const formatDateNumber = (number: number) => {
  return number <= 9 ? `0${number}` : `${number}`;
};

export const timestampToDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  return { hours: formatDateNumber(date.getHours()), minutes: formatDateNumber(date.getMinutes()) };
};

export const getUiDate = () => {
  const date = new Date();

  return {
    day: date.getDate(),
    month: months[date.getMonth()],
    hours: formatDateNumber(date.getHours()),
    minutes: formatDateNumber(date.getMinutes()),
  };
};
