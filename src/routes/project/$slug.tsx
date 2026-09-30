import { createFileRoute, notFound } from '@tanstack/react-router'
import { allProjects } from '../../../.content-collections/generated'
import { Markdown } from '#/components/blocks/markdown'
import { DD_MM_YYYY_FORMATTER } from '#/lib/dates'

export const Route = createFileRoute('/project/$slug')({
  loader: ({ params }) => {
    const project = allProjects.find((p) => p.slug === params.slug)
    if (!project) {
      throw notFound()
    }
    return project
  },
  component: Project,
})

function Project() {
  const project = Route.useLoaderData()

  return (
    <article>
      <header className="flex items-center justify-between mb-4">
        <h5>{project.title}</h5>
        <span className="text-sm text-muted-foreground">
          {DD_MM_YYYY_FORMATTER.format(project.published)}
        </span>
      </header>
      <Markdown content={project.content} className="prose" />
    </article>
  )
}
