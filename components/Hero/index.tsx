"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../Features/SingleFeature";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
              className="animate_left w-full lg:w-1/2 "
            >

              <motion.h4
                variants={FadeUp(0.4)}
                initial="initial"
                whileInView={"animate"}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
                className="animate_top mb-4.5 text-lg font-medium text-black dark:text-white"
              >


                🔥 Hello! - You are in the right place...
              </motion.h4>

              <motion.h1
                variants={FadeUp(0.6)}
                initial="initial"
                whileInView={"animate"}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
                className="animate_top mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero"
              >


                We all need an online {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Presence
                </span>
              </motion.h1>

              <motion.p
                variants={FadeUp(0.8)}
                initial="initial"
                whileInView={"animate"}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
                className="animate_top w-full"
              >

                Using some of the worlds best tools to creating; morden, stunning, responsive, Interactive and Complex codebase,
                We provide our clients with outstanding User-Interfaces, Designs with creativity to polish and secure their Organisations interest
                We make sure that your digital presence is well branded, so as to put your projests/organinisations/portfolio in the internet where your friends, clients and all your connections can find you in a more collaborative manner.
                {/* Solid Pro - Packed with all the key integrations you need for
                swift SaaS startup launch, including - Auth, Database, Sanity
                Blog, Essential Components, Pages and More. Built-winth -
                Next.js 13, React 18 and TypeScript. */}
              </motion.p>

              <motion.div
                variants={FadeUp(1)}
                initial="initial"
                whileInView={"animate"}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
                className="animate_top mt-10"
              >

                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">

                    <input value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary" />


                    <button

                      aria-label="get started button"
                      className="animate_left flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get in touch
                    </button>

                  </div>
                </form>

                <motion.p
                  variants={FadeUp(1.6)}
                  initial="initial"
                  whileInView={"animate"}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
                  className="animate_top mt-5 text-black dark:text-white"
                >
                  single plain web page for free in only 20:24:54

                </motion.p>


              </motion.div>


            </motion.div>

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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
              className="animate_right hidden md:w-1/2 lg:block"
            >
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </motion.div>


          </div>
        </div>



        {/* <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false, amount: 0.2 }} // Ensure animation replays on scroll
              className="animate_top  md:w-1/2"
            ></motion.div> */}
      </section>
    </>
  );
};

export default Hero;
