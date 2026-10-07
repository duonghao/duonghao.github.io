import { useEffect, useMemo, useState } from 'react'

import type { MarkdownHeading } from '#/lib/markdown'
import { cn } from '#/lib/utils'
import { MarkdownBody, useMarkdown } from './markdown'

// A heading becomes active once it crosses into the top 30% of the viewport.
const ROOT_MARGIN = '0px 0px -70% 0px'

function useActiveHeading(headings: Array<MarkdownHeading>) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        // Topmost visible heading wins; when none is visible keep the last
        // active one so the highlight doesn't flicker between sections.
        const first = elements.find((el) => visible.has(el.id))
        if (first) setActiveId(first.id)
      },
      { rootMargin: ROOT_MARGIN },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [headings])

  return activeId
}

function Toc({
  headings,
  activeId,
}: {
  headings: Array<MarkdownHeading>
  activeId: string | null
}) {
  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="mb-2 font-semibold">On this page</p>
      <ul className="space-y-1 border-l">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              style={{ paddingLeft: `${0.75 + (h.level - 1) * 0.75}rem` }}
              aria-current={h.id === activeId ? 'location' : undefined}
              className={cn(
                '-ml-px block border-l py-0.5 text-muted-foreground transition-colors hover:text-foreground',
                h.id === activeId &&
                  'border-foreground font-medium text-foreground',
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function ArticleBody({ content }: { content: string }) {
  const result = useMarkdown(content)
  const headings = useMemo(() => result?.headings ?? [], [result])
  const activeId = useActiveHeading(headings)

  return (
    <div className="lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-8 min-h-[150dvh]">
      <aside className="hidden lg:block">
        {headings.length > 0 && (
          <div className="sticky top-6">
            <Toc headings={headings} activeId={activeId} />
          </div>
        )}
      </aside>
      <MarkdownBody
        result={result}
        className={cn(
          'prose max-w-none',
          'prose-headings:font-semibold prose-headings:tracking-tight',
          'prose-h1:text-3xl prose-h1:font-bold',
          'prose-h2:border-b prose-h2:pb-1 prose-h2:text-2xl',
          'prose-h3:text-xl',
          'prose-h4:text-lg',
          'prose-h5:text-base',
          'prose-h6:text-sm prose-h6:uppercase prose-h6:tracking-wide prose-h6:text-muted-foreground',
        )}
      />
    </div>
  )
}
