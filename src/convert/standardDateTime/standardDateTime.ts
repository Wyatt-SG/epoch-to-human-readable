import { TimeConversionFn } from '../../types/TimeConversionFn';
import toStandardDate from '../standardDate/standardDate';
import { getTimePeriod } from '../utils';

const toStandardDateTime: TimeConversionFn = (epoch) => {
  const date = new Date(Math.round(epoch));

  return (
    toStandardDate(epoch) +
    ' ' +
    Math.abs(date.getHours() - 12) +
    ':' +
    date.getMinutes() +
    ' ' +
    getTimePeriod(date)
  );
};

export default toStandardDateTime;
