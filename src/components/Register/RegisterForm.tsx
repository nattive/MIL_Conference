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
      <div className=" w-full md:mt-5 mb-5 px-2 md:px-0">
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
              className=" bg-white px-4 pt-8 pb-4 md:w-[80%] mx-auto shadow-2xl rounded-md"
            >
              <div className="wrapper">
                <div className="wrap mb-6">
                  <h1 className="font-light text-lg md:text-xl">Register</h1>
                  <span className="text-xs text-gray-500 block md:text-sm">
                    Kindly enter your correct details
                  </span>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="url " className="text-gray-500">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    required
                    className="py-3 outline-gray-300 placeholder:text-gray-400 placeholder:font-light px-2 bg-gray-100"
                    placeholder="Enter Name"
                  />
                </div>

                <div className="flex flex-col my-4">
                  <label htmlFor="url" className="text-gray-500">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    required
                    className="py-3 outline-gray-300 placeholder:text-gray-400 placeholder:font-light px-2 bg-gray-100"
                    placeholder="Enter Email"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="url" className="text-gray-500">
                    Gender
                  </label>
                  <Field
                    as="select"
                    name="gender"
                    required
                    className="appearance-none bg-gray-100 outline-gray-300 px-5 w-fit "
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Field>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 bg-[#0A230B] text-white py-1 text-xs w-fit px-7 rounded-full flex  items-center group"
              >
                <span className="">Continue</span>
                <FaLongArrowAltRight className="text-white group-hover:translate-x-2 transition-all duration-150 ml-2" />
              </button>
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
