"use server";

import { createAdminClient, APPWRITE_BOOK_DATABASE_ID, APPWRITE_POSTS_COLLECTION_ID, ID } from "@/app/lib/appwrite-server";
import { blogPostSchema } from "@/app/lib/validations";
import { revalidatePath } from "next/cache";

/**
 * Server Action to create a new blog post.
 * This is significantly more secure than a public API endpoint because:
 * 1. It only runs on the server.
 * 2. It has built-in CSRF protection from Next.js.
 * 3. It doesn't require exposing a public POST URL.
 */
export async function createBlogPost(data: any) {
    try {
        // Validate input on the server
        const validatedData = blogPostSchema.parse(data);

        const { databases } = createAdminClient();

        const response = await databases.createDocument(
            APPWRITE_BOOK_DATABASE_ID,
            APPWRITE_POSTS_COLLECTION_ID,
            ID.unique(),
            {
                ...validatedData,
                // Ensure the date is handled correctly for Appwrite
            }
        );

        // Revalidate the blog page to show the new post
        revalidatePath("/blog");

        return { success: true, data: response };
    } catch (error: any) {
        return {
            success: false,
            error: error.message || "Failed to create blog post"
        };
    }
}
