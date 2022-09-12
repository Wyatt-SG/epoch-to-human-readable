import convertToStandardDateTimeWithTimeZone from './standardDateTimeWithTimeZone';

describe("convertToStandardDateTimeWithTimeZone", () => {
    test("converts epoch to standard date time with time zone", () => {    
        const timeRegex = new RegExp(/^(9\/3\/22) ([0-9]?[0-9]?:[0-9]?[0-9]?) (AM|PM) [A-Z]{1,4}$/);

        expect(convertToStandardDateTimeWithTimeZone(1662181133000)).toMatch(timeRegex);
    });
})