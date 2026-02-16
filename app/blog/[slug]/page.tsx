import { sql } from "@/app/lib/db";
import { blogPostSchema } from "@/app/lib/validations";
import PostClient from "./PostClient";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const results = await sql`
            SELECT title, excerpt, date, author_name, featured_image 
            FROM blog_posts 
            WHERE slug = ${slug} 
            LIMIT 1
        `;
        if (results[0]) {
            const post = blogPostSchema.parse(results[0]);
            return {
                title: `${post.title} | Ruhan Pacolli`,
                description: post.excerpt,
                openGraph: {
                    title: post.title,
                    description: post.excerpt,
                    type: 'article',
                    publishedTime: new Date(post.date).toISOString(),
                    authors: [post.author_name],
                    images: post.featured_image ? [post.featured_image] : [],
                },
                twitter: {
                    card: 'summary_large_image',
                    title: post.title,
                    description: post.excerpt,
                    images: post.featured_image ? [post.featured_image] : [],
                }
            };
        }
    } catch (error) {
        console.error("SEO Metadata Failure:", error);
    }
    return {
        title: "Blog | Ruhan Pacolli",
        description: "Technical talks and engineering insights."
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    let post = null;
    try {
        console.log(`[DEBUG] Fetching post for slug: ${slug}`);
        const results = await sql`SELECT * FROM blog_posts WHERE slug = ${slug} LIMIT 1`;
        console.log(`[DEBUG] Raw DB result:`, results[0] ? 'Found record' : 'No record found');

        if (results[0]) {
            console.log(`[DEBUG] Parsing record...`);
            try {
                post = blogPostSchema.parse(results[0]);
                console.log(`[DEBUG] Successfully parsed post`);
            } catch (zodError) {
                console.error(`[DEBUG] Validation Error:`, JSON.stringify(zodError, null, 2));
                console.log(`[DEBUG] Record that failed validation:`, results[0]);
            }
        }
    } catch (error) {
        console.error("Security/Validation Failure - Blog post detail:", error);
    }

    return <PostClient post={post} />;
}
