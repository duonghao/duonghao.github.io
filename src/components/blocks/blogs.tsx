import { Link } from '@tanstack/react-router'
import { allPosts } from '../../../.content-collections/generated'
import { Interval } from './interval'
import { DD_MM_YYYY_FORMATTER } from '#/lib/dates'

export function Blogs() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  )

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {sortedPosts.map((post) => (
          <li
            key={post.slug}
            className="flex items-baseline justify-between gap-4"
          >
            <h3>
              <Link to="/blog/$slug" params={{ slug: post.slug }}>
                {post.title}
              </Link>
            </h3>
            <Interval
              interval={{ start: post.published }}
              formatter={DD_MM_YYYY_FORMATTER}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
