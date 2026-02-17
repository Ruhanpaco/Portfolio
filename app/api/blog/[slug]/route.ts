import { getDocuments, Query, APPWRITE_BOOK_DATABASE_ID, APPWRITE_POSTS_COLLECTION_ID } from "@/app/lib/appwrite-server";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    try {
        const response = await getDocuments(
            APPWRITE_BOOK_DATABASE_ID,
            APPWRITE_POSTS_COLLECTION_ID,
            [Query.equal("slug", slug)]
        );

        const post = response.documents[0];

        if (!post || !post.content) {
            console.log(`[API] Post not found in Appwrite: ${slug}`);
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        console.log(`[API] Successfully fetched content for ${slug} from Appwrite. Content length: ${post.content.length}`);
        return NextResponse.json({ content: post.content });
    } catch (error) {
        console.error("Appwrite API Fetch Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
