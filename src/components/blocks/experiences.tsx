import type { IExperience, IPosition, IInterval } from '#/data/experiences'
import { MMM_YY_FORMATTER, PRESENT } from '#/lib/dates'

interface ExperiencesProps {
  experiences: IExperience[]
}
export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <li key={experience.company}>
            <Experience experience={experience} />
          </li>
        ))}
      </ul>
    </div>
  )
}

interface ExperienceProps {
  experience: IExperience
}
function Experience({ experience }: ExperienceProps) {
  const hasMultiplePositions = experience.positions.length > 1

  return (
    <section>
      <header className="mb-2 flex items-baseline justify-between">
        <h3 className="font-semibold">{experience.company}</h3>
        {hasMultiplePositions && (
          <Interval
            interval={{ start: experience.start, end: experience.end }}
          />
        )}
      </header>
      <ul>
        {experience.positions.map((position) => (
          <li key={position.title}>
            <Position position={position} />
          </li>
        ))}
      </ul>
    </section>
  )
}

interface PositionProps {
  position: IPosition
}
function Position({ position }: PositionProps) {
  return (
    <article>
      <header className="flex items-baseline justify-between">
        <h4>{position.title}</h4>
        <Interval interval={{ start: position.start, end: position.end }} />
      </header>
    </article>
  )
}

interface IntervalProps {
  interval: IInterval
}
function Interval({ interval }: IntervalProps) {
  return (
    <p className="text-muted-foreground text-sm">
      {MMM_YY_FORMATTER.format(interval.start)} -{' '}
      {interval.end === 'present'
        ? PRESENT
        : MMM_YY_FORMATTER.format(interval.end)}
    </p>
  )
}
