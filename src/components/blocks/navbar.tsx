import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <nav>
      <ul className="text-base flex gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/" hash="projects">Projects</Link>
        </li>
        <li>
          <Link to="/" hash="blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
  )
}