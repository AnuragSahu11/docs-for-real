import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {
  getApiData,
  postApiData,
} from "../../../../src/components/OAuthProvider/utils/httpUtils";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  callbacks: {
    async signIn(params) {
      // ** CHECK USER EXISTS OR NOT
      try {
        const userData: any = await getApiData("/user/profile", {
          useremail: params.user.email,
        });
        if (!userData) {
          const newUser = await postApiData("/user/sign-in", {
            useremail: params.user.email,
            username: params.user.name,
          });
        }
      } catch (err) {
        console.error(err);
      }
      // ** IF DOES NOT EXIST, CREATE NEW USER
      return true;
    },
  },
});

export { handler as GET, handler as POST };
