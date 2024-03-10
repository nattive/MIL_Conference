// import React, { useContext } from "react";
import { FaCloudDownloadAlt, FaLongArrowAltLeft } from "react-icons/fa";
import { ProgressTrackerContext } from "../context/ProgresTrackerContext";
import { useContext } from "react";
import Loading from "../Misc/Loading";

const QRDownload: React.FC = () => {
  const {
    registerReady,
    completeDownload,
    setRegisterReady,
    // setCompleteDownload,
  } = useContext(ProgressTrackerContext);

  const handleReturn = () => {
    // if(window.history.length > 1) window.history.go(-1)
    // else window.location.replace("/");

    if (!completeDownload || registerReady) {
      if (setRegisterReady) {
        setRegisterReady(false);
      }
    }
  };
  return (
    <>
      <section className="px-3 md:px-0">
        <div className="bg-white px-4 pt-8 pb-4 md:w-[30%] mx-auto shadow-2xl rounded-md relative">
          <div className="QRCode h-[200px] flex justify-center items-center">
            <Loading />
          </div>
          <div className="button ">
            <button className="flex items-center space-x-3 bg-black rounded-full text-white px-4 py-2 mx-auto group hover:bg-black/80 ">
              <span>Download</span>
              <FaCloudDownloadAlt className="group-hover:transition-all delay-100 group-hover:animate-bounce" />
            </button>
          </div>
          <FaLongArrowAltLeft
            onClick={handleReturn}
            className="text-black  group-hover:-translate-x-2 cursor-pointer transition-all duration-150 ml-2 absolute top-4"
          />
        </div>
      </section>
    </>
  );
};

{
  /* <FaCloudDownloadAlt />; */
}

export default QRDownload;
