import { Field, Form, Formik } from "formik";
import { useState } from "react";

const FooterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="getEarlyAcess ">
      <Formik
        initialValues={{ email }}
        onSubmit={(values) => {
          setEmail(values.email);
          console.log(values.email);
        }}
      >
        {() => (
          <Form
            method="post"
            className=" pb-5 mx-auto shadow-2xl rounded-md flex flex-col md:flex-row items-center space-y-3 md:space-y-0 space-x-2"
          >
            <Field
              type="email"
              name="email"
              required
              className="py-3 block rounded-full text-xs outline-none 
              placeholder:text-gray-400 placeholder:font-light bg-gray-800 px-5"
              placeholder="Enter Email"
            />

            <button
              type="submit"
              className=" relative bg-white hover:bg-gray-300 font-medium text-black flex space-x-1 py-2 md:py-3  
              px-5  text-[.5rem] md:text-xs rounded-full w-full"
            >
              <span className="text-xs font-bold block">Get</span>
              <span className="text-xs font-bold block">early</span>
              <span className="text-xs font-bold block">access</span>
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FooterForm;
