import { MongoClient } from "mongodb";
export async function POST(req: Request) {
  // if (req.method !== "POST") {
  //   return res.status(405).json({ message: "Method not allowed" });
  // }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      { status: 400 }
    );
  }
  const newMessage = {
    name,
    email,
    message,
  };

  let client: any;
  try {
    client = await MongoClient.connect("mongodb://localhost:27017/my-blog");
  } catch (error) {
    new Response(JSON.stringify({ message: "Could not connect to database" }), {
      status: 500,
    });
  }
  try {
    const db = client.db();
    db.collection("messages").insertOne(newMessage);
  } catch (error) {
    new Response(JSON.stringify({ message: "Could not connect to database" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(newMessage), { status: 200 });
}
