import type { IExperience, IPosition } from '#/data/experiences'
import { MMM_YYYY_FORMATTER } from '#/lib/dates'
import { Interval } from './interval'

interface ExperiencesProps {
  experiences: IExperience[]
}
export function Experiences({ experiences }: ExperiencesProps) {
  return (
    <ul className="flex flex-col gap-4">
      {experiences.map((experience) => (
        <li key={experience.company}>
          <Experience experience={experience} />
        </li>
      ))}
    </ul>
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
            formatter={MMM_YYYY_FORMATTER}
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
        <Interval
          interval={{ start: position.start, end: position.end }}
          formatter={MMM_YYYY_FORMATTER}
        />
      </header>
    </article>
  )
}
