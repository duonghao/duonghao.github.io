export interface IProject {
  title: string
  img: {
    src: string,
    alt: string,
  }
  description: string
  stack: string[],
  isVisible: boolean,
}

export const PROJECTS: IProject[] = [
  {
    title: 'Blackjack',
    img: {
      src: '/assets/blackjack.png',
      alt: 'blackjack project'
    },
    description: 'Real-time multiplayer blackjack',
    stack: ['React', 'TypeScript', 'Node.js', 'socket.io'],
    isVisible: true,
  }
]
