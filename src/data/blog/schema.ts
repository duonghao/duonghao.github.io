import { z } from 'zod'

export const postSchema = z.object({
  title: z.string(),
  published: z.coerce.date(),
  description: z.string(),
  authors: z.array(z.string()),
})

export type Post = z.infer<typeof postSchema>
