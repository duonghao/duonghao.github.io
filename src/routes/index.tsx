import { Projects, Blogs, Hero } from '#/components/blocks'

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
]

function Home() {
  return (
    <section className="pb-64">
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
