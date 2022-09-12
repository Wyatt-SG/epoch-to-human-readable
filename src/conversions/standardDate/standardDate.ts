const convertToStandardDate: (epoch: number) => string = (epoch) => {
    const date = new Date(Math.round(epoch));

    return (date.getMonth() + 1) + '/' + date.getDate()  + '/' + date.getFullYear().toString().slice(-2)
}

export default convertToStandardDate;