import { z } from 'zod';

export const blogPostSchema = z.object({
    id: z.number().optional(),
    title: z.string().min(1),
    slug: z.string().optional(),
    content: z.string().optional(),
    excerpt: z.string().min(1),
    tag: z.string().optional(),
    date: z.date().or(z.string()),
    reading_time_minutes: z.number().default(5).optional(),
    author_name: z.string().default('Ruhan Pacolli').optional(),
    featured_image: z.string().optional().nullable(),
    created_at: z.date().or(z.string()).optional(),
});

export const blogPostsSchema = z.array(blogPostSchema);

export type BlogPost = z.infer<typeof blogPostSchema>;
