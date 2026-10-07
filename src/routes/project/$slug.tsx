import { createFileRoute, notFound } from '@tanstack/react-router'
import { allProjects } from '../../../.content-collections/generated'
import { ArticleBody } from '#/components/blocks/article-body'
import { ArticleHeader } from '#/components/blocks/article-header'

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
      <ArticleHeader title={project.title} published={project.published} />
      <ArticleBody content={project.content} />
    </article>
  )
}
