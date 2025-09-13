import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
    collections: {
        content: defineCollection(
            asSitemapCollection({
            source: {
                include: '**',
                // exclude: ['media/articles/**']
            },
            type: 'page',
        })),
        articles: defineCollection(
            asSitemapCollection({
            source: {
                include: '60.media/6001.articles/**',
            },
            type: 'page',
            schema: z.object({
                urlImage: z.string(),
                imageBackground: z.string(),
                title: z.string(),
                subtitle: z.string(),
                leftLabel: z.string(),
                centerLabel: z.string(),
                article: z.string(),
                rightLabel: z.string(),
                cardID: z.number(),
                tags: z.array(z.string()),
                excerpt: z.object({
                    type: z.string(),
                    value: z.any(),
                }).optional(),
            })
        }))
    }
})
