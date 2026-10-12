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
      <header className="mb-8 space-y-3 text-foreground/70 tracking-wide">
        <h2 className="sr-only">About</h2>
        <p>
          Originally from Australia, I’ve been living in Japan since 2023. I
          came for the convenience, the food, and the excitement of being
          somewhere new, and I’ve ended up finding plenty of things to love
          along the way.
        </p>
        <p>
          This is a little space for me to share those things. A new cafe I’ve
          stumbled across, a project I’ve been tinkering with, something I’ve
          learned, or just something I found interesting enough to share.
        </p>
        <p>
          For those curious who are also curious about my experience and
          education.
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
