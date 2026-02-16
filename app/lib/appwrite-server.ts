import "server-only";
import { Client, Databases, Storage, Users, ID } from "node-appwrite";

const endpoint = "https://fra.cloud.appwrite.io/v1";
const project = "699339a90025d649596e";
const apiKey = process.env.APPWRITE_API_KEY;

export const APPWRITE_BOOK_DATABASE_ID = "69933a6d000fc24cb8b4";
export const APPWRITE_POSTS_COLLECTION_ID = "posts";
export const APPWRITE_BLOG_BUCKET_ID = "699339ff0002cefe28dd";

const client = new Client()
    .setEndpoint(endpoint)
    .setProject(project)
    .setKey(apiKey || "");

const databases = new Databases(client);
const storage = new Storage(client);

// Safe Query implementation to bypass SDK instanceof errors
export const Query = {
    orderDesc: (attribute: string) => JSON.stringify({ method: "orderDesc", attribute }),
    equal: (attribute: string, value: any) => JSON.stringify({ method: "equal", attribute, values: [value] }),
};

export { ID, databases, storage };

export function createAdminClient() {
    return {
        databases: new Databases(client),
        storage: new Storage(client),
        users: new Users(client),
    };
}

export function getFileViewUrl(bucketId: string, fileId: string) {
    return `${endpoint}/storage/buckets/${bucketId}/files/${fileId}/view?project=${project}`;
}

export async function uploadFile(bucketId: string, file: any) {
    const { storage } = createAdminClient();
    const uploadedFile = await storage.createFile(bucketId, ID.unique(), file);
    return getFileViewUrl(bucketId, uploadedFile.$id);
}

// Fetch fallback to bypass SDK "instanceof" errors in Server Components
export async function getDocuments(databaseId: string, collectionId: string, queries: any[] = []) {
    const queryParams = new URLSearchParams();
    queries.forEach(q => queryParams.append("queries[]", q));

    const url = `${endpoint}/databases/${databaseId}/collections/${collectionId}/documents?${queryParams.toString()}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "X-Appwrite-Project": project,
            "X-Appwrite-Key": apiKey || "",
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `Appwrite error: ${response.statusText}`);
    }

    return response.json();
}
