import { createAdminClient, APPWRITE_BOOK_DATABASE_ID, APPWRITE_POSTS_COLLECTION_ID, ID } from "@/app/lib/appwrite-server";
import { blogPostSchema } from "@/app/lib/validations";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const validatedData = blogPostSchema.parse(body);

        const { databases } = createAdminClient();

        const response = await databases.createDocument(
            APPWRITE_BOOK_DATABASE_ID,
            APPWRITE_POSTS_COLLECTION_ID,
            ID.unique(),
            {
                ...validatedData,
                // Ensure date is in a format Appwrite likes if it's a string, 
                // but validation should have handled it.
            }
        );

        return NextResponse.json(response);
    } catch (error: any) {
        console.error("Failed to create blog post:", error);
        return NextResponse.json(
            { error: error.message || "Failed to create blog post" },
            { status: 400 }
        );
    }
}
