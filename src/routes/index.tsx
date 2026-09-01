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

export const Route = createFileRoute('/')({ component: Home })

const articles = [
  {
    title: 'Projects',
    render: () => <Projects />,
  },
  {
    title: 'Blogs',
    render: () => <Blogs />,
  },
  {
    title: 'Experience',
    render: () => <Experiences experiences={EXPERIENCES} />,
  },
  {
    title: 'Education',
    render: () => <Educations education={EDUCATION} />,
  },
]

function Home() {
  return (
    <section>
      <article className="min-h-64 flex items-center">
        <Hero />
      </article>
      {articles.map((article) => (
        <article key={article.title} id={article.title} className="mb-8">
          <h2 className="text-lg font-bold mb-4">{article.title}</h2>
          {article.render()}
        </article>
      ))}
    </section>
  )
}
