import { Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ProgressTrackerContext } from "../context/ProgresTrackerContext";
import { RegisterProps } from "../../../index.ts";

const RegisterForm: React.FC = () => {
  const [userData, setUserData] = useState<RegisterProps>({
    name: "",
    email: "",
    gender: "",
  });

  //   const validate = (values) => {
  //     const errors = {};

  //     if (!values.name) {
  //       errors.name = "Required";
  //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)) {
  //       errors.name = "Invalid email address";
  //     }

  //     if (!values.email) {
  //       errors.email = "Required";
  //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //       errors.email = "Invalid email address";
  //     }

  //     return errors;
  //   };

  const {
    registerReady,
    // completeDownload,
    setRegisterReady,
    // setCompleteDownload,
  } = useContext(ProgressTrackerContext);

  useEffect(() => {
    if (!registerReady && setRegisterReady) {
      setRegisterReady(false);
    }
  }, [registerReady, setRegisterReady]);

  const onSubmit = (values: RegisterProps) => {
    console.log(values);
    setUserData(values);
    if (setRegisterReady) {
      setRegisterReady(true);
    }
  };
  return (
    <>
      {/* form */}
      <div className="  md:mt-5 mb-5 px-2 md:px-0">
        <Formik
          initialValues={userData}
          //   validate={validate}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {() => (
            <Form
              method="post"
              className=" bg-white col-xs-12 col-md-7 px-4 pt-8 pb-4 md:w-[80%] mx-auto shadow-2xl rounded-md"
            >
              <section id="contact" className="section-bg wow fadeInUp">
                <div className="container">
                  <div className="form">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>
                    <form
                      action="#"
                      method="post"
                      role="form"
                      className="contactForm"
                    >
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                          />
                          <div className="validation"></div>
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                          />
                          <div className="validation"></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div className="validation"></div>
                      </div>
                     
                      <div className="text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>


              
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterForm;

//  axios
//    .post("https://devdeskqueue.herokuapp.com/api/auth/register", values)
//    .then((res) => {
//      localStorage.setItem("token", res.data.payload);
//      setUserData({ ...userData, token: res.data.payload });
//      setRegisterReady(true);
//      setTimeout(() => {
//        navigate("/dashboard");
//      }, 1000);
//    });
