import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: Request) {
  // if (req.method !== "POST") {
  //   return res.status(405).json({ message: "Method not allowed" });
  // }


  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "All fields are required" }),
      { status: 400 }
    )
  }

  const newMessage = {
    name,
    email,
    message,
  };

  console.log(newMessage);

  return new Response(JSON.stringify(newMessage), { status: 200 });
}
