import { createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from '../../../.content-collections/generated'
import { Markdown } from '#/components/blocks/markdown'
import { DD_MM_YY_FORMATTER } from '#/lib/dates'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = allPosts.find((p) => p.slug === params.slug)
    if (!post) {
      throw notFound()
    }
    return post
  },
  component: BlogPost,
})

function BlogPost() {
  const post = Route.useLoaderData()

  return (
    <article>
      <header className="flex items-center justify-between mb-4">
        <h5>{post.title}</h5>
        <span className="text-sm text-muted-foreground">
          {DD_MM_YY_FORMATTER.format(post.published)}
        </span>
      </header>
      <Markdown content={post.content} className="prose" />
    </article>
  )
}
