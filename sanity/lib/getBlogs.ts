import { client } from "../../client"

// Define the type for a blog post
export type Blogs = {
  _id: string
  title: string
  summary: string
  mainImage: string // URL of the main image
  author: string
  publishedOn: string
  category: string
  content: { children: { text: string }[] }[] // To handle the block content
  gallery: {
    image: string // URL of the image
    subtitle: string
  }[]
  links: {
    name: string
    url: string
    icon: string // URL of the icon
  }[]
}

// Fetch data from Sanity
export const getBlogs = async (): Promise<Blogs[]> => {
  const query = `*[_type == "blog"]{
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
  }`

  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error("Error fetching Blogs:", error)
    return []
  }
}
