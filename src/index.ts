import convertToStandardDate from "./conversions/standardDate/standardDate";
import { TimeFormat } from "./types/TimeFormat";

const isEpoch = (epoch: unknown): epoch is number | string => {
    return (typeof epoch === "number" || typeof epoch === "string") && epoch !== undefined;
}

const convertEpoch: (epoch: number | string | unknown, format?: TimeFormat | undefined) => string | undefined = (epoch, format = 'SDLTZ') => {
    if (!isEpoch(epoch)) return undefined;

    const sanitizedEpoch: number = Number(epoch) * 1000;

    switch (format) {
        case 'ATSE':
            // call function
        case 'SATSE':
            // call function
        case 'TSE':
            // call function
        case 'HRDT':
            // call function
        case 'HRDTZ':
            // call function
        case 'AHRD':
            // call function
        case 'SD':
            return convertToStandardDate(sanitizedEpoch);
        case 'SDT':
            // call function
        case 'SDLTZ':
            // call function
        default:
            return undefined;
    }
}

export default convertEpoch;

export { TimeFormat };