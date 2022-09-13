import toStandardDateTime from './standardDateTime';

describe('toStandardDateTime', () => {
  test('converts epoch to standard date time', () => {
    const timeRegex = new RegExp(
      /^(9\/3\/22) ([0-9]?[0-9]?:[0-9]?[0-9]?) (AM|PM)$/
    );

    expect(toStandardDateTime(1662181133000)).toMatch(timeRegex);
  });
});
