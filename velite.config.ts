import { defineConfig, defineCollection, s } from 'velite'

const computedFields = <T extends {slug: string}>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
    // this will help to slice down the initial part of the link 
    // for example: /blog/hello-world-post it will slice down /blog/
});

const posts = defineCollection({
    name:"Post",
    pattern: 'posts/**/*.mdx',
    schema: s.object({
        slug: s.path(), // auto generate slug from file path
        title: s.string().max(99), // Zod primitive type
        description: s.string().max(999).optional(),
        date: s.isodate(), // input Date-like string, output ISO Date string.
        published: s.boolean().default(true), // set false if you dont want to show the post
        content: s.mdx(), // transform markdown to html
        // content: s.markdown() // transform markdown to html
        // cover: s.image(), // input image relative path, output image object with blurImage.
        // video: s.file().optional(), // input file relative path, output file public path.
        // metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
        // excerpt: s.excerpt(), // excerpt of markdown content
        
    }).transform(computedFields)
})


export default defineConfig({
    root: "content",    // this is the folder in which it will look for blog/markdown 
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash-6].[ext]",
        clean: true,
    },
    collections: {posts},
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    }
})