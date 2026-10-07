import { useState, useEffect } from 'react'

import type { DOMNode, HTMLReactParserOptions } from 'html-react-parser'
import parse, { domToReact, Element } from 'html-react-parser'
import type { MarkdownResult } from '#/lib/markdown'
import { renderMarkdown } from '#/lib/markdown'
import { Link } from '@tanstack/react-router'

type MarkdownProps = {
  content: string
  className?: string
}

export function useMarkdown(content: string) {
  const [result, setResult] = useState<MarkdownResult | null>(null)

  useEffect(() => {
    let cancelled = false
    renderMarkdown(content).then((r) => {
      if (!cancelled) setResult(r)
    })
    return () => {
      cancelled = true
    }
  }, [content])

  return result
}

export function Markdown({ content, className }: MarkdownProps) {
  const result = useMarkdown(content)
  return <MarkdownBody result={result} className={className} />
}

export function MarkdownBody({
  result,
  className,
}: {
  result: MarkdownResult | null
  className?: string
}) {
  if (!result) {
    return <div className={className}>Loading...</div>
  }

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element) {
        // Customize rendering of specific elements
        if (domNode.name === 'a') {
          // Handle links
          const href = domNode.attribs.href
          if (href.startsWith('/')) {
            // Internal link - use your router's Link component
            return (
              <Link to={href}>
                {domToReact(domNode.children as DOMNode[], options)}
              </Link>
            )
          }
        }

        if (domNode.name === 'img') {
          // Add lazy loading to images
          return (
            <img
              {...domNode.attribs}
              loading="lazy"
              className="rounded-lg shadow-md"
            />
          )
        }
      }
    },
  }

  return <div className={className}>{parse(result.markup, options)}</div>
}
