// src/data/blog/schema.ts
import { z } from "zod";
var postSchema = z.object({
  title: z.string(),
  published: z.coerce.date(),
  description: z.string(),
  authors: z.array(z.string())
});

// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import matter from "gray-matter";
function extractFrontMatter(content) {
  const { data, content: body, excerpt } = matter(content, { excerpt: true });
  return { data, body, excerpt: excerpt || "" };
}
var posts = defineCollection({
  name: "posts",
  directory: "./src/data/blog",
  include: "*.md",
  schema: postSchema,
  transform: ({ content, ...post }) => {
    const frontMatter = extractFrontMatter(content);
    const headerImageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/);
    const headerImage = headerImageMatch ? headerImageMatch[2] : void 0;
    return {
      ...post,
      slug: post._meta.path,
      excerpt: frontMatter.excerpt,
      description: frontMatter.data.description,
      headerImage,
      content: frontMatter.body
    };
  }
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
