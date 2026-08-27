const WEEKDAYS_VI = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']

const MONTHS_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/** Parses a 'DD.MM.YYYY' date string as used in weddingData.ceremony fields. */
export function parseDMYDate(date: string): Date {
  const [day, month, year] = date.split('.').map(Number)
  return new Date(year, month - 1, day)
}

export function getVietnameseWeekday(date: Date): string {
  return WEEKDAYS_VI[date.getDay()]
}

export function getMonthNameEn(date: Date): string {
  return MONTHS_EN[date.getMonth()]
}
