const MMDDYY = new RegExp(/\d{1,2}\/\d{1,2}\/\d{2}/)
const HHMM = new RegExp(/\d{1,2}:\d{1,2}/)
const AMPM = new RegExp(/[AM][PM]/)

export const getCurrentTime = (): number => {
  return new Date().getTime() / 1000
}

const regex = {
  MMDDYY,
  HHMM,
  AMPM
}

export default regex
