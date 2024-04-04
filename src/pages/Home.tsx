import Header from "../components/Misc/Header";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      // dalay: 2,
      duration: 2,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Home() {
  return (
    <>
      <Header ShowHeader={true} />
      <section id="intro">
        <div className="intro-container wow fadeIn">
          <motion.h1
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="mb-4 pb-0"
          >
            Welcome to
            <br />
            <span className="">MIM</span> Conference{" "}
            <span className="block  font-bold">2024</span>
          </motion.h1>
          <p className="mb-4 pb-0">
            15TH - 19TH May, 2024
          </p>
          {/* <a
            href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
            className="venobox play-btn mb-4"
            data-vbtype="video"
            data-autoplay="true"
          ></a>
          <a href="#about" className="about-btn scrollto">
            About The Event
          </a> */}
        </div>
      </section>

      <main id="main">
        {/* <!--==========================
      About Section
    ============================--> */}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>About The Conference</h2>
                <p>
                  Sed nam ut dolor qui repellendus iusto odit. Possimus
                  inventore eveniet accusamus error amet eius aut accusantium
                  et. Non odit consequatur repudiandae sequi ea odio molestiae.
                  Enim possimus sunt inventore in est ut optio sequi unde.
                </p>
              </div>
              <div className="col-lg-3">
                <h3>Where</h3>
                <p>Glory House, 3 Ayayi Road, OKE-IRA, OGBA-LAGOS</p>
              </div>
              <div className="col-lg-3">
                <h3>When</h3>
                <p>
                  Monday to Friday
                  <br />
                  15TH - 19TH May
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--==========================
   
        {/* 
    <!--==========================
      Schedule Section
    ============================--> */}
        <section className="section-with-bg py-5">
          <div className="container mx-auto my-5 wow fadeInUp">
            <div className="row my-5">
              <div className="col-xs-12 col-md-6">
                <iframe width="560" height="501" src="https://www.youtube.com/embed/S0ahaKWVnTQ?si=byic87pI34VybxJD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              <div className="col-xs-12 col-md-6 my-auto">
                <h3>#MIM2024</h3>
                <p>
                  Nigeria hosts some of the largest and most powerful ministries in the world today. This did not happen by chance. It is the product of definite seeds that were sown in the country at a specific period of time in our nation’s history. Indeed, the Bible speaks about a time to plant and a time to reap that which is planted. There was a planting season when a belief system founded upon the knowledge of certain truths within the Scriptures was established.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--==========================
      Venue Section
    ============================--> */}
        <section id="venue" className="wow fadeInUp">
          <div className="container-fluid">
            <div className="section-header">
              <h2> Conference
                Venue</h2>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-6 venue-map">
                <iframe
                  title="Event Venue Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0842296332235!2d3.343004200000012!3d6.636461499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e158cda5e3%3A0xd4638ae37f33db3!2s3a%20Ajayi%20Rd%2C%20Ogba%2C%20Lagos%20101232%2C%20Lagos!5e0!3m2!1sen!2sng!4v1710971783746!5m2!1sen!2sng"
                  width="1000"
                  height="500"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-lg-6 venue-info">
                <div className="row justify-content-center">
                  <div className="col-11 col-lg-8">
                    <h3>Glory House, 3 Ayayi Road, OKE-IRA, OGBA-LAGOS</h3>
                    <p>
                      Iste nobis eum sapiente sunt enim dolores labore
                      accusantium autem. Cumque beatae ipsam. Est quae sit qui
                      voluptatem corporis velit. Qui maxime accusamus possimus.
                      Consequatur sequi et ea suscipit enim nesciunt quia velit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="section-with-bg">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h2>Conference Schedule</h2>
              <p>Here is our event schedule</p>
            </div>

            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#day-1"
                  role="tab"
                  data-toggle="tab"
                >
                  Day 1
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#day-2"
                  role="tab"
                  data-toggle="tab"
                >
                  Day 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#day-3"
                  role="tab"
                  data-toggle="tab"
                >
                  Day 3
                </a>
              </li>
            </ul>

            <h3 className="sub-heading">
              Voluptatem nulla veniam soluta et corrupti consequatur neque
              eveniet officia. Eius necessitatibus voluptatem quis labore
              perspiciatis quia.
            </h3>

            <div className="tab-content row justify-content-center">
              {/* <!-- Schdule Day 1 --> */}
              <div
                role="tabpanel"
                className="col-lg-9 tab-pane fade show active"
                id="day-1"
              >
                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>09:30 AM</time>
                  </div>
                  <div className="col-md-10">
                    <h4>Registration</h4>
                    <p>
                      Fugit voluptas iusto maiores temporibus autem numquam
                      magnam.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>10:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>
                      Keynote <span>Brenden Legros</span>
                    </h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>11:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>
                      Et voluptatem iusto dicta nobis.{" "}
                      <span>Hubert Hirthe</span>
                    </h4>
                    <p>
                      Maiores dignissimos neque qui cum accusantium ut sit sint
                      inventore.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>12:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>
                      Explicabo et rerum quis et ut ea.{" "}
                      <span>Cole Emmerich</span>
                    </h4>
                    <p>
                      Veniam accusantium laborum nihil eos eaque accusantium
                      aspernatur.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>02:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>
                      Qui non qui vel amet culpa sequi.{" "}
                      <span>Jack Christiansen</span>
                    </h4>
                    <p>
                      Nam ex distinctio voluptatem doloremque suscipit iusto.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>03:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>
                      Quos ratione neque expedita asperiores.{" "}
                      <span>Alejandrin Littel</span>
                    </h4>
                    <p>
                      Eligendi quo eveniet est nobis et ad temporibus odio quo.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>04:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>
                      Quo qui praesentium nesciunt <span>Willow Trantow</span>
                    </h4>
                    <p>
                      Voluptatem et alias dolorum est aut sit enim neque
                      veritatis.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Schdule Day 1 -->

          <!-- Schdule Day 2 --> */}
              <div
                role="tabpanel"
                className="col-lg-9  tab-pane fade"
                id="day-2"
              >
                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>10:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>
                      Libero corrupti explicabo itaque.{" "}
                      <span>Brenden Legros</span>
                    </h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>11:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>
                      Et voluptatem iusto dicta nobis.{" "}
                      <span>Hubert Hirthe</span>
                    </h4>
                    <p>
                      Maiores dignissimos neque qui cum accusantium ut sit sint
                      inventore.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>12:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>
                      Explicabo et rerum quis et ut ea.{" "}
                      <span>Cole Emmerich</span>
                    </h4>
                    <p>
                      Veniam accusantium laborum nihil eos eaque accusantium
                      aspernatur.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>02:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>
                      Qui non qui vel amet culpa sequi.{" "}
                      <span>Jack Christiansen</span>
                    </h4>
                    <p>
                      Nam ex distinctio voluptatem doloremque suscipit iusto.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>03:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>
                      Quos ratione neque expedita asperiores.{" "}
                      <span>Alejandrin Littel</span>
                    </h4>
                    <p>
                      Eligendi quo eveniet est nobis et ad temporibus odio quo.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>04:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>
                      Quo qui praesentium nesciunt <span>Willow Trantow</span>
                    </h4>
                    <p>
                      Voluptatem et alias dolorum est aut sit enim neque
                      veritatis.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Schdule Day 2 -->

          <!-- Schdule Day 3 --> */}
              <div
                role="tabpanel"
                className="col-lg-9  tab-pane fade"
                id="day-3"
              >
                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>10:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/2.jpg" alt="Hubert Hirthe" />
                    </div>
                    <h4>
                      Et voluptatem iusto dicta nobis.{" "}
                      <span>Hubert Hirthe</span>
                    </h4>
                    <p>
                      Maiores dignissimos neque qui cum accusantium ut sit sint
                      inventore.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>11:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/3.jpg" alt="Cole Emmerich" />
                    </div>
                    <h4>
                      Explicabo et rerum quis et ut ea.{" "}
                      <span>Cole Emmerich</span>
                    </h4>
                    <p>
                      Veniam accusantium laborum nihil eos eaque accusantium
                      aspernatur.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>12:00 AM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/1.jpg" alt="Brenden Legros" />
                    </div>
                    <h4>
                      Libero corrupti explicabo itaque.{" "}
                      <span>Brenden Legros</span>
                    </h4>
                    <p>Facere provident incidunt quos voluptas.</p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>02:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/4.jpg" alt="Jack Christiansen" />
                    </div>
                    <h4>
                      Qui non qui vel amet culpa sequi.{" "}
                      <span>Jack Christiansen</span>
                    </h4>
                    <p>
                      Nam ex distinctio voluptatem doloremque suscipit iusto.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>03:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/5.jpg" alt="Alejandrin Littel" />
                    </div>
                    <h4>
                      Quos ratione neque expedita asperiores.{" "}
                      <span>Alejandrin Littel</span>
                    </h4>
                    <p>
                      Eligendi quo eveniet est nobis et ad temporibus odio quo.
                    </p>
                  </div>
                </div>

                <div className="row schedule-item">
                  <div className="col-md-2">
                    <time>04:00 PM</time>
                  </div>
                  <div className="col-md-10">
                    <div className="speaker">
                      <img src="img/speakers/6.jpg" alt="Willow Trantow" />
                    </div>
                    <h4>
                      Quo qui praesentium nesciunt <span>Willow Trantow</span>
                    </h4>
                    <p>
                      Voluptatem et alias dolorum est aut sit enim neque
                      veritatis.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- End Schdule Day 2 --> */}
            </div>
          </div>
        </section>
        {/* <section id="faq" className="wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <h2>F.A.Q </h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-9">
                <ul id="faq-list">
                  <li>
                    <a
                      data-toggle="collapse"
                      className="collapsed"
                      href="#faq1"
                    >
                      Non consectetur a erat nam at lectus urna duis?{" "}
                      <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq1" className="collapse" data-parent="#faq-list">
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq2"
                      className="collapsed"
                    >
                      Feugiat scelerisque varius morbi enim nunc faucibus a
                      pellentesque? <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq2" className="collapse" data-parent="#faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq3"
                      className="collapsed"
                    >
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi? <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq3" className="collapse" data-parent="#faq-list">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq4"
                      className="collapsed"
                    >
                      Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                      <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq4" className="collapse" data-parent="#faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq5"
                      className="collapsed"
                    >
                      Tempus quam pellentesque nec nam aliquam sem et tortor
                      consequat? <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq5" className="collapse" data-parent="#faq-list">
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      data-toggle="collapse"
                      href="#faq6"
                      className="collapsed"
                    >
                      Tortor vitae purus faucibus ornare. Varius vel pharetra
                      vel turpis nunc eget lorem dolor?{" "}
                      <i className="fa fa-minus-circle"></i>
                    </a>
                    <div id="faq6" className="collapse" data-parent="#faq-list">
                      <p>
                        Laoreet sit amet cursus sit amet dictum sit amet justo.
                        Mauris vitae ultricies leo integer malesuada nunc vel.
                        Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                        eget lorem dolor sed. Ut venenatis tellus in metus
                        vulputate eu scelerisque. Pellentesque diam volutpat
                        commodo sed egestas egestas fringilla phasellus
                        faucibus. Nibh tellus molestie nunc non blandit massa
                        enim nec.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!--==========================
      Subscribe Section
    ============================--> */}
        <section id="subscribe">
          <div className="container wow fadeInUp">
            <div className="section-header">
              <h2>Meet the speakers</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img
                    style={{ borderRadius: '10px 20px'}}
                    src="img/speakers/1.jpg"
                    alt="Speaker 1"
                    className="img-fluid rouded"
                  />
                  <div className="details">
                    <h3>
                      Poju Oyemade
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img
                    src="img/speakers/2.jpg"
                    style={{ borderRadius: '10px 20px'}}
                    alt="Speaker 2"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="/speaker">Hubert Hirthe</a>
                    </h3>
                    <p>Consequuntur odio aut</p>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="speaker">
                  <img
                    src="img/speakers/3.jpg"
                    style={{ borderRadius: '10px 20px'}}
                    alt="Speaker 3"
                    className="img-fluid"
                  />
                  <div className="details">
                    <h3>
                      <a href="speaker-details.html">Cole Emmerich</a>
                    </h3>
                    <p>Fugiat laborum et</p>
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* contact section */}

      
        <Footer />
      </main>
    </>
  );
}
