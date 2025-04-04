import SidebarLink from "@/components/Developer/SidebarLink";
import { Metadata } from "next";
import ImageGallery, { DocumentCard, HowHelp, Skills } from "./developerData";


export const metadata: Metadata = {
  title: "Fonju Boniface's Career",

  // other metadata
  description: "This is my Portfolio page for show detaily who and what i am."
};






export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32 flex justify-center items-center">
        <div className=" container mx-0 lg:mx-auto">
          <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row">
            <SidebarLink />
            <div className="w-full lg:px-4 lg:w-3/4 flex flex-col gap-12">
              {/* ============================= ==========================>> */}

              <div className="blog-details blog-details-docs  px-4 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 className="mt-10  text-center lg:text-start">Senior Front-End / Fullstack Developer</h1>
                <p className=" text-justify lg:text-start">
                  This document serves as a simple template to showcase a sample
                  layout and format. It is solely created for demonstration
                  purposes and is not intended for any official use.
                </p>

                <p className="text-body-color dark:text-body-color-dark text-base text-justify lg:text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque pariatur quidem velit fugiat sit voluptas nam rerum laudantium at nemo corporis cupiditate molestiae, modi deleniti iste tempore sequi a beatae. Praesentium tempora dicta, ad ipsa fugiat voluptatum modi minima cum suscipit necessitatibus deserunt velit eum totam error omnis minus corporis neque eaque quibusdam labore? Voluptatem a nulla at quisquam consectetur ut, odit porro quas nobis ipsam, totam quis aperiam consequatur cum minima? Corporis aliquid quasi aliquam earum assumenda illo commodi minima. Sit et non laborum, rem, vero excepturi quae ullam animi reiciendis commodi iure obcaecati nobis, tempore maiores vitae?
                </p>

              </div>

              {/* ============================= How data  ==========================>> */}
              <HowHelp />

              {/* ============================= Skills data  ==========================>> */}
              <Skills />

              {/* ============================= Qualifications ==========================>> */}

              <div className="blog-details blog-details-docs  px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Qualifications & Certifications</h1>
                <p>
                  This document serves as a simple template to showcase a sample
                  layout and format. It is solely created for demonstration
                  purposes and is not intended for any official use.
                </p>

                <DocumentCard />
              </div>
              <div className="blog-details blog-details-docs  px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Image Gallery</h1>
                <p>
                  This document serves as a simple template to showcase a sample
                  layout and format. It is solely created for demonstration
                  purposes and is not intended for any official use.
                </p>

                <ImageGallery />
              </div>


              {/*                 
                <div className="flex flex-col justify-center items-start gap-4">
                  <div className="px-4 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                    <p>
                      This document serves as a simple template to showcase a sample
                      layout and format. It is solely created for demonstration
                      purposes and is not intended for any official use.
                    </p>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      Out of consistency, anxiety, creativity and the love to learn more,
                      i can adapt to any working environment, work with a team
                      of any size
                    </p>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      to check out some of my works, they may not be real-life projects but they present the most of what i can offer and do for your organisation.
                    </p>
                  </div>
                </div> */}



            </div>
          </div>
        </div>
      </section>
    </>
  );
}
