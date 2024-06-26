import {
  githubClientId,
  githubClientSecret,
  googleClientId,
  googleClientSecret,
  nextauthSecret,
} from "@/app/constants";
import { NextAuthOptions } from "next-auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { sanityClient } from "../../sanity";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Github({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
    Google({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    SanityCredentials(sanityClient), // only if you use sign in with credentials
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === "development",
  secret: nextauthSecret,
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const { _id: id } = await sanityClient.fetch<{ _id: string }>(
        `*[_type == "user" && email == $email][0] {
          _id
        }`,
        { email: userEmail }
      );
      return {
        ...session,
        user: {
          ...session.user,
          id,
        },
      };
    },
  },
};
