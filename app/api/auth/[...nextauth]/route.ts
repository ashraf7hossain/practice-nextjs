import { verifyPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler =  NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        const client = await connectToDatabase();
        const userCollection = client.db().collection("users");

        const user = await userCollection.findOne({
          email: credentials?.email,
        });

        if (!user) {
          client.close();
          return null;
        }

        const isValid = await verifyPassword(
          credentials?.password,
          user.password
        );

        if (!isValid) {
          client.close();
          return null;
        }

        client.close();

        return {
          id: user._id.toString(),
          email: user.email,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };