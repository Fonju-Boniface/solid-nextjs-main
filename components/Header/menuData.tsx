import { Menu } from "@/types/menu";
import { BiHome } from "react-icons/bi";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    icon: <BiHome />,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    icon: <BiHome />,
    path: "/#services",
  },
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    icon: <BiHome />,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Developer",
    newTab: false,
    icon: <BiHome />,
    path: "/developer",
  },
  {
    id: 3,
    title: "Pages",
    icon: <BiHome />,
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        icon: <BiHome />,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        icon: <BiHome />,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        icon: <BiHome />,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        icon: <BiHome />,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        icon: <BiHome />,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        icon: <BiHome />,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    icon: <BiHome />,
    path: "/support",
  },
];

export default menuData;
