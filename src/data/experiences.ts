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
    start: new Date('2024-01-01'),
    end: 'present',
    positions: [
      {
        title: 'Solutions Engineer',
        start: new Date('2025-03-01'),
        end: 'present',
        points: ['Point 1'],
      },
      {
        title: 'Associate Solutions Engineer',
        start: new Date('2024-07-01'),
        end: new Date('2025-03-01'),
        points: ['Point 1'],
      },
      {
        title: 'Software Engineer Trainee',
        start: new Date('2024-01-01'),
        end: new Date('2024-07-01'),
        points: ['Point 1'],
      },
    ],
  },
  {
    company: 'Babcock',
    start: new Date('2022-01-01'),
    end: new Date('2022-01-01'),
    positions: [
      {
        title: 'Mechanical Engineer',
        start: new Date('01/01/2020'),
        end: new Date('01/01/2022'),
        points: ['Point 1'],
      },
    ],
  },
  {
    company: 'Defence Science and Technology Group',
    start: new Date('2018-02-01'),
    end: new Date('2018-11-01'),
    positions: [
      {
        title: 'Undergraduate Research Assistant',
        start: new Date('2018-02-01'),
        end: new Date('2018-11-01'),
        points: ['Point 1'],
      },
    ],
  },
]
