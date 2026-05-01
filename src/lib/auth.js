import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URL);
console.log(process.env.MONGODB_URL)
const db = client.db('skillsphere');

export const auth = betterAuth({
     emailAndPassword: { 
    enabled: true, 
  },
  database: mongodbAdapter(db, {
     
    client
  }),
});