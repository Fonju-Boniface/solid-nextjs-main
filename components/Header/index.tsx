"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { RiGithubFill } from "react-icons/ri";
import { FullscreenModeToggle } from "./FullscreenModeToggle";
import ScrollToTopBottom from "./progress/ScrollProgressBar/ScrollToTopBottom";
import DownloadResume from "./DownloadResume";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full rounded-b-xl p-2 ${stickyMenu
        ? "bg-white !py-2 shadow transition duration-100 dark:bg-blacksection"
        : ""
        }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Link href="/">
            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            />
          </Link>

          {/* <!-- Hamburger Toggle BTN --> */}
          <div className="flex justify-end gap-3 items-center xl:hidden">
            {/* <!-- Hamburger Toggle BTN --> */}

            <div className="flex justify-center gap-3 items-center fixed bottom-0 left-0 xl:relative transition w-full rounded-t-xl  bg-slate-50  p-1 shadow border-gray-200  border-t  dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">

              <button
                aria-label="hamburger Toggler"
                className="block xl:hidden    p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
                onClick={() => setNavigationOpen(!navigationOpen)}
              >
                <span className="relative block h-5.5 w-5.5 cursor-pointer">
                  <span className="absolute right-0 block h-full w-full">
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"
                        }`}
                    ></span>
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"
                        }`}
                    ></span>
                    <span
                      className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"
                        }`}
                    ></span>
                  </span>
                  <span className="du-block absolute right-0 h-full w-full rotate-45">
                    <span
                      className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"
                        }`}
                    ></span>
                    <span
                      className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"
                        }`}
                    ></span>
                  </span>
                </span>
              </button>

              <ThemeToggler />

              <Link
                href="https://github.com/NextJSTemplates/solid-nextjs"
                className="text-regular font-medium text-waterloo hover:text-primary    p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
              >
                <RiGithubFill size={21} />
              </Link>

              <div className=" p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
                <FullscreenModeToggle />
              </div>
              <DownloadResume />


              <div className=" p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
                {/* <Progress /> */}

                <ScrollToTopBottom />
              </div>
            </div>

            <Link
              href="https://nextjstemplates.com/templates/solid"
              className="flex items-center justify-center rounded-xl bg-primary px-2 md:px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
            >
              Donate 🔥
            </Link>

          </div>

        </div>


        <div className={`fixed top-0 left-0 h-[100vh] -z-20 w-[100%] block xl:hidden  dark:bg-zinc-900
                      bg-zinc-100 opacity-80 transition-all ${!navigationOpen
            ? " top-[-100%]"
            : " top-0 "
          } flex flex-col
                  justify-center items-center`} onClick={() => setNavigationOpen(!navigationOpen)}>

        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary" >
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }

                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 hidden xl:flex items-center gap-1 xl:mt-0">
            <DownloadResume />

            <Link
              href="https://github.com/NextJSTemplates/solid-nextjs"
              className="text-regular font-medium text-waterloo hover:text-primary    p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
            >
              <RiGithubFill size={21} />
            </Link>
            <div

              className="text-regular font-medium text-waterloo hover:text-primary    p-3 rounded-xl shadow-solid-9 border-gray-300 border-l border-b dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none"
            >
              <FullscreenModeToggle />
            </div>

            <ThemeToggler />


            <Link
              href="https://nextjstemplates.com/templates/solid"
              className="flex items-center justify-center rounded-xl bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
            >
              Donate 🔥
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
