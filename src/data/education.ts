export interface IEducation {
  institution: string
  qualifications: IQualitification[]
  start: Date
  end: Date
}

export interface IQualitification {
  title: string
  start: Date
  end: Date
}

export const EDUCATION: IEducation[] = [
  {
    institution: 'University of Melbourne',
    qualifications: [
      {
        title: 'Graduate Diploma of Computer Science',
        start: new Date(Date.UTC(2022, 0)),
        end: new Date(Date.UTC(2023, 0)),
      },
    ],
    start: new Date(Date.UTC(2022, 0)),
    end: new Date(Date.UTC(2023, 0)),
  },
  {
    institution: 'University of Adelaide',
    qualifications: [
      {
        title: 'Bachelor of Mechanical Engineering (Honours)',
        start: new Date(Date.UTC(2014, 0)),
        end: new Date(Date.UTC(2019, 0)),
      },
    ],
    start: new Date(Date.UTC(2014, 0)),
    end: new Date(Date.UTC(2019, 0)),
  },
]
