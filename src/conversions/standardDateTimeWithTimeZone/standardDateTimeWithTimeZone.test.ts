import convertToStandardDateTimeWithTimeZone from './standardDateTimeWithTimeZone';

describe("convertToStandardDateTimeWithTimeZone", () => {
    test("converts epoch to standard date time with time zone", () => {        
        expect(convertToStandardDateTimeWithTimeZone(1662181133000)).toBe("9/3/22 12:58 AM EDT");
    });
})