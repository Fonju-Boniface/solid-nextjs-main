"use client";
import { client } from "../../client";
import { useEffect, useState } from "react";
import SectionHeader from "../Common/SectionHeader";
// Define the type for a category
interface Category {
    title: string;
    slug: {
      current: string;
    };
    description: string;
    image: {
      asset: {
        url: string;
      };
    };
    link: string;
    pdf: {
      asset: {
        url: string;
      };
    };
  }
  
  const Categories = () => {
    // Set the categories state with the Category type
    const [categories, setCategories] = useState<Category[]>([]);
  
    // Fetch categories from Sanity using GROQ
    useEffect(() => {
      const fetchCategories = async () => {
        const query = `*[_type == "category"]{
          title, 
          slug, 
          description, 
          image { asset -> { url } },
          link,
          pdf { asset -> { url } }
        }`;
        try {
          const data = await client.fetch(query);
          setCategories(data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
      fetchCategories();
    }, []);
  
    return (
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black ">
        <h1>Categories</h1>
        
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
            <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29 ">
              {categories.length === 0 ? (
                <p>No categories available.</p>
              ) : (
                <ul>
                  {categories.map((category) => (
                    <li key={category.title} className="mb-8">
                      <h2>{category.title}</h2>
                      <p>{category.description}</p>
                      {category.image && (
                        <img src={category.image.asset.url} alt={category.title} className="w-full h-auto rounded-lg mt-4" />
                      )}
                      {category.link && (
                        <p className="mt-4">
                          <a href={category.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            Visit Link
                          </a>
                        </p>
                      )}
                      {category.pdf && category.pdf.asset.url && (
                        <p className="mt-4">
                          <a
                            href={category.pdf.asset.url}
                            download
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                          >
                            Download PDF
                          </a>
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Categories;




// this is to get only the new one {first one }


// "use client";
// import { client } from "../../../client";
// import { useEffect, useState } from "react";

// // Define the type for a category
// interface Category {
//   title: string;
//   slug: {
//     current: string;
//   };
//   description: string;
// }

// const Categories = () => {
//   // Set the categories state with the Category type
//   const [categories, setCategories] = useState<Category[]>([]);

//   // Fetch categories from Sanity using GROQ
//   useEffect(() => {
//     const fetchCategories = async () => {
//       const query = `*[_type == "category"]{title, slug, description}`;
//       try {
//         const data = await client.fetch(query);
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div>
//       <h1>Categories</h1>
//       {categories.length === 0 ? (
//         <p>No categories available.</p>
//       ) : (
//         <ul>
//           {categories.map((category) => (
//             <li key={category.slug.current}>
//               <h2>{category.title}</h2>
//               <p>{category.description}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Categories;
