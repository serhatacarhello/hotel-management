import { sanityDataset, sanityProjectId, sanityToken } from "@/app/constants";
import { createClient } from "next-sanity";

export const sanityClient = createClient({
    projectId: sanityProjectId,
    dataset: sanityDataset || "production",
    useCdn: process.env.NODE_ENV === "production",
    apiVersion: "2024-04-06",
    token:sanityToken,
})