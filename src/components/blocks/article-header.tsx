import { DD_MM_YYYY_FORMATTER } from '#/lib/dates'

type ArticleHeaderProps = {
  title: string
  published: Date
}

export function ArticleHeader({ title, published }: ArticleHeaderProps) {
  return (
    <header className="flex items-center justify-between mb-4">
      <h2 className='font-bold text-xl'>{title}</h2>
      <span className="text-base text-muted-foreground">
        {DD_MM_YYYY_FORMATTER.format(published)}
      </span>
    </header>
  )
}
