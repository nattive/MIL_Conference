import React, { useContext } from "react";
import { ProgressTrackerContext } from "../context/ProgresTrackerContext";

import { GrCheckmark } from "react-icons/gr";

const ProgessTracker: React.FC = () => {
  const {
    registerReady,
    completeDownload,
    // setRegisterReady,
    // setCompleteDownload, 
  } = useContext(ProgressTrackerContext);
  return (
    <>
      <div className="wrap flex  justify-center items-center my-5 ">
        <div
          className={`${
            registerReady ? "bg-blue-600 border-blue-600" : "border-gray-200"
          } rounded-full border  flex justify-center h-5 w-5 text-xs items-center`}
        >
          {registerReady ? <GrCheckmark className="text-white" /> : 1}
        </div>
        <div
          className={`${
            registerReady ? "bg-blue-600" : "bg-gray-100"
          }  lin h-[.5px] w-[50px]`}
        ></div>
        <div
          className={`${
            completeDownload ? "bg-blue-600 border-blue-600" : "border-gray-200"
          } rounded-full border  border-gray-200 flex justify-center h-5 w-5 text-xs items-center`}
        >
          {completeDownload ? <GrCheckmark className="text-white" /> : 2}
        </div>
      </div>
    </>
  );
};

export default ProgessTracker;
