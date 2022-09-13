import { TimeConversionFn } from '../../types/TimeConversionFn';

const toStandardDate: TimeConversionFn = (epoch) => {
  const date = new Date(Math.round(epoch));

  return (
    date.getMonth() +
    1 +
    '/' +
    date.getDate() +
    '/' +
    date.getFullYear().toString().slice(-2)
  );
};

export default toStandardDate;
