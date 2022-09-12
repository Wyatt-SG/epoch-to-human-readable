import convertEpoch from ".";
import { convertToStandardDateTimeWithTimeZone, convertToStandardDateTime, convertToStandardDate } from "./conversions/conversions";

jest.mock("./conversions/conversions", () => ({
    convertToStandardDateTimeWithTimeZone: jest.fn(),
    convertToStandardDateTime: jest.fn(),
    convertToStandardDate: jest.fn()
}));

describe("calling convertEpoch with incorrect input", () => {
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
})

describe("convertEpoch", () => {
    it("should call convertToStandardDateTimeWithTimeZone when format is not defined", () => {        
        convertEpoch(1662181133);

        expect(convertToStandardDateTimeWithTimeZone).toHaveBeenCalled()
    });

    it("should call convertToStandardDateTime when format = 'SDT'", () => {        
        convertEpoch(1662181133, 'SDT');

        expect(convertToStandardDateTime).toHaveBeenCalled()
    });

    it("should call convertToStandardDate when format = 'SD'", () => {        
        convertEpoch(1662181133, 'SD');

        expect(convertToStandardDate).toHaveBeenCalled()
    });
})