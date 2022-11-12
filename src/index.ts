import convert from './convert';
import { TimeFormat } from './types/TimeFormat';

const isAcceptableFormat = (epoch: unknown): epoch is number | string => {
  return (
    typeof epoch === 'number' || typeof epoch === 'string'
  );
};

const convertEpoch: (
  epoch: number | string | unknown,
  format?: TimeFormat | undefined
) => string | undefined = (epoch, format = 'SDLTZ') => {
  if (!isAcceptableFormat(epoch)) return undefined;

  const sanitizedEpoch: number = 
    (typeof epoch === 'string' ? parseInt(epoch) : epoch) * 1000;

  switch (format) {
    case 'ATSE':
      return convert.toAbbreviatedTimeSince(sanitizedEpoch);
    case 'SATSE':
      return convert.toSemiAbbreviatedTimeSince(sanitizedEpoch);
    case 'TSE':
      return convert.toTimeSince(sanitizedEpoch);
    case 'HRDT':
      return convert.toHumanReadableDateTime(sanitizedEpoch);
    case 'HRDTZ':
      return convert.toHumanReadableDateTimeWithTimeZone(sanitizedEpoch);
    case 'AHRD':
      return convert.toAbbreviatedHumanReadableDate(sanitizedEpoch);
    case 'SD':
      return convert.toStandardDate(sanitizedEpoch);
    case 'SDT':
      return convert.toStandardDateTime(sanitizedEpoch);
    default:
      return convert.toStandardDateTimeWithTimeZone(sanitizedEpoch);
  }
};

export default convertEpoch;

export { TimeFormat };
