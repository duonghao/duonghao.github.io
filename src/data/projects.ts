export interface IProject {
  title: string
  description: string
  stack: string[]
}

export const PROJECTS: IProject[] = [
  {
    title: 'Blackjack',
    description: 'Real-time online multiplayer blackjack',
    stack: ['React', 'TypeScript', 'Node.js', 'socket.io'],
  },
]
