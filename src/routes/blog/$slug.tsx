import { createFileRoute, notFound } from '@tanstack/react-router'
import { allPosts } from '../../../.content-collections/generated'
import { ArticleBody } from '#/components/blocks/article-body'
import { ArticleHeader } from '#/components/blocks/article-header'

export const Route = createFileRoute('/blog/$slug')({
  loader: ({ params }) => {
    const post = allPosts.find((p) => p.slug === params.slug)
    if (!post) {
      throw notFound()
    }
    return post
  },
  component: BlogPost,
  notFoundComponent: () => {
    return <p>Oops, no such blog post exists.</p>
  },
})

function BlogPost() {
  const post = Route.useLoaderData()

  return (
    <article>
      <ArticleHeader title={post.title} published={post.published} />
      <ArticleBody content={post.content} />
    </article>
  )
}
