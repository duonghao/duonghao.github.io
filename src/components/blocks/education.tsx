import type { IEducation, IQualitification } from '#/data/education'
import { YYYY_FORMATTER } from '#/lib/dates'
import { Interval } from './interval'

interface EducationsProps {
  education: IEducation[]
}
export function Educations({ education }: EducationsProps) {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {education.map((item) => (
          <li key={item.institution}>
            <Education education={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

interface EducationProps {
  education: IEducation
}
function Education({ education }: EducationProps) {
  const hasMultipleQualifications = education.qualifications.length > 1

  return (
    <section>
      <header className="flex items-baseline justify-between gap-4">
        <h3 className="font-semibold">{education.institution}</h3>
        {hasMultipleQualifications && (
          <Interval
            interval={{ start: education.start, end: education.end }}
            formatter={YYYY_FORMATTER}
          />
        )}
      </header>
      <ul>
        {education.qualifications.map((qualitifcation) => (
          <li>
            <Qualification qualification={qualitifcation} />
          </li>
        ))}
      </ul>
    </section>
  )
}

interface QualitificationProps {
  qualification: IQualitification
}
function Qualification({ qualification }: QualitificationProps) {
  return (
    <article>
      <header className="flex items-baseline justify-between gap-4">
        <h4>{qualification.title}</h4>
        <Interval
          interval={{ start: qualification.start, end: qualification.end }}
          formatter={YYYY_FORMATTER}
        />
      </header>
    </article>
  )
}
