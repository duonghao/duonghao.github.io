import { postSchema } from './src/data/blog/schema'

import { defineCollection, defineConfig } from '@content-collections/core'
import matter from 'gray-matter'

function extractFrontMatter(content: string) {
  const { data, content: body, excerpt } = matter(content, { excerpt: true })
  return { data, body, excerpt: excerpt || '' }
}

const posts = defineCollection({
  name: 'posts',
  directory: './src/data/blog/published',
  include: '*.md',
  schema: postSchema,
  transform: ({ content, ...post }) => {
    const frontMatter = extractFrontMatter(content)

    // Extract header image (first image in the document)
    const headerImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/)
    const headerImage = headerImageMatch ? headerImageMatch[2] : undefined

    return {
      ...post,
      slug: post._meta.path,
      excerpt: frontMatter.excerpt,
      description: frontMatter.data.description,
      headerImage,
      content: frontMatter.body,
    }
  },
})

const projects = defineCollection({
  name: 'projects',
  directory: './src/data/project',
  include: '*.md',
  schema: postSchema,
  transform: ({ content, ...project }) => {
    const frontMatter = extractFrontMatter(content)

    return {
      ...project,
      slug: project._meta.path,
      content: frontMatter.body,
    }
  },
})

export default defineConfig({
  collections: [posts, projects],
})
