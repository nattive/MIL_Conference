import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { RegisterProps } from "../../..";

const TestimonyForm = () => {
  const [userData, setUserData] = useState<RegisterProps>({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const onSubmit = (values: RegisterProps) => {
    console.log(values);
    setUserData(values);
  };

  return (
    <>
      {/* form */}
      <div className="test_word grid gap-8 grid-cols-1 md:grid-cols-2 px-4 md:px-0">
        <div className="wrap text-xl">
          <h1 className="s">
            “You are my witnesses,” declares the LORD, “and my servant whom I
            have chosen, so that you may know and believe me and understand that
            I am he. Before me no god was formed, nor will there be one after
            me.
          </h1>

          <span className="mt-10 block">Isaiah 43:10</span>
        </div>

        <div className="form">
          <Formik
            initialValues={userData}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {() => (
              <Form method="post" className="  bg-white ">
                <div className="flex flex-col space-y-4">
                  <Field
                    type="text"
                    name="name"
                    required
                    className="py-3 outline-gray-300 placeholder:text-gray-400 placeholder:font-light px-2 bg-gray-100"
                    placeholder="Your Name"
                  />

                  <Field
                    type="email"
                    name="email"
                    required
                    className="py-3 outline-gray-300 placeholder:text-gray-400 placeholder:font-light px-2 bg-gray-100"
                    placeholder="Your Email"
                  />
                  <Field
                    type="email"
                    name="subject"
                    required
                    className="py-3 outline-gray-300 placeholder:text-gray-400 placeholder:font-light px-2 bg-gray-100"
                    placeholder="Testimony Subject"
                  />

                  <textarea
                    rows={6}
                    cols={50}
                    name="testimony"
                    id=""
                    required
                    className="py-3 outline-gray-300 placeholder:text-gray-400 placeholder:font-light px-2 bg-gray-100"
                    placeholder="Tell us about your testimony"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 bg-green-700  text-white py-3 text-xs w-fit px-10 rounded-full flex hover:scale-105 transition-all 
                  duration-100 hover:shadow-xl 
                  items-center group "
                >
                  <span className="font-bold text-sm block">Continue</span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default TestimonyForm;
