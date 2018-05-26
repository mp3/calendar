const firstWeekDay = 0

const getStartDate = (date: Date) => {
  const startDate = new Date(date.getTime())
  while (startDate.getDay() !== firstWeekDay) {
    startDate.setDate(startDate.getDate() - 1)
  }
  return startDate
}

const getDateOrZero = (month: number) => (date: Date) => date.getMonth() === month ? date.getDate() : 0

const setWeek = (year: number) => (month: number) => (weeks: [number[]]) => (date: Date) => {
  const week: number[] = []
  for (let i = 0; i < 7; i++) {
    week.push(getDateOrZero(month)(date))
    date = new Date(date.getTime())
    date.setDate(date.getDate() + 1)
  }
  weeks.push(week)
  if ((date.getMonth() <= month) && (date.getFullYear() === year)) setWeek(year)(month)(weeks)(date)
}

export default (year: number) => (actualMonth: number) => {
  const month = actualMonth - 1
  if ((year < 1970) || (month < 0) || (month > 11)) return

  const weeks: any = []
  const date = getStartDate(new Date(year, month, 1))
  setWeek(year)(month)(weeks)(date)

  return weeks
}
