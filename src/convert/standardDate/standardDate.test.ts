import toStandardDate from "./standardDate";

describe("toStandardDate", () => {
    test("converts epoch to standard date", () => {        
        expect(toStandardDate(946702800000)).toBe("1/1/00");
    });
})