"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "../Features/SingleFeature";
import { SlideLeft } from "../Test";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0 overflow-hidden">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 20,
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
            className="animate_right"
          >

            <Image
              width={335}
              height={384}
              src="/images/shape/shape-04.png"
              alt="Man"
              className="relative md:absolute md:-left-15 md:-top-25 -z-1 lg:left-0 mb-40 md:mb-0"
            />
            <Image
              width={132}
              height={132}
              src="/images/shape/shape-05.png"
              alt="Doodle"
              className="absolute bottom-0 right-0 -z-1"
            />

            <Image
              fill
              src="/images/shape/shape-dotted-light-02.svg"
              alt="Dotted"
              className="absolute left-0 top-0 -z-1 dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark-02.svg"
              alt="Dotted"
              className="absolute left-0 top-0 -z-1 hidden dark:block"
            />
          </motion.div>

          <motion.div
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll

            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Trusted by Global Companies.
            </h2>
            <p className="mx-auto lg:w-11/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={FadeUp(0.2)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll

              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                500K
              </h3>
              <p className="text-lg lg:text-para2">World Wide Clients</p>
            </motion.div>
            <motion.div
              variants={FadeUp(0.4)}
              // variants={SlideLeft(0.4)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll

              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                1M+
              </h3>
              <p className="text-lg lg:text-para2">Downloads</p>
            </motion.div>
            <motion.div
              variants={FadeUp(0.6)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll

              className="animate_top text-center"
            >
              <h3 className="mb-2.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                865
              </h3>
              <p className="text-lg lg:text-para2">Winning Award</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
