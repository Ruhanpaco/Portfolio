import { z } from 'zod';

export const blogPostSchema = z.object({
    id: z.number(),
    title: z.string().min(1),
    slug: z.string().min(1),
    content: z.string().optional(), // Content can be missing in list views
    excerpt: z.string().min(1),
    tag: z.string().min(1),
    date: z.date().or(z.string()),
    reading_time_minutes: z.number().default(5),
    author_name: z.string().default('Ruhan Pacolli'),
    featured_image: z.string().optional().nullable(),
    created_at: z.date().or(z.string()).optional(),
});

export const blogPostsSchema = z.array(blogPostSchema);

export type BlogPost = z.infer<typeof blogPostSchema>;
