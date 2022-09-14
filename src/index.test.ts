import convertEpoch from '.';
import convert from './convert';

jest.spyOn(convert, 'toStandardDateTimeWithTimeZone')
jest.spyOn(convert, 'toStandardDateTime')
jest.spyOn(convert, 'toStandardDate')
jest.spyOn(convert, 'toAbbreviatedHumanReadableDate')
jest.spyOn(convert, 'toHumanReadableDateTimeWithTimeZone')
jest.spyOn(convert, 'toHumanReadableDateTime')
jest.spyOn(convert, 'toTimeSince')
jest.spyOn(convert, 'toSemiAbbreviatedTimeSince')
jest.spyOn(convert, 'toAbbreviatedTimeSince')

describe('calling convertEpoch with incorrect input', () => {
  it("should return undefined epoch isn't a string or number", () => {
    expect(convertEpoch({})).toBeUndefined();
  });

  it("should return undefined epoch isn't a string or number", () => {
    expect(convertEpoch(undefined)).toBeUndefined();
  });

  it("should return undefined epoch isn't a string or number", () => {
    expect(convertEpoch(null)).toBeUndefined();
  });

  it("should return undefined epoch isn't a string or number", () => {
    expect(convertEpoch([])).toBeUndefined();
  });
});

describe('call convertEpoch with correct inputs', () => {
  it('should call convertToStandardDateTimeWithTimeZone when format is undefined', () => {
    convertEpoch(1662181133);

    expect(convert.toStandardDateTimeWithTimeZone).toHaveBeenCalled();
  });

  it('should call convertToStandardDateTimeWithTimeZone when format is SDLTZ', () => {
    convertEpoch(1662181133, 'SDLTZ');

    expect(convert.toStandardDateTimeWithTimeZone).toHaveBeenCalled();
  });

  it('should call toStandardDateTime when format is SDT', () => {
    convertEpoch(1662181133, 'SDT');

    expect(convert.toStandardDateTime).toHaveBeenCalled();
  });

  it('should call toStandardDate when format is SD', () => {
    convertEpoch(1662181133, 'SD');

    expect(convert.toStandardDate).toHaveBeenCalled();
  });

  it('should call toAbbreviatedHumanReadableDate when format is AHRD', () => {
    convertEpoch(1662181133, 'AHRD');

    expect(convert.toAbbreviatedHumanReadableDate).toHaveBeenCalled();
  });

  it('should call toHumanReadableDateTimeWithTimeZone when format is HRDTZ', () => {
    convertEpoch(1662181133, 'HRDTZ');

    expect(convert.toHumanReadableDateTimeWithTimeZone).toHaveBeenCalled();
  });

  it('should call toHumanReadableDateTime when format is HRDT', () => {
    convertEpoch(1662181133, 'HRDT');

    expect(convert.toHumanReadableDateTime).toHaveBeenCalled();
  });

  it('should call toTimeSince when format is TSE', () => {
    convertEpoch(1662181133, 'TSE');

    expect(convert.toTimeSince).toHaveBeenCalled();
  });

  it('should call toSemiAbbreviatedTimeSince when format is SATSE', () => {
    convertEpoch(1662181133, 'SATSE');

    expect(convert.toSemiAbbreviatedTimeSince).toHaveBeenCalled();
  });

  it('should call toAbbreviatedTimeSince when format is ATSE', () => {
    convertEpoch(1662181133, 'ATSE');

    expect(convert.toAbbreviatedTimeSince).toHaveBeenCalled();
  });
});
