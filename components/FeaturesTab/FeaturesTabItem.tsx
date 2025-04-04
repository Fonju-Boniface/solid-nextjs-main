import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

import { motion } from "framer-motion";
import { FadeUp } from "../Features/SingleFeature";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <motion.div
          variants={FadeUp(0.2)}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll

          className="animate_right md:w-1/2"
        >

          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: -20,
            },

            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
          className="hidden md:w-1/2 animate_left relative mx-auto aspect-[588/526.5] md:block"
        >

          <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </motion.div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
