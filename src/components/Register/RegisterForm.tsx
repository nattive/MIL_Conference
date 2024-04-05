import React from "react";
import { useRegisterEvent } from "../../api/hook";

const RegisterForm: React.FC = () => {
const {mutate, isPending} = useRegisterEvent()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data: {
      name?: string
      email?: string
      gender?: string
      mobileNumber?: string
    } = {};
    // @ts-ignore
    data.name = event.target.elements.name.value;
    // @ts-ignore
    data.email = event.target.elements.email.value;
    // @ts-ignore
    data.gender = event.target.elements.gender.value;
    // @ts-ignore
    data.mobileNumber = event.target.elements.mobileNumber.value;
    
    mutate(data);
    

  };
  return (
    <>
      {/* form */}
      <main id="main" className="main-page">
        <div className="header-title">

        </div>
        <section id="speakers-details" className="wow fadeIn">
          <div className="container">


            <div className="row w-full">
              <div className="col-xs-12 my-auto col-md-6">
                <div className="section-header">
                  <h2>Register</h2>
                  <p>Register for the conference.</p>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <form
                  onSubmit={onSubmit}
                  className=" bg-white col-xs-12   px-4 pt-8 pb-4 mx-auto  rounded-md"
                >
                  <section id="contact" className="section-bg wow fadeInUp">
                    <div className="form">
                      <div id="sendmessage">Your message has been sent. Thank you!</div>
                      <div id="errormessage"></div>
 
                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            name="name"
                            required
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                          />
                          <div className="validation"></div>
                        </div>
                        <div className="form-group col-md-12">
                          <input
                            type="email"
                            required
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                          />
                          <div className="validation"></div>
                        </div> 
                        <div className="form-group col-md-12">
                          <input 
                            required
                            className="form-control"
                            name="mobileNumber"
                            id="mobileNumber"
                            placeholder="Your Phone number"
                            data-rule="email"
                            data-msg="Please enter a valid phone number"
                          />
                          <div className="validation"></div>
                        </div> 
                      <div className="form-group col-md-12">
                        <select
                          required
                          name="gender" id="" className="form-control">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        <div className="validation"></div>
                      </div>

                      <div className="text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </section>



                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
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
