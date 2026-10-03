import { createFileRoute } from '@tanstack/react-router'
import { Experiences, Educations } from '#/components/blocks'
import { EXPERIENCES } from '#/data/experiences'
import { EDUCATION } from '#/data/education'

export const Route = createFileRoute('/about/')({
  component: About,
})

const articles = [
  {
    title: 'experience',
    render: () => <Experiences experiences={EXPERIENCES} />,
  },
  {
    title: 'education',
    render: () => <Educations education={EDUCATION} />,
  },
]

function About() {
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <h2 className="sr-only">About</h2>
        <p>
          For those curious about my experience, education, and all the other
          random things I get up to.
        </p>
      </header>
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
