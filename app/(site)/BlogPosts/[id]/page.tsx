import { client } from "@/client";
import Image from "next/image";
import Link from "next/link";

type BlogDetails = {
  _id: string;
  title: string;
  summary: string;
  mainImage: string;
  author: string;
  publishedOn: string;
  category: string;
  content: { children: { text: string }[] }[];
  gallery: { image: string; subtitle: string }[];
  links: { name: string; url: string; icon: string }[];
};

// Fetch blog details using GROQ
async function getBlogDetails(id: string) {
  const query = `*[_type == "blog" && _id == $id][0]{
    _id,
    title,
    summary,
    "mainImage": mainImage.asset->url,
    author,
    publishedOn,
    category,
    content,
    "gallery": gallery[]{
      "image": image.asset->url, 
      subtitle
    },
    "links": links[]{
      name, 
      url, 
      "icon": icon.asset->url 
    }
  }`;

  return await client.fetch(query, { id });
}


export default async function BlogDetails({ params }: { params: { id: string } }) {
  const blog: BlogDetails | null = await getBlogDetails(params.id);

  if (!blog) {
    return <p className="text-center text-red-500">Blog post not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6 mt-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          <strong>By:</strong> {blog.author} | <strong>Published:</strong> {new Date(blog.publishedOn).toLocaleDateString()} | <strong>Category:</strong> {blog.category}
        </p>

        <Image src={blog.mainImage} alt={blog.title} width={800} height={400} className="rounded-lg" />

        <p className="mt-4 text-lg">{blog.summary}</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Content:</h2>
          {blog.content.map((block, index) => (
            <p key={index} className="text-gray-700 mt-2">{block.children[0]?.text}</p>
          ))}
        </div>

        {blog.gallery.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Gallery:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blog.gallery.map((image, index) => (
                <div key={index} className="space-y-2">
                  <Image src={image.image} alt={image.subtitle} width={400} height={250} className="rounded-lg" />
                  <p className="text-center text-gray-600">{image.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {blog.links.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Links:</h2>
            <div className="space-y-4">
              {blog.links.map((link, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Image src={link.icon || "/fallback-icon.png"} alt={link.name} width={24} height={24} />
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        <Link href="/">
          <button className="mt-6 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
            Back to Blogs
          </button>
        </Link>
      </div>
    </div>
  );
}
