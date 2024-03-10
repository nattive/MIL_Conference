import { createContext } from "react";

type ProgressTrackerProps = {
  registerReady: boolean;
  completeDownload: boolean;
  setRegisterReady?: React.Dispatch<React.SetStateAction<boolean>>;
  setCompleteDownload?: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultContext: ProgressTrackerProps = {
  registerReady: false,
  completeDownload: false,
  setRegisterReady: undefined,
  setCompleteDownload: undefined,
};

export const ProgressTrackerContext = createContext(defaultContext);
