import regex, { getCurrentTime } from '../testingUtils';
import toStandardDateTime from './standardDateTime';

describe('toStandardDateTime', () => {
  it('converts current epoch to MM/DD/YY HH:MM AM/PM format', () => {
    const format = new RegExp(regex.MMDDYY.source + " " + regex.HHMM.source + " " + regex.AMPM.source);

    expect(toStandardDateTime(getCurrentTime())).toMatch(format);
  });
});
