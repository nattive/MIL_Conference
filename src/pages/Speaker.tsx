import React from "react";
import { BsArrowReturnLeft } from "react-icons/bs";

const Speaker: React.FC = () => {
  return (
    <>
      <main id="main" className="main-page">
        <section id="speakers-details" className="wow fadeIn">
          <div className="container">
            <a
              href="/ministers"
              className="text-black mb-8 flex  items-center  space-x-2 group hover:shadow-md bg-white border border-gray-500 rounded-md w-fit px-2 py-1 hover:text-black "
            >
              <BsArrowReturnLeft className="group-hover:font-bold" />
              <span className="">BACK</span>
            </a>
            <div className="section-header">
              <h2>Speaker Details</h2>
              <p>Praesentium ut qui possimus sapiente nulla.</p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img
                  src="img/speakers/1.jpg"
                  alt="Speaker 1"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <div className="details">
                  <h2>Brenden Legros</h2>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                  <p>
                    Voluptatem perferendis sed assumenda voluptatibus.
                    Laudantium molestiae sint. Doloremque odio dolore dolore
                    sit. Quae labore alias ea omnis ex expedita sapiente
                    molestias atque. Optio voluptas et.
                  </p>
                  <p>
                    Aboriosam inventore dolorem inventore nam est esse. Aperiam
                    voluptatem nisi molestias laborum ut. Porro dignissimos eum.
                    Tempore dolores minus unde est voluptatum incidunt ut
                    aperiam.
                  </p>
                  <p>
                    Et dolore blanditiis officiis non quod id possimus. Optio
                    non commodi alias sint culpa sapiente nihil ipsa magnam. Qui
                    eum alias provident omnis incidunt aut. Eius et officia
                    corrupti omnis error vel quia omnis velit. In qui debitis
                    autem aperiam voluptates unde sunt et facilis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Speaker;
