import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

export async function POST(req: Request) {
  const data = await req.json();
  const { email, password } = data;
  console.log(data);
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    return new Response("Please enter a valid email and password", {
      status: 422,
    });
  }

  const client = await connectToDatabase();
  const db = client.db();

  const collection = db.collection("users");

  const existingUser = await collection.findOne({ email });

  if (existingUser) {
    client.close();
    return new Response("User already exists", { status: 409 });
  }

  const res = await collection.insertOne({
    email: email,
    password: await hashPassword(password),
  });

  if (!res) {
    client.close();
    return new Response("Could not create user", { status: 500 });
  }

  client.close();

  return new Response("User created successfully", { status: 201 });
}

// export default handler;
