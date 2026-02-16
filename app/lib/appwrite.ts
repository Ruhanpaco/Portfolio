import { Client, Account, Databases, Storage } from "appwrite";

export const APPWRITE_BOOK_DATABASE_ID = "69933a6d000fc24cb8b4";
export const APPWRITE_POSTS_COLLECTION_ID = "posts";
export const APPWRITE_BLOG_BUCKET_ID = "699339ff0002cefe28dd";

const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("699339a90025d649596e");

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

// Ping Appwrite backend to verify setup
client.ping();

export { client, account, databases, storage };
