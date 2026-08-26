import { Experiences, Projects, Blogs, Hero } from '#/components/blocks'
import { EXPERIENCES } from '#/data/experiences'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <header className="w-full flex justify-between">
        <h1 className="text-xl font-bold">Hao Duong</h1>
        <nav>
          <ul className="text-base flex gap-4">
            <li>
              <a href="#experiences">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          </ul>
        </nav>
      </header>
      <section>
        <article className="min-h-64 flex items-center">
          <Hero />
        </article>
        <article id="experiences" className="mb-8">
          <h3 className="font-bold mb-4">Experience</h3>
          <Experiences experiences={EXPERIENCES} />
        </article>
        <article id="projects" className="mb-8">
          <h3 className="font-bold">Projects</h3>
          <Projects />
        </article>
        <article id="blogs" className="mb-8">
          <h3 className="font-bold">Blogs</h3>
          <Blogs />
        </article>
      </section>
      <footer></footer>
    </main>
  )
}
