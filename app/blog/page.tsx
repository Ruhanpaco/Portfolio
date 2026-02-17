import { getDocuments, Query, APPWRITE_BOOK_DATABASE_ID, APPWRITE_POSTS_COLLECTION_ID } from "@/app/lib/appwrite-server";
import BlogClient from "./BlogClient";
import { blogPostSchema } from "@/app/lib/validations";
import { Metadata } from "next";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: "Blog",
    description: "Technical talks, engineering insights, and updates about software development and community events.",
};

export default async function BlogPage() {
    let blogs: any[] = [];
    try {
        const response = await getDocuments(
            APPWRITE_BOOK_DATABASE_ID,
            APPWRITE_POSTS_COLLECTION_ID,
            [Query.orderDesc("date")]
        );

        // Validate the data from Appwrite
        const validatedPosts = response.documents.map((doc: any) => blogPostSchema.parse(doc));
        blogs = validatedPosts;
    } catch (error) {
    }

    return (
        <main className="px-6 md:px-8 pt-32 md:pt-48 pb-24 max-w-7xl mx-auto">
            <BlogClient blogs={blogs} />
        </main>
    );
}
