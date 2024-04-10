import React, { useContext } from "react";
import RegisterForm from "../../components/Register/RegisterForm";
import QRDownload from "../../components/Register/QRDownload";
import { ProgressTrackerContext } from "../../components/context/ProgresTrackerContext";
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

      {/* <Outlet /> */}
     {/* TODO:
      do a nested route that contains the register form and the qr form page
      qr form page will display information return from the api (check api type)
       
     */}
    </>
  );
};

export default Register;
