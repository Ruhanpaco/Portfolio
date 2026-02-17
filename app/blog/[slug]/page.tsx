import { getDocuments, Query, APPWRITE_BOOK_DATABASE_ID, APPWRITE_POSTS_COLLECTION_ID } from "@/app/lib/appwrite-server";
import { notFound } from "next/navigation";
import { blogPostSchema } from "@/app/lib/validations";
import PostClient from "./PostClient";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const response = await getDocuments(
            APPWRITE_BOOK_DATABASE_ID,
            APPWRITE_POSTS_COLLECTION_ID,
            [Query.equal("slug", slug)]
        );

        if (response.documents[0]) {
            const postData = response.documents[0];
            // Map Appwrite fields or parse as is if they match
            const post = blogPostSchema.parse(postData);
            return {
                title: `${post.title} | Ruhan Pacolli`,
                description: post.excerpt,
                openGraph: {
                    title: post.title,
                    description: post.excerpt,
                    type: 'article',
                    publishedTime: new Date(post.date).toISOString(),
                    authors: post.author_name ? [post.author_name] : ["Ruhan Pacolli"],
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
        // Quiet failure for SEO metadata
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
        const response = await getDocuments(
            APPWRITE_BOOK_DATABASE_ID,
            APPWRITE_POSTS_COLLECTION_ID,
            [Query.equal("slug", slug)]
        );

        if (response.documents[0]) {
            post = blogPostSchema.parse(response.documents[0]);
        }
    } catch (error) {
        // Quiet failure for content fetch
    }

    return <PostClient post={post} />;
}
