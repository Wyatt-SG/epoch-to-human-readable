import convertToStandardDate from "./standardDate";

describe("convertToStandardDate", () => {
    test("converts epoch to standard date", () => {        
        expect(convertToStandardDate(946702800000)).toBe("1/1/00");
    });
})