import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/Register/RegisterForm";
import QRDownload from "../../components/Register/QRDownload";
import { ProgressTrackerContext } from "../../components/context/ProgresTrackerContext";
import ProgessTracker from "../../components/Misc/ProgessTracker";

const Register: React.FC = () => {
  const {
    registerReady,
    // completeDownload,
    // setRegisterReady,
    // setCompleteDownload,
  } = useContext(ProgressTrackerContext);

  return (
    <>
      <div
        className="btm bg-[#0A230B]/40 h-[30vh] w-full px-3 bg-[url('/assets/registerBg_img.jpeg')]  bg-top
      bg-cover bg-blend-soft-light  "
      >
        <div className="wrapper h-[80px] w-[80px] pt-4">
          <Link className="block " to="/">
            <img
              src="./assets/logo.png"
              height="100"
              width="100"
              alt="image"
              className="h-full w-full relative "
            />
          </Link>
        </div>

        <div className="d w-full flex justify-end px-10">
          <h2 className="text-white text-3xl font-light mt-5">
            LEADERSHIP PROGRAMME
          </h2>
        </div>
      </div>

      <ProgessTracker />
      {/* form */}

      {!registerReady ? <RegisterForm /> : <QRDownload />}
    </>
  );
};

export default Register;
