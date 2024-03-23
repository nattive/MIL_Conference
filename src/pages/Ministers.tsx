import React from "react";
import Header from "../components/Misc/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Misc/Banner";

const Ministers: React.FC = () => {
  return (
    <>
      <Header ShowHeader={true} />

      <section className="section mt-20">
        <Banner
          content="...but ministers through whom you believed, as the Lord gave to each
        one?"
          scripture="1 Corinthians 3:4-15"
          image="/assets/banner.jpeg"
        />

        <div id="speakers" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>MEET THE 2024 MIM MINISTERS</h2>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img
                    src="img/speakers/1.jpg"
                    alt="Speaker 1"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="/speaker">Brenden Legros</a>
                    </h3>
                    <p>Quas alias incidunt</p>
                    <div className="social">
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img
                    src="img/speakers/2.jpg"
                    alt="Speaker 2"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="/speaker">Hubert Hirthe</a>
                    </h3>
                    <p>Consequuntur odio aut</p>
                    <div className="social">
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img
                    src="img/speakers/3.jpg"
                    alt="Speaker 3"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="speaker-details.html">Cole Emmerich</a>
                    </h3>
                    <p>Fugiat laborum et</p>
                    <div className="social">
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img
                    src="img/speakers/4.jpg"
                    alt="Speaker 4"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="/speaker">Jack Christiansen</a>
                    </h3>
                    <p>Debitis iure vero</p>
                    <div className="social">
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img
                    src="img/speakers/5.jpg"
                    alt="Speaker 5"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="/speaker">Alejandrin Littel</a>
                    </h3>
                    <p>Qui molestiae natus</p>
                    <div className="social">
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img
                    src="img/speakers/6.jpg"
                    alt="Speaker 6"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="/speaker">Willow Trantow</a>
                    </h3>
                    <p>Non autem dicta</p>
                    <div className="social">
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Ministers;
