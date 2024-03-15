import { createContext } from "react";

type SideBarProps = {
  Open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SideBarContext = createContext({} as SideBarProps);
