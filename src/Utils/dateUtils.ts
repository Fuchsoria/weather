export const timestampToDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  return { hours: date.getHours(), minutes: date.getMinutes() };
};
