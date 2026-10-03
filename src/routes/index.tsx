import {
  Experiences,
  Educations,
  Projects,
  Blogs,
  Hero,
} from '#/components/blocks'
import { EXPERIENCES } from '#/data/experiences'
import { EDUCATION } from '#/data/education'
import { createFileRoute } from '@tanstack/react-router'
import { PROJECTS } from '#/data/projects'

export const Route = createFileRoute('/')({ component: Home })

const articles = [
  {
    title: 'projects',
    render: () => <Projects projects={PROJECTS} />,
  },
  {
    title: 'blogs',
    render: () => <Blogs />,
  },
  {
    title: 'experience',
    render: () => <Experiences experiences={EXPERIENCES} />,
  },
  {
    title: 'education',
    render: () => <Educations education={EDUCATION} />,
  },
]

function Home() {
  return (
    <section>
      <article className="w-full">
        <Hero />
      </article>
      {articles.map((article) => (
        <article key={article.title} className="mb-8">
          <h2
            className="text-lg font-bold mb-4 border-b pb-1 capitalize"
            id={article.title}
          >
            {article.title}
          </h2>
          {article.render()}
        </article>
      ))}
    </section>
  )
}
