"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "../Features/SingleFeature";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, duration } = blog;

  return (
    <>
    
      <motion.div
        variants={FadeUp(duration)}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
        transition={{ duration: 0.5, delay: 0.1 }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/blog/blog-details`}>
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3">{metadata}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
