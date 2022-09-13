import convert from "./convert";
import { TimeFormat } from "./types/TimeFormat";

const isEpoch = (epoch: unknown): epoch is number | string => {
    return (typeof epoch === "number" || typeof epoch === "string") && epoch !== undefined;
}

const convertEpoch: (epoch: number | string | unknown, format?: TimeFormat | undefined) => string | undefined = (epoch, format = 'SDLTZ') => {
    if (!isEpoch(epoch)) return undefined;

    const sanitizedEpoch: number = Number(epoch) * 1000;

    switch (format) {
        case 'ATSE':
            return convert.toAbbreviatedTimeSince(sanitizedEpoch);
        case 'SATSE':
            return convert.toSemiAbbreviatedTimeSince(sanitizedEpoch);
        case 'TSE':
            return convert.toTimeSince(sanitizedEpoch);
        case 'HRDT':
            return convert.toHumanReadableDateTime(sanitizedEpoch);
        case 'HRDTZ':
            return convert.toHumanReadableDateTimeWithTimeZone(sanitizedEpoch);
        case 'AHRD':
            return convert.toAbbreviatedHumanReadableDate(sanitizedEpoch);
        case 'SD':
            return convert.toStandardDate(sanitizedEpoch);
        case 'SDT':
            return convert.toStandardDateTime(sanitizedEpoch);
        case 'SDLTZ':
            return convert.toStandardDateTimeWithTimeZone(sanitizedEpoch);
        default:
            return undefined;
    }
}

export default convertEpoch;

export { TimeFormat };