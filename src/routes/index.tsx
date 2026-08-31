import { Experiences, Projects, Blogs, Hero } from '#/components/blocks'
import { EXPERIENCES } from '#/data/experiences'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <section>
      <article className="min-h-64 flex items-center">
        <Hero />
      </article>
      <article id="experiences" className="mb-8">
        <h2 className="text-lg font-bold mb-4">Experience</h2>
        <Experiences experiences={EXPERIENCES} />
      </article>
      <article id="projects" className="mb-8">
        <h2 className="text-lg font-bold mb-4">Projects</h2>
        <Projects />
      </article>
      <article id="blogs" className="mb-8">
        <h2 className="text-lg font-bold mb-4">Blogs</h2>
        <Blogs />
      </article>
    </section>
  )
}
