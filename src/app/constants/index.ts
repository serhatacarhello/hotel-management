export const sanityProjectId = process.env
  .NEXT_PUBLIC_SANITY_PROJECT_ID as string;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
export const sanityApiVersion = process.env
  .NEXT_PUBLIC_SANITY_API_VERSION as string;
export const sanityToken = process.env
  .SANITY_API_READ_AND_WRITE_TOKEN as string;
export const githubClientId = process.env
  .NEXT_PUBLIC_GITHUB_CLIENT_ID as string;
export const githubClientSecret = process.env
  .NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string;
export const googleClientId = process.env
  .NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;
export const googleClientSecret = process.env
    .NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string;
  
export const nextauthSecret = process.env.NEXTAUTH_SECRET! as string;

