import convertToStandardDate from "../standardDate/standardDate";
import { getTimePeriod } from "../utils";

const convertToStandardDateTime: (epoch: number) => string = (epoch) => {
    const date = new Date(Math.round(epoch));

    return convertToStandardDate(epoch) + " " + Math.abs(date.getHours() - 12) + ":" + date.getMinutes() + " " + getTimePeriod(date);
}

export default convertToStandardDateTime;