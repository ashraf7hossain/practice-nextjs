import { MongoClient } from "mongodb";

async function connectToDatabase() {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
  const options = {};
  console.log("Connecting to database...", uri);
  const client = await MongoClient.connect(uri || "");

  return client;
}


export { connectToDatabase }