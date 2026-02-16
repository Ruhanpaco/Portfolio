import { sql } from "@/app/lib/db";
import { blogPostsSchema } from "@/app/lib/validations";
import BlogClient from "./BlogClient";

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
    let blogs: any[] = [];
    try {
        const results = await sql`
            SELECT id, title, slug, excerpt, tag, date, reading_time_minutes, author_name 
            FROM blog_posts 
            ORDER BY date DESC
        `;
        // Validate the data from the database
        blogs = blogPostsSchema.parse(results);
    } catch (error) {
        console.error("Security/Validation Failure - Blog posts:", error);
        // Fallback or empty state is handles by BlogClient
    }

    return (
        <main className="px-8 pt-48 pb-24 max-w-7xl mx-auto">
            <BlogClient blogs={blogs} />
        </main>
    );
}
