import { Link } from '@tanstack/react-router'
import { allPosts } from '../../../.content-collections/generated'
import { DD_MM_YY_FORMATTER } from '#/lib/dates'

export function Blogs() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  )

  return (
    <div>
      <ul className='flex flex-col gap-4'>
        {sortedPosts.map((post) => (
          <li key={post.slug} className="flex items-baseline justify-between gap-4">
            <Link to="/blog/$slug" params={{ slug: post.slug }}>
              <h3>{post.title}</h3>
            </Link>
            <span className="shrink-0 text-sm text-muted-foreground">
              {DD_MM_YY_FORMATTER.format(post.published)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
