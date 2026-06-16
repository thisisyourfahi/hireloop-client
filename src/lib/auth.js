import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { admin } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();
const db = client.db('hireloop_db')

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            userRole: {
                default: 'seeker'
            },
            plan: {
                default: 'seeker_free'
            }
        }
    },
    plugins: [
        admin(),
    ]
});