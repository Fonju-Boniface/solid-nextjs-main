import { ReactNode } from "react";

export type Menu = {
  id: number;
  title: string;
  icon: ReactNode;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
