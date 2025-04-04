"use client";
import React, { useState } from "react";
import { RiCloseFill, RiComputerLine, RiEyeFill } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';




export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

export const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

// SKILLS DATA COLLECTION ================================================== =======================>>>>>

const SlillsData = [
  {
    id: 1,
    title: "Web Development",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mobile development",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Software development",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Satisfied clients",
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "SEO optimization",
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const HowsData = [
  {
    id: 0,
    title: "Web Development",
    description: "This document serves as a simple template to showcase a sample layout and format. It is solely created for demonstration purposes and is not intended for any official use simple template to showcase a sample layout and format. It is solely created for demonstration purposes.",
    duration: 0,
  },
  {
    id: 1,
    title: "Web Development",
    description: "This document serves as a simple template to showcase a sample layout and format. It is solely created for demonstration purposes and is not intended for any official use simple template to showcase a sample layout and format. It is solely created for demonstration purposes.",
    duration: 0.2,
  },
  {
    id: 2,
    title: "Mobile development",
    description: "This document serves as a simple template to showcase a sample layout and format. It is solely created for demonstration purposes and is not intended for any official use simple template to showcase a sample layout and format. It is solely created for demonstration purposes.",
    duration: 0.3,
  },
];


const Skills = () => {
  return (
    <div className="blog-details blog-details-docs  px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] relative">

      <h1>Some Skills I picked up along the way</h1>
      <p>
        This document serves as a simple template to showcase a sample
        layout and format. It is solely created for demonstration
        purposes and is not intended for any official use.
      </p>

      <div className="flex flex-wrap justify-center items-center lg:justify-start gap-8 w-full">
        {SlillsData.map((skill) => (
          <motion.div
            key={skill.id}
            variants={SlideLeft(skill.delay)}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
            className="flex flex-col gap-4 items-center justify-center p-2 hover:border-primary hover:scale-110 duration-300 hover:shadow-2xl w-full lg:w-fit       
              
               rounded-lg border border-stroke bg-white shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none relative"
          >
            
            {/* <div className="text-4xl mb-4">{skill.icon}</div> */}
            <Image
              src="/images/features/features-light-01.png"
              alt="Me"
              width={150}
              height={150}
              className="rounded-xl lg:w-50 lg:h-auto w-full h-auto object-cover"
            />
            <small className="text-lg font-semibold text-center px-3">
              {skill.title}
            </small>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const HowHelp = () => {
  return (
    <div className="blog-details blog-details-docs  px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
      <h1>How I'll help grow your business</h1>

      {HowsData.map((how) => (
        <motion.div
          key={how.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: how.duration }}
          viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
          className="animate_left w-full hover:border-primary"
        >

          <h5 className="font-bold">{how.title}</h5>
          <p>
            {how.description}
          </p>
        </motion.div>

      ))}
    </div>
  )
}

const DocumentCard = () => {
  const documents = [
    {
      title: "Sample Document 1",
      description: "This is the first sample document containing an image and a downloadable PDF.",
      image: "/docs/image/doc-1.jpeg", // Replace with actual image URL
      pdf: "/docs/doc/doc-1.pdf", // Replace with actual PDF URL
    },
    {
      title: "Sample Document 2",
      description: "This is the second sample document containing an image and a downloadable PDF. This is the second sample document containing an image and a downloadable PDF.",
      image: "/docs/image/doc-1.jpeg", // Replace with actual image URL
      pdf: "/docs/doc/doc-2.pdf", // Replace with actual PDF URL
    },
    {
      title: "police cameroon concours",
      description: "This is the third sample document containing an image and a downloadable PDF.",
      image: "/docs/image/doc-1.jpeg", // Replace with actual image URL
      pdf: "/docs/doc/police-cameroon-concours.pdf", // Replace with actual PDF URL
    },
  ];

  const handleDownload = (pdfUrl, filename) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-12.5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20">
      {documents.map((doc, index) => (
        <div key={index} className="z-40 rounded-xl border border-white bg-white p-2 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark flex flex-col justify-between items-start hover:border-primary duration-300">
          {/* 
          <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-primary p-1">
            <Image src={doc.image} alt={doc.title} width={36} height={36} className="w-full h-full rounded-xl object-cover" />
          </div> */}
          <h5 className="font-semibold text-black dark:text-white">{doc.title}</h5>
          <p className="p-0 m-0">{doc.description}</p>
          <div className="flex justify-between gap-3 items-center transition w-full bg-slate-50 rounded-xl mt-3 p-1 shadow border-gray-200  border-t  dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">

            <button
              onClick={() => handleDownload(doc.pdf, `${doc.title}.pdf`)}
              className="text-regular font-medium text-waterloo    p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none hover:bg-primary hover:dark:bg-primary transition-all hover:text-white   hover:border-primary"
            >
              Download PDF
            </button>

            <Link
              href={doc.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-regular font-medium text-waterloo hover:text-primary    p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
            >
              <RiEyeFill size={21} />
            </Link>
          </div>
        </div>
      ))}


      {/* C:\Users\Locked-Skinny\Desktop\my resume\solid-nextjs-main\public\docs\doc */}
    </div>
  );
};


// Sample images array
const images = [
  { src: "/images/gallery/image.jpg", title: "Image", description: "Description for Image", category: "column-1" },
  { src: "/images/gallery/image-1.jpg", title: "Image 1", description: "Description for Image 1", category: "column-1" },
  { src: "/images/gallery/image-2.jpg", title: "Image 2", description: "Description for Image 2", category: "column-1" },
  { src: "/images/gallery/image-3.jpg", title: "Image 3", description: "Description for Image 3", category: "column-2" },
  { src: "/images/gallery/image-4.jpg", title: "Image 4", description: "Description for Image 4", category: "column-2" },
  { src: "/images/gallery/image-5.jpg", title: "Image 5", description: "Description for Image 5", category: "column-2" },
  { src: "/images/gallery/image-6.jpg", title: "Image 6", description: "Description for Image 6", category: "column-3" },
  { src: "/images/gallery/image-7.jpg", title: "Image 7", description: "Description for Image 7", category: "column-3" },
  { src: "/images/gallery/image-8.jpg", title: "Image 8", description: "Description for Image 8", category: "column-3" },

  { src: "/images/gallery/image-9.jpg", title: "Image 9", description: "Description for Image 9", category: "column-4" },
  { src: "/images/gallery/image-10.jpg", title: "Image 10", description: "Description for Image 10", category: "column-4" },
  { src: "/images/gallery/image-11.jpg", title: "Image 11", description: "Description for Image 11", category: "column-4" },
];



const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description: string } | null>(null);

  const handleDownload = (src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop() || "downloaded-image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Grouping images by their categories
  const categories = ["column-1", "column-2", "column-3", "column-4"];
  const categorizedImages = categories.reduce((acc, category) => {
    acc[category] = images.filter(image => image.category === category);
    return acc;
  }, {} as { [key: string]: typeof images });

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="grid gap-4">
            {categorizedImages[category].map((image, imageIndex) => (
              <div key={imageIndex} className="relative group">
                <img
                  className="h-auto max-w-full rounded-lg cursor-pointer hover:border-primary"
                  src={image.src}
                  alt={image.title}
                  onClick={() => setSelectedImage(image)}
                />
                <div
                  className="absolute bottom-2 rounded-xl left-2 bg-white dark:bg-blacksection p-2 text-sm opacity-0 group-hover:opacity-100 transition"
                  onClick={() => setSelectedImage(image)}
                >
                  <RiEyeFill />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* The image modal (if selected) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4">
          <div className=" max-h-[70vh] bg-white dark:bg-blacksection p-2 rounded-xl max-w-lg w-full relative">

            <div
              className="text-regular font-medium text-waterloo hover:text-primary   z-1 absolute top-2 right-2 p-2 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
              onClick={() => setSelectedImage(null)}

            >
              <RiCloseFill size={21} />
            </div>

            <div className="max-h-[50vh] w-full overflow-y-hidden relative">
              <img src={selectedImage.src} alt={selectedImage.title} className="w-full rounded-xl" />
              <div className="absolute left-0 bottom-0 w-full h-full shadow-inset-bottom dark:shadow-night-inset-bottom"></div>
            </div>


            <h2 className="text-xl font-semibold mt-4">{selectedImage.title}</h2>
            <p className="text-gray-600 mt-2">{selectedImage.description}</p>
            <button
              onClick={() => handleDownload(selectedImage.src)}
              className="mt-4 w-full bg-blue-600 text-white hover:bg-primary p-2 rounded"
            >
              Download Image
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;




export { Skills, HowHelp, DocumentCard, ImageGallery };