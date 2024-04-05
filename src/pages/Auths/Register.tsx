import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/Register/RegisterForm";
import QRDownload from "../../components/Register/QRDownload";
import { ProgressTrackerContext } from "../../components/context/ProgresTrackerContext";
import ProgessTracker from "../../components/Misc/ProgessTracker";
import Header from "../../components/Misc/Header";

const Register: React.FC = () => {
  const {
    registerReady,
    // completeDownload,
    // setRegisterReady,
    // setCompleteDownload,
  } = useContext(ProgressTrackerContext);

  return (
    <>
      <Header ShowHeader={true} />
     
      {/* <ProgessTracker /> */}
      {/* form */}

      {!registerReady ? <RegisterForm /> : <QRDownload />}
    </>
  );
};

export default Register;
