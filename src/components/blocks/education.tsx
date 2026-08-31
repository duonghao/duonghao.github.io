import type { IEducation } from '#/data/education'
import { YYYY_FORMATTER } from '#/lib/dates'

interface EducationsProps {
  education: IEducation[]
}
export function Educations({ education }: EducationsProps) {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {education.map((item) => (
          <li key={item.qualification}>
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
  return (
    <section>
      <header className="flex items-baseline justify-between gap-4">
        <h3 className="font-semibold">{education.institution}</h3>
        <p className="shrink-0 text-muted-foreground text-sm">
          {YYYY_FORMATTER.format(education.start)} -{' '}
          {YYYY_FORMATTER.format(education.end)}
        </p>
      </header>
      <p>{education.qualification}</p>
    </section>
  )
}
