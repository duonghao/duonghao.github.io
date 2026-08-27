import { Link } from '@tanstack/react-router'
import { allPosts } from '../../../.content-collections/generated'
import { MMM_YY_FORMATTER } from '#/lib/dates'

export function Blogs() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  )

  return (
    <div>
      <ul>
        {sortedPosts.map((post) => (
          <li key={post.slug}>
            <Link to="/blog/$slug" params={{ slug: post.slug }}>
              <h2>{post.title}</h2>
            </Link>
            <span className="text-sm text-muted-foreground">
              {MMM_YY_FORMATTER.format(post.published)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
