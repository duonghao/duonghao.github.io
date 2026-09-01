export const LOCALE = 'en-GB'
export const PRESENT = 'Present'

// Dates across the site are constructed with Date.UTC and formatted in UTC, so
// they render as authored regardless of the reader's timezone.
const TIME_ZONE = 'UTC'

export const MMM_YYYY_FORMATTER = new Intl.DateTimeFormat(LOCALE, {
  month: 'short',
  year: 'numeric',
  timeZone: TIME_ZONE,
})

export const DD_MM_YYYY_FORMATTER = new Intl.DateTimeFormat(LOCALE, {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: TIME_ZONE,
})

export const YYYY_FORMATTER = new Intl.DateTimeFormat(LOCALE, {
  year: 'numeric',
  timeZone: TIME_ZONE,
})
