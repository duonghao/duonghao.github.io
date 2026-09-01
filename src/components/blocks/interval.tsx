import type { IInterval } from '#/data/experiences'
import { PRESENT } from '#/lib/dates'

interface IntervalProps {
  interval: Partial<IInterval>
  formatter: Intl.DateTimeFormat
}
export function Interval({ interval, formatter }: IntervalProps) {
  return (
    <p className="flex justify-end gap-1 text-muted-foreground text-sm font-mono min-w-[11rem]">
      <IntervalDate date={interval.start} formatter={formatter} />
      {interval.end && (
        <>
          <span>-</span>
          <IntervalDate date={interval.end} formatter={formatter} />
        </>
      )}
    </p>
  )
}

interface IntervalDateProps {
  date?: Date | 'present'
  formatter: Intl.DateTimeFormat
}
function IntervalDate({ date, formatter }: IntervalDateProps) {
  if (!date) return null
  if (date === 'present') return PRESENT

  return <span>{formatter.format(date)}</span>
}
