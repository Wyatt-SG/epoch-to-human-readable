const MMDDYY = new RegExp(/\d{1,2}\/\d{1,2}\/\d{2}/)
const HHMM = new RegExp(/\d{1,2}:\d{1,2}/)
const AMPM = new RegExp(/[AP][M]/)
const DD = new RegExp(/\d{1,2}/)
const ABBREVIATEDMONTH = new RegExp(/Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/)
const YYYY = new RegExp(/\d{4}/)

export const getCurrentTime = (): number => {
  return new Date().getTime()
}

const regex = {
  MMDDYY,
  HHMM,
  AMPM,
  DD,
  ABBREVIATEDMONTH,
  YYYY
}

export default regex
