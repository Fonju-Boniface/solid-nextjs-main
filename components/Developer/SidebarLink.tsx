// "use client";
import Link from "next/link";
import Image from "next/image";
import { RiDiscordFill, RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";

const SidebarLink = () => {
  return (
    <>
      <div className="max-w-sm px-4 lg:w-1/4 lg:sticky lg:top-[74px]">
        <div className=" rounded-full lg:rounded-xl  transition-all shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none p-2">
          <ul className="space-y-2">
            <div className="block relative">


              <div className="p-1 rounded-full lg:rounded-xl relative  lg:shadow-solid-9 lg:border-gray-300 border lg:border-r lg:border-t dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none ">
                <Image
                  src="/images/features/features-light-01.png"
                  alt="Me"
                  width={150}
                  height={150}
                  className="lg:rounded-xl rounded-full w-60 h-60 lg:w-full lg:h-auto object-cover"
                />

              </div>

              <div className=" bottom-0 right-0 absolute lg:relative w-15 h-15 lg:w-full lg:h-5 rounded-full lg:rounded-xl border-white dark:border-blacksection border-8 lg:border-none overflow-hidden flex mt-2">
                <div className="bg-green-800 w-full h-full"></div>
                <div className="bg-red-700 w-full h-full"></div>
                <div className="bg-yellow-400 w-full h-full"></div>
              </div>















              {/* <Link
          href={`/docs`}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          Introduction
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Bootstrap Template Guide
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Style Guide
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Using Tailwind Components
        </Link> */}
            </div>

          </ul>
        </div>
        <h3 className="mt-3 w-full text-center">Africa/Cameroon/Buea</h3>
        <Link href="tel:+237670436196" className=" flex justify-center items-center gap-2 text-md hover:underline text-primary opacity-50 hover:opacity-80">
     
         +237 670 436 196</Link>
        
        <Link href="mailto:bonifacefonju@gmail.com" className=" flex justify-center items-center gap-2 text-md hover:underline text-primary opacity-50 hover:opacity-80">
        
        bonifacefonju@gmail.com</Link>
        <h1 className="mt-1 w-full text-center uppercase font-extrabold">Fongang Fonju Bonifece</h1>
        {/* <h1 className="mt-1 w-full text-center uppercase font-extrabold text-2xl">  </h1> */}
        

        <div className="mt-3 flex justify-center items-center gap-3 w-full">
          <div className="mt-3 p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none text-center w-1/2">
            English <b>97%</b>
          </div>


          <div className="mt-3 p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none text-center w-1/2">
            French <b>45%</b>
          </div>
        </div>
        <div className="flex justify-evenly gap-3 items-center transition w-full rounded-t-xl  bg-slate-50 lg:rounded-xl  mt-3 p-1 shadow border-gray-200  border-t  dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">

          <Link
            href="https://github.com/NextJSTemplates/solid-nextjs"
            className="text-regular font-medium text-waterloo hover:text-primary   mt-2 p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
          >
            <RiGithubFill size={21} />
          </Link>
          <Link
            href="https://github.com/NextJSTemplates/solid-nextjs"
            className="text-regular font-medium text-waterloo hover:text-primary    p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
          >
            <RiLinkedinFill size={21} />
          </Link>
          <Link
            href="https://github.com/NextJSTemplates/solid-nextjs"
            className="text-regular font-medium text-waterloo hover:text-primary    p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
          >
            <RiFacebookFill size={21} />
          </Link>
          <Link
            href="https://github.com/NextJSTemplates/solid-nextjs"
            className="text-regular font-medium text-waterloo hover:text-primary    p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
          >
            <RiDiscordFill size={21} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SidebarLink;
