import React from "react";
import Header from "../components/Misc/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Broadcast: React.FC = () => {
  return (
    <div>
      <Header ShowHeader={true} />

      <main className="mt-20 mx-auto w-[80%]">
        <div className="wrap py-5">
          <h1 className="font-extrabold text-black/80 text-xl md:text-3xl text-center">
            YOUTUBE LIVE BROADCAST
          </h1>
        </div>

        <div className="y-Wrapper py-3">
          <iframe
            // width="1053"
            // height="592"
            className="h-[300px] w-full md:h-[592px] md:w-[1053px]"
            src="https://www.youtube.com/embed/1peKUv-L328"
            title="#Roadtowofbec2024- Meet our WAFBEC 2024 Speaker: Apostle Arome Osayi"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
        </div>

        {/* audio */}
        <div className="audio my-20 flex justify-center">
          <div className="wrap bg-green-700  w-fit  flex items-center py-3 px-4 hover:bg-green-800">
            <Link
              to="/"
              className="font-bold text-gray-200 block hover:text-gray-300 text-sm"
            >
              LISTEN TO THE AUDIO STREAMING
            </Link>
          </div>
        </div>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Broadcast;
