import { getBlogs } from "@/sanity/lib/getBlogs";
import BlogPostsClient from "./BlogPostsClient";

export default async function BlogPage() {
  const blogs = await getBlogs(); // Fetch data on the server

  return <BlogPostsClient blogs={blogs} />;
}
