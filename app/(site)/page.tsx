import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
// import Blog from "@/components/Developer";
import Testimonial from "@/components/Testimonial";
import Test from "@/components/Test";
// import TextSanity from "@/components/TextSanity";
import BlogPage from "./BlogPosts";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro"
};


export default function Home() {
  return (
    <main className="overflow-y-hidden">
      <Hero />
      {/* <BlogPage /> */}

      <Brands />
      {/* <TextSanity /> */}
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      {/* <Test /> */}
      <Blog />
    </main>
  );
}
