import convertToStandardDateTime from "../standardDateTime/standardDateTime";

const convertToStandardDateTimeWithTimeZone: (epoch: number) => string = (epoch) => {
    const date = new Date(Math.round(epoch));

    return convertToStandardDateTime(epoch) + " " + date.toLocaleDateString('en-US', { day: '2-digit', timeZoneName: 'short' }).slice(4);
}

export default convertToStandardDateTimeWithTimeZone;