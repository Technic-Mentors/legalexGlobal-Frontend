import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function Service() {
  const [isVisibleLeft, setIsVisibleLeft] = React.useState(false);
  const [isVisibleRight1, setIsVisibleRight1] = React.useState(false);
  const [isVisibleRight, setIsVisibleRight] = React.useState(false);
  const [isVisibleUp, setIsVisibleUp] = React.useState(false);
  const [isVisibleUp1, setIsVisibleUp1] = React.useState(false);

  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  const [refRight1, inViewRight1] = useInView({
    triggerOnce: true,
    threshold: 0.
  });
  const [refUp, inViewUp] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  const [refUp1, inViewUp1] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  React.useEffect(() => {
    if (inViewLeft) {
      setIsVisibleLeft(true);
    }
    if (inViewRight) {
      setIsVisibleRight(true);
    }
    if (inViewRight1) {
      setIsVisibleRight1(true);
    }
    if (inViewUp) {
      setIsVisibleUp(true);
    }
    if (inViewUp1) {
      setIsVisibleUp1(true);
    }
  }, [inViewLeft, inViewRight, inViewRight1, inViewUp, inViewUp1]);

  const MoveToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="home-container">
        <div
          className="background-image1"
          style={{
            backgroundImage: `url(${'img/carousel-5.jpg'})`,
          }}
        >
          <div className="color-overlay1 d-flex justify-content-center align-items-center">
            <div>
              <h1
                className="text-white text-center animate__animated animate__zoomIn"
                style={{ fontSize: 70 }}
              >
                Services
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Services Start --> */}
      <div className="container-fluid py-4">
        <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
          <h1 className="display-5 mb-0">What <span style={{ color: '#6E8644' }}>We</span> Offer</h1>
          <hr className="w-25 mx-auto bg-success" />
        </div>
        <div ref={refRight}
          className={`row text-white animate__animated ${isVisibleRight ? "animate__fadeInUp" : ""
            }  animate-on-scroll`}>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fab fa-gripfire fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">Personalized Guidance</h3>
              <p className="mb-0">
                We understand that each visa application is unique. Our
                consultants take the time to understand your specific needs and
                tailor our services to ensure a seamless and successful visa
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fab fa-hornbill fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">Extensive Proficiency</h3>
              <p className="mb-0">
                Backed by years of experience, our team possesses an in-depth
                understanding of the latest regulations and protocols governing
                visas, immigration, and study applications
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fa-solid fa-sitemap fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">Stay Informed</h3>
              <p className="mb-0">
                We keep you informed at every step, providing real-time updates
                on the progress of your application and ensuring you’re aware of
                any changes or developments
              </p>
            </div>
          </div>
        </div>
        <div ref={refUp}
          className={`row text-white animate__animated ${isVisibleUp ? "animate__fadeInUp" : ""
            }  animate-on-scroll`}>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fas fa-business-time fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">Real-time Updates</h3>
              <p className="mb-0">
                Stay informed about your application’s progress as our
                consultants provide timely updates, ensuring you remain
                well-versed with any alterations or development
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fas fa-check-double fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">Swift Issue Resolution</h3>
              <p className="mb-0">
                Encounter hurdles during the application process? adept
                problem-solving abilities come into play, efficiently addressing
                challenges to keep your application on track
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fas fa-infinity fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">Financial Aid</h3>
              <p className="mb-0">
                We inform students about scholarship opportunities, grants, and
                financial aid optiavailable for their chosen courses and
                institutions
              </p>
            </div>
          </div>
        </div>
        <div ref={refUp1}
          className={`row text-white animate__animated ${isVisibleUp1 ? "animate__fadeInUp" : ""
            }  animate-on-scroll`}>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fas fa-archway fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">Education Counselling</h3>
              <p className="mb-0">
                We help students identify their academic strengths, interests,
                and goals. We offer guidance on suitable courses, majors, and
                institutions based on the student’s profile
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fas fa-university fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">University Selection</h3>
              <p className="mb-0">
                We provide information about different universities and
                colleges, including admission requirements, programs offered,
                campus facilities, and rankings
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fab fa-app-store-ios fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">Application Assistance</h3>
              <p className="mb-0">
                We guide students through the application process, helping them
                prepare necessary documents, write personal statements or
                essays, and meet application deadlines
              </p>
            </div>
          </div>
        </div>
        <div ref={refLeft}
          className={`row text-white animate__animated ${isVisibleLeft ? "animate__fadeInUp" : ""
            }  animate-on-scroll`}>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fab fa-cc-visa fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">Visa Guidance</h3>
              <p className="mb-0">
                For international students, we help navigate the visa
                application process, providing information about required
                documents, interview preparation, and legal requirements
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fas fa-pencil-ruler fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white">Test Preparation</h3>
              <p className="mb-0">
                We offer test preparation services for standardized tests like
                the SAT, ACT, GRE, TOEFL, or IELTS. We provide study materials,
                practice tests, and strategies to improve scores
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mb-5">
            <div className="service-item text-center px-5" style={{ backgroundColor: '#28599D' }}>
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px", backgroundColor: '#6E8644' }}
              >
                <i className="fas fa-user-tie fa-2x"></i>
              </div>
              <h3 className="mb-3 text-white"> Expert Consultant</h3>
              <p className="mb-0">
                Discover a world of possibilities with our premier consultant
                services. Our dedicated team of seasoned professionals is
                committed to guiding you towards success.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}

      {/* contact */}
      <div className="home-container mb-4">
        <div
          className="background-image2"
          style={{
            backgroundImage: `url(${'img/carousel-1.jpg'})`,
          }}
        >
          <div className="color-overlay2 d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="text-white">Ready To Make Your Dreams Come True.So Don't Waste Time Contact Us Now!!</h2>
                </div>
                <div className="col-md-4 mt-3">
                  <Link
                    to="/contact"
                    className="btn btn-outline-success text-white py-md-2 px-md-3"
                  >
                    <div style={{ fontSize: 20 }}>
                      Get In Touch With Us !! <i className="fa-solid fa-arrow-right mx-2 py-md-2 px-md-2" style={{ backgroundColor: '#6E8644', borderRadius: '5px' }}></i>
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* contact end */}
      <div className="text-center mx-auto mt-5 mb-5" style={{ maxWidth: "600px" }}>
        <h1 className="display-5 mb-0">How We <span style={{ color: "#6E8644" }}>Can Help</span> You ?</h1>
        <hr className="w-25 mx-auto bg-success" />
      </div>
      <div className="container mb-5">
        <div className="row">
          <div ref={refRight1}
            className={`col-lg-4 animate__animated ${isVisibleRight1 ? "animate__fadeInUp" : ""
              }  animate-on-scroll`}>
            <img src="img/service1.png" alt="" />
            <h4 className="text-center">Visa Guidence</h4>
          </div>
          <div ref={refRight1}
            className={`col-lg-4 animate__animated ${isVisibleRight1 ? "animate__fadeInUp" : ""
              }  animate-on-scroll`}>
            <img src="img/service2.png" alt="" />
            <h4 className="px-5">Profile Assessment</h4>
          </div>
          <div ref={refRight1}
            className={`col-lg-4 animate__animated ${isVisibleRight1 ? "animate__fadeInUp" : ""
              }  animate-on-scroll`}>
            <img src="img/service3.png" alt="" />
            <h4 className="text-center">Finding Right Degree</h4>
          </div>
        </div>
      </div>

      {/* <!-- Back to Top --> */}
      <div
        onClick={MoveToTop}
        className="btn btn-lg btn-lg-square rounded-circle back-to-top"
        style={{ backgroundColor: '#6E8644' }}
      >
        <i className="bi bi-arrow-up text-white"></i>
      </div>
    </div>
  );
}
