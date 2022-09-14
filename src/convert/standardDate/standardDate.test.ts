import regex, { getCurrentTime } from "../testingUtils"
import toStandardDate from './standardDate';

describe('toStandardDate', () => {
  it('converts 946702800000 to 1/1/00', () => {
    expect(toStandardDate(946702800000)).toBe('1/1/00');
  });

  it('converts current epoch to MM/DD/YY format', () => {
    expect(toStandardDate(getCurrentTime())).toMatch(regex.MMDDYY);
  });
});
