import { TimeConversionFn } from "../../types/TimeConversionFn";
import toStandardDateTime from "../standardDateTime/standardDateTime";

const toStandardDateTimeWithTimeZone: TimeConversionFn = (epoch) => {
    const date = new Date(Math.round(epoch));

    return toStandardDateTime(epoch) + " " + date.toLocaleDateString('en-US', { day: '2-digit', timeZoneName: 'short' }).slice(4);
}

export default toStandardDateTimeWithTimeZone;