import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-01-01', // Use a static date for stability
  useCdn: true, // `true` for faster response, `false` for fresh data
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Optional: Use only if you need authentication
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

