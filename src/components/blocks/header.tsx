import { Link } from '@tanstack/react-router'
import { Navbar } from './navbar'

export function Header() {
  return (
    <header className="w-full flex items-center justify-between mb-6 min-h-16 border-b">
      <div>
        <h1 className="text-xl font-bold">
          <Link to="/">Hao Duong</Link>
        </h1>
        <p className="text-muted-foreground text-sm">
          Full-stack Software Engineer
        </p>
      </div>
      <Navbar />
    </header>
  )
}
