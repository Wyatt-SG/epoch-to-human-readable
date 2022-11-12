import regex, { getCurrentTime } from '../testingUtils';
import toStandardDateTime from './abbreviatedHumanReadableDate';

describe('toStandardDateTime', () => {
  it('should return "Today" when epoch is within 24 hours of current date', () => {
    expect(toStandardDateTime(getCurrentTime())).toBe('Today');
  });

  it('should return "Yesterday" when epoch is within 24-48 hours of current date', () => {
    expect(toStandardDateTime(getCurrentTime() - 172800000)).toBe('Yesterday');
  });

  it('should return in MMM DD format if after 48 hours and the year is the same as the current year', () => {
    const format = new RegExp(regex.ABBREVIATEDMONTH.source + " " + regex.DD.source);

    expect(toStandardDateTime(getCurrentTime() - 172800010)).toMatch(format);
  });

  it('should return in MMM DD YYYY format if the year of the date !== current year', () => {
    const format = new RegExp(regex.ABBREVIATEDMONTH.source + " " + regex.DD.source + " " + regex.YYYY.source);

    expect(toStandardDateTime(getCurrentTime() - 31536000000)).toMatch(format);
  });
});
