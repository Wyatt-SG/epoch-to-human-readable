export const getTimePeriod: (date: Date) => string = (date) => {
  return date.getHours() > 12 ? 'PM' : 'AM';
};

export const currentEpoch = new Date().getTime();