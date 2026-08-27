export const LOCALE = 'en-US'
export const PRESENT = 'Present'

export const MMM_YY_FORMATTER = new Intl.DateTimeFormat(LOCALE, {
  month: 'short',
  year: 'numeric',
})

export const DD_MM_YY_FORMATTER = new Intl.DateTimeFormat(LOCALE, {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})
