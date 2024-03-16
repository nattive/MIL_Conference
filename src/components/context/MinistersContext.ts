import { createContext } from "react";

type MinistersModalProps = {
  OpenMinisterModal?: boolean;
  setOpenMinistersModal?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useMinisterCtx = createContext({} as MinistersModalProps);
