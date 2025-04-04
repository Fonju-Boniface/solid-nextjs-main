"use client";

import { Blogs } from "@/sanity/lib/getBlogs";
import Link from "next/link";
import Image from "next/image";

type BlogPostsProps = {
  blogs: Blogs[];
};

const BlogPostsClient = ({ blogs }: BlogPostsProps) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-6">Blog Posts</h1>
      <div className="space-y-12">
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map((post) => (
            <div key={post._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {post.mainImage && (
                <Image
                  className="w-full h-72 object-cover"
                  src={post.mainImage}
                  alt={post.title}
                  width={800}
                  height={400}
                />
              )}
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  <strong>By:</strong> {post.author} |{" "}
                  <strong>Published:</strong>{" "}
                  {post.publishedOn ? new Date(post.publishedOn).toLocaleDateString() : "Unknown"} |{" "}
                  <strong>Category:</strong> {post.category}
                </p>
                <p className="text-lg text-gray-700">{post.summary}</p>

                {/* Content Section */}
                {post.content && post.content.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Content:</h3>
                    <div className="space-y-4">
                      {post.content.map((block, index) => (
                        <p key={index} className="text-gray-700">
                          {block.children?.[0]?.text || "No content available"}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Image Gallery */}
                {post.gallery && post.gallery.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Image Gallery:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {post.gallery
                        .filter((image) => image?.image) // Ensure valid data
                        .map((image, index) => (
                          <div key={index} className="space-y-2">
                            <Image
                              className="w-full h-64 object-cover rounded-lg"
                              src={image.image}
                              alt={image.subtitle || "Gallery Image"}
                              width={400}
                              height={250}
                            />
                            <p className="text-center text-gray-600">
                              {image.subtitle || "No description"}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                {post.links && post.links.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Links:</h3>
                    <div className="space-y-4">
                      {post.links
                        .filter((link) => link?.icon) // Ensure valid data
                        .map((link, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <Image
                              className="w-6 h-6 object-contain"
                              src={link.icon || "/fallback-icon.png"}
                              alt={link.name || "Link icon"}
                              width={24}
                              height={24}
                            />
                            <a
                              href={link.url || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline"
                            >
                              {link.name || "Unknown Link"}
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Read More Button */}
                <div className="mt-4">
                <Link href={`/BlogPosts/${post._id}`}>
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    Read More
  </button>
</Link>

                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogPostsClient;
