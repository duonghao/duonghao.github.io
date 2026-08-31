export type IInterval = {
  start: Date
  end: Date | 'present'
}

export type IExperience = {
  company: string
  positions: IPosition[]
} & IInterval

export type IPosition = {
  title: string
  points: string[]
} & IInterval

export const EXPERIENCES: IExperience[] = [
  {
    company: 'Liferay',
    start: new Date(Date.UTC(2024, 0)),
    end: 'present',
    positions: [
      {
        title: 'Solutions Engineer',
        start: new Date(Date.UTC(2025, 2)),
        end: 'present',
        points: ['Point 1'],
      },
      {
        title: 'Associate Solutions Engineer',
        start: new Date(Date.UTC(2024, 6)),
        end: new Date(Date.UTC(2025, 2)),
        points: ['Point 1'],
      },
      {
        title: 'Software Engineer Trainee',
        start: new Date(Date.UTC(2024, 0)),
        end: new Date(Date.UTC(2024, 6)),
        points: ['Point 1'],
      },
    ],
  },
  {
    company: 'Babcock',
    start: new Date(Date.UTC(2020, 2)),
    end: new Date(Date.UTC(2022, 5)),
    positions: [
      {
        title: 'Mechanical Engineer',
        start: new Date(Date.UTC(2020, 2)),
        end: new Date(Date.UTC(2022, 5)),
        points: ['Point 1'],
      },
    ],
  },
  {
    company: 'Defence Science and Technology Group',
    start: new Date(Date.UTC(2018, 1)),
    end: new Date(Date.UTC(2018, 10)),
    positions: [
      {
        title: 'Undergraduate Research Assistant',
        start: new Date(Date.UTC(2018, 1)),
        end: new Date(Date.UTC(2018, 10)),
        points: ['Point 1'],
      },
    ],
  },
]
