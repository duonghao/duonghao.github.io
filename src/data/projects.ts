export interface IProject {
  title: string
  img: {
    src: string,
    alt: string,
  }
  description: string
  stack: string[],
  year: number,
  slug?: string,
  isVisible: boolean,
}

export const PROJECTS: IProject[] = [
  {
    title: 'Another Hands',
    img: {
      src: '/assets/blackjack.png',
      alt: 'blackjack project'
    },
    description: 'Real-time multiplayer blackjack',
    stack: ['React', 'TypeScript', 'Node.js', 'socket.io'],
    year: 2026,
    slug: 'blackjack',
    isVisible: true,
  }
]
