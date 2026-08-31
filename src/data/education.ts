export interface IEducation {
  institution: string
  qualification: string
  start: Date
  end: Date
}

export const EDUCATION: IEducation[] = [
  {
    institution: 'University of Melbourne',
    qualification: 'Graduate Diploma of Computer Science',
    start: new Date(Date.UTC(2022, 0)),
    end: new Date(Date.UTC(2023, 0)),
  },
  {
    institution: 'University of Adelaide',
    qualification: 'Bachelor of Mechanical Engineering (Honours)',
    start: new Date(Date.UTC(2014, 0)),
    end: new Date(Date.UTC(2019, 0)),
  },
]
