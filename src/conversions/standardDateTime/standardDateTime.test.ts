import convertToStandardDateTime from "./standardDateTime";

describe("convertToStandardDateTime", () => {
    test("converts epoch to standard date time", () => {        
        expect(convertToStandardDateTime(1662181133000)).toBe("9/3/22 12:58 AM");
    });
})