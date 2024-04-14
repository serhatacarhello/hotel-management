// app/api/sanity/signUp/route.ts
import { signUpHandler } from "next-auth-sanity";
import { sanityClient } from "../../../../../sanity";

export const POST = signUpHandler(sanityClient);
