const { Client, Databases, Storage, ID, Permission, Role } = require('node-appwrite');
const { InputFile } = require('node-appwrite/file');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// --- CONFIGURATION ---
const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
const APPWRITE_PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '699339a90025d649596e';
const APPWRITE_API_KEY = process.env.APPWRITE_API_KEY;

const DATABASE_ID = '69933a6d000fc24cb8b4';
const COLLECTION_ID = 'posts';
const BUCKET_ID = '699339ff0002cefe28dd';

if (!APPWRITE_API_KEY) {
    console.error('ERROR: APPWRITE_API_KEY is not set in your .env file.');
    process.exit(1);
}

const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID)
    .setKey(APPWRITE_API_KEY);

const databases = new Databases(client);
const storage = new Storage(client);

async function init() {
    try {
        console.log('--- Starting Fresh Appwrite Setup (using Server SDK & API Key) ---');

        // 1. Upload Images
        const images = [
            { name: 'day1_crowd', path: '/Users/rpdev/portfolio/WeTransfer Image 7IV07053.jpg' },
            { name: 'day2_volunteers', path: '/Users/rpdev/portfolio/WeTransfer Image (6).jpg' },
            { name: 'volunteers_organizers', path: '/Users/rpdev/portfolio/WeTransfer Image 7IV07650.jpg' }
        ];

        const imageUrls = {};

        for (const img of images) {
            console.log(`Uploading ${img.name}...`);
            const file = await storage.createFile(
                BUCKET_ID,
                ID.unique(),
                InputFile.fromPath(img.path, path.basename(img.path)),
                [Permission.read(Role.any())]
            );

            const url = `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view?project=${APPWRITE_PROJECT_ID}`;
            imageUrls[img.name] = url;
            console.log(`Uploaded ${img.name}: ${url}`);
        }

        // 2. Prepare Blog Content
        let content = fs.readFileSync('/Users/rpdev/portfolio/devfest_content_new.md', 'utf8');

        // Embed images in content
        content = content.replace("## The Check-In Chaos", `![Day 1 Crowd](${imageUrls.day1_crowd})\n\n## The Check-In Chaos`);
        content = content.replace("### Day 2: Deep Dives and Workshops", `![Day 2 with Mascot](${imageUrls.day2_volunteers})\n\n### Day 2: Deep Dives and Workshops`);
        content = content.replace("## What Stuck", `![Volunteers and Organizers](${imageUrls.volunteers_organizers})\n\n## What Stuck`);

        // 3. Create Document
        const postData = {
            title: "Volunteering at DevFest Kosova 2025: Chaos, Community, and Code",
            slug: "devfest-kosova-2025",
            content: content,
            excerpt: "An experiential look into volunteering at the largest tech event in the Balkans, from the chaotic check-in to the world-class keynotes.",
            tag: "Community",
            date: new Date("2024-12-06").toISOString(),
            reading_time_minutes: 8,
            author_name: "Ruhan Pacolli",
            featured_image: imageUrls.day1_crowd
        };

        console.log('Creating document in Appwrite...');
        const document = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            postData
        );

        console.log('--- Setup Successful! ---');
        console.log('Post reachable at: /blog/devfest-kosova-2025');

    } catch (error) {
        console.error('Setup Failed:', error.message || error);
        if (error.message && error.message.includes('bucket with the requested ID could not be found')) {
            console.log('\nTIP: It looks like the Bucket ID "Blog" is wrong. Please check the ID in the Settings tab of your bucket.');
        }
    }
}

init();
