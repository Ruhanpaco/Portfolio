import { MetadataRoute } from 'next'
import { getDocuments, APPWRITE_BOOK_DATABASE_ID, APPWRITE_POSTS_COLLECTION_ID } from './lib/appwrite-server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.ruhanpacolli.online'

    // Fetch blog posts for dynamic routes
    let blogPosts: any[] = []
    try {
        const response = await getDocuments(APPWRITE_BOOK_DATABASE_ID, APPWRITE_POSTS_COLLECTION_ID)
        blogPosts = response.documents || []
    } catch (error) {
        console.error('Sitemap fetch error:', error)
    }

    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    const staticUrls = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/work`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/resume`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ]

    return [...staticUrls, ...blogUrls]
}
