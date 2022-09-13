export const getTimePeriod: (date: Date) => string = (date) => {
  return date.getHours() > 12 ? 'PM' : 'AM';
};
