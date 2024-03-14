import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import bg3 from "./img/4.jpg";
import img3 from "./img/3.jpg.png";
import img2 from "./img/2.jpg.png";
import BilalImg from "./img/Bilal-Warraich.avif"
import WaseemImg from "./img/Waseem-Munir.avif"
import FarhanImg from "./img/Farhan-Babar.avif"
import crouselImg from "./img/carousel-4.jpg"
import crouselImg1 from "./img/carousel-10.jpg"

export default function Home() {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  useEffect(() => {
    // Function to handle resizing and adjust centerSlidePercentage
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCenterSlidePercentage(100);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    // Add a window resize event listener
    window.addEventListener("resize", handleResize);

    // Initial call to set centerSlidePercentage based on the current screen size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // Remove the event listener when the component unmounts
  }, []);

  const [isVisibleLeft, setIsVisibleLeft] = React.useState(false);
  const [isVisibleLeft1, setIsVisibleLeft1] = React.useState(false);
  const [isVisibleRight1, setIsVisibleRight1] = React.useState(false);
  const [isVisibleRight, setIsVisibleRight] = React.useState(false);
  const [isVisibleRight2, setIsVisibleRight2] = React.useState(false);
  const [isVisibleUp, setIsVisibleUp] = React.useState(false);
  const [isVisibleUp1, setIsVisibleUp1] = React.useState(false);
  const [isVisibleUp2, setIsVisibleUp2] = React.useState(false);
  const [isVisibleUp3, setIsVisibleUp3] = React.useState(false);

  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refLeft1, inViewLeft1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refRight1, inViewRight1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refRight2, inViewRight2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refUp, inViewUp] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refUp1, inViewUp1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refUp2, inViewUp2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [refUp3, inViewUp3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inViewLeft) {
      setIsVisibleLeft(true);
    }
    if (inViewLeft1) {
      setIsVisibleLeft1(true);
    }
    if (inViewRight) {
      setIsVisibleRight(true);
    }
    if (inViewRight1) {
      setIsVisibleRight1(true);
    }
    if (inViewRight2) {
      setIsVisibleRight2(true);
    }
    if (inViewUp) {
      setIsVisibleUp(true);
    }
    if (inViewUp1) {
      setIsVisibleUp1(true);
    }
    if (inViewUp2) {
      setIsVisibleUp2(true);
    }
    if (inViewUp3) {
      setIsVisibleUp3(true);
    }
  }, [
    inViewLeft,
    inViewLeft1,
    inViewRight,
    inViewRight1,
    inViewRight2,
    inViewUp,
    inViewUp1,
    inViewUp2,
    inViewUp3,
  ]);

  const testimonials = [
    {
      content:
        "LegalexGlobal Immigration has been a game-changer for my UK immigration journey. Their expertise and personalized guidance ensured a smooth process. I am now living my dream, all thanks to their exceptional services. Highly recommend to anyone pursuing their UK dreams",
      name: "Qurat Ul Ain",
      stars: 5,
      imageSrc: "img/testimonial-1.jpg",
    },
    {
      content:
        "LegalexGlobal Immigration exceeded my expectations with their exceptional service. Their expert guidance and unwavering support made my UK immigration process smooth and successful. I am truly grateful for their dedication and highly recommend their services to anyone seeking",
      name: "Haram",
      stars: 4,
      imageSrc: "img/testimonial-1.jpg",
    },
    {
      content:
        "LegalexGlobal Immigration has been an absolute game-changer for my UK immigration process. Their expertise and personalized guidance made everything smooth and stress-free. Thanks to their dedicated team, I am now living my dream in the UK. Highly recommend their top",
      name: "Ali",
      stars: 4,
      imageSrc: "img/testimonial-3.jpg",
    },
    {
      content:
        "Choosing LegalexGlobal Immigration was the best decision I made for my UK visa process. Their expertise and support were outstanding, guiding me through every step. I am now happily settled in the UK, all thanks to their exceptional service. Highly recommended!",
      name: "Nadeem Munir",
      stars: 4,
      imageSrc: "img/testimonial-4.jpg",
    },
  ];

  const MoveToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ backgroundImage: `url(${crouselImg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
              <div style={{ backgroundColor: "rgba(21, 36, 64, .7)" }} className="crousel-Overlay">
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="p-3 animate__animated animate__zoomIn text-center crousel-1"
                    style={{ maxWidth: "900px" }}
                  >
                    <h1 className="text-white text-uppercase" style={{ backgroundColor: "rgb(110, 134, 68)", display: "inline-block", padding: "2%", borderRadius: "4px" }}>
                      study Abroad Consultant
                    </h1>
                    <h6 className="display-1 text-white mb-md-4">
                      Your Trusted <br /> Consulting Partner
                    </h6>
                    <Link
                      to="/contact"
                      className="btn btn-outline-success text-white py-md-2 px-md-3"
                    >
                      <div style={{ fontSize: 20 }}>
                        Contact Us{" "}
                        <i
                          className="fa-solid fa-arrow-right mx-2 py-md-2 px-md-2"
                          style={{
                            backgroundColor: "#6E8644",
                            borderRadius: "5px",
                          }}
                        ></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{ backgroundImage: `url(${crouselImg1})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" }}>
              <div style={{ backgroundColor: "rgba(21, 36, 64, .7)" }} className="crousel-Overlay">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="p-3 animate__animated animate__zoomIn text-center"
                    style={{ maxWidth: "900px" }}
                  >
                    <h1 className="text-white text-uppercase" style={{ backgroundColor: "rgb(110, 134, 68)", display: "inline-block", padding: "2%", borderRadius: "4px" }}>
                      study Abroad Consulta nt
                    </h1>
                    <h6 className="display-1 text-white mb-md-4">
                      Elevating Visions, Transforming Businesses
                    </h6>
                    <Link
                      to="/contact"
                      className="btn btn-outline-success text-white  py-md-2 px-md-3"
                    >
                      <div style={{ fontSize: 20 }}>
                        Contact Us{" "}
                        <i
                          className="fa-solid fa-arrow-right mx-2 py-md-2 px-md-2"
                          style={{
                            backgroundColor: "#6E8644",
                            borderRadius: "5px",
                          }}
                        ></i>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid bg-secondary p-0">
        <div className="row g-0">
          <div
            ref={refLeft}
            className={`col-lg-6 py-6 px-5 animate__animated ${isVisibleLeft ? "animate__fadeInUp" : ""
              }  animate-on-scroll`}
          >
            <h1 className="display-5 mb-4">
              Welcome To <span style={{ color: "#6E8644" }}>CONSULT</span>
            </h1>
            <h4 className="mb-4" style={{ color: "#6E8644" }}>
              Need Any Help Schedule a Consultation
            </h4>
            <p className="mb-4">
              Elevate your path to success by taking the crucial first step –
              schedule a consultation now. Our seasoned experts are dedicated to
              sculpting your journey towards academic and personal achievement,
              with a focus on the UK, Canada, Schengen countries, and beyond.
              Let us collaborate to transform your aspirations into a tangible
              reality. Your chapter of triumph starts with us.
            </p>
            <Link
              to="/about"
              className="btn btn-outline-success py-md-2 btnColor px-md-3"
              style={{ fontSize: 20 }}
            >
              Know More{" "}
              <i
                className="fa-solid fa-arrow-right mx-2 py-md-2 px-md-2 text-white"
                style={{ backgroundColor: "#28599D", borderRadius: "5px" }}
              ></i>
            </Link>
          </div>
          <div
            ref={refUp}
            className={`col-lg-6 animate__animated ${isVisibleUp ? "animate__fadeInUp" : ""
              }  animate-on-scroll`}
          >
            <div
              className="h-100 d-flex flex-column justify-content-center p-5"
              style={{ backgroundColor: "#6E8644" }}
            >
              <div className="d-flex text-white mb-5">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mx-auto mb-4">
                  <i className="fas fa-male fs-4"></i>
                </div>
                <div className="ps-4">
                  <h3 className="text-white">Expertise</h3>
                  <p className="mb-0">
                    Empower Your Strategy with Professional UK Consulting.
                    Elevate Your Decisions through Expert Guidance
                  </p>
                </div>
              </div>
              <div className="d-flex text-white mb-5">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mx-auto mb-4">
                  <i className="fas fa-id-badge fs-4"></i>
                </div>
                <div className="ps-4">
                  <h3 className="text-white">Experience</h3>
                  <p className="mb-0">
                    We Provide You the best experince for you.Your satisfaction
                    is important for us
                  </p>
                </div>
              </div>
              <div className="d-flex text-white">
                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mx-auto mb-4">
                  <i className="fa fa-balance-scale fs-4"></i>
                </div>
                <div className="ps-4">
                  <h3 className="text-white">legal Advisory</h3>
                  <p className="mb-0">
                    Your Trusted Source for the Best Professional UK Consulting.
                    Elevating Excellence and Trust in Every Advisory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Services Start --> */}
      <div className="container-fluid py-5">
        <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
          <h1 className="display-5 mb-0">
            What <span style={{ color: "#6E8644" }}>We</span> Offer
          </h1>
          <hr className="w-25 mx-auto bg-success" />
        </div>
        <div
          ref={refRight}
          className={`row text-white animate__animated ${isVisibleRight ? "animate__fadeInUp" : ""
            }  animate-on-scroll`}
        >
          <div className="col-lg-4 mt-5 col-md-6">
            <div
              className="service-item text-center px-5"
              style={{ backgroundColor: "#28599D" }}
            >
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "#6E8644",
                }}
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
          <div className="col-lg-4 mt-5 col-md-6">
            <div
              className="service-item text-center px-5"
              style={{ backgroundColor: "#28599D" }}
            >
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "#6E8644",
                }}
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
          <div className="col-lg-4 mt-5 col-md-6">
            <div
              className="service-item text-center px-5"
              style={{ backgroundColor: "#28599D" }}
            >
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "#6E8644",
                }}
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
        <div
          ref={refLeft1}
          className={`row text-white animate__animated ${isVisibleLeft1 ? "animate__fadeInUp" : ""
            }  animate-on-scroll`}
        >
          <div className="col-lg-4 mt-5 col-md-6">
            <div
              className="service-item text-center px-5"
              style={{ backgroundColor: "#28599D" }}
            >
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "#6E8644",
                }}
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
          <div className="col-lg-4 mt-5 col-md-6">
            <div
              className="service-item text-center px-5"
              style={{ backgroundColor: "#28599D" }}
            >
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "#6E8644",
                }}
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
          <div className="col-lg-4 mt-5 col-md-6">
            <div
              className="service-item text-center px-5"
              style={{ backgroundColor: "#28599D" }}
            >
              <div
                className="d-flex align-items-center justify-content-center  text-white rounded-circle mx-auto mb-4"
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: "#6E8644",
                }}
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
      </div>
      {/* <!-- Services End --> */}

      {/* <!-- Features Start --> */}
      <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-5 mb-0">
            Why <span style={{ color: "#6E8644" }}>Choose</span> Us!!!
          </h1>
          <hr className="w-25 mx-auto bg-success" />
        </div>
        <div
          ref={refUp1}
          className={`row g-5 animate__animated ${isVisibleUp1 ? "animate__fadeInUp" : ""
            }  animate-on-scroll`}
        >
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12">
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 choseI">
                  <i className="fas fa-chalkboard-teacher fs-4 "></i>
                </div>
                <h3>Legality</h3>
                <p>
                  Legal Compliance in Study Abroad Consulting: Ensuring Smooth
                  Global Educational Journeys
                </p>
              </div>
              <div className="col-12">
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 choseI">
                  <i className="fa fa-percent fs-4 "></i>
                </div>
                <h3>99% Success Rate</h3>
                <p>
                  Unlocking a 99% Success Rate: Your Path to Studying Abroad
                  with Confidence.
                </p>
              </div>
              <div className="col-12">
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 choseI">
                  <i className="fas fa-male fs-4 "></i>
                </div>
                <h3>Expertise</h3>
                <p>
                  Unparalleled Expertise: Guiding Your Study Abroad Journey with
                  Knowledge and Experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-block h-100 choseT">
              <img className="img-fluid" src="img/feature.png" alt="" />
              <div className="p-4">
                <p className="text-white mb-4">
                  The best study abroad consultants Empowering UK Insights
                  through Expert Statistical Consulting. Data Excellence,
                  Guiding Your Success.Study abroad consultants play a pivotal
                  role in transforming dreams of global education into reality.
                  With their extensive knowledge and expertise, they serve as
                  invaluable guides for aspiring students. These dedicated
                  professionals assist in navigating the complex landscape of
                  international education, offering insights into diverse
                  programs, universities, and application procedures
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12">
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 choseI">
                  <i className="fas fa-id-badge fs-4 "></i>
                </div>
                <h3>Experience</h3>
                <p>
                  Decades of Experience: Your Trusted Partner for Study Abroad
                  Success.
                </p>
              </div>
              <div className="col-12">
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 choseI">
                  <i className="fa fa-user-tie fs-4 "></i>
                </div>
                <h3> Advisors</h3>
                <p>
                  Dedicated Advisors: Crafting Your Path to Study Abroad
                  Excellence.
                </p>
              </div>
              <div className="col-12">
                <div className="rounded-circle d-flex align-items-center justify-content-center mb-3 choseI">
                  <i className="fas fa-book fs-4 "></i>
                </div>
                <h3>Guidence</h3>
                <p>
                  Comprehensive Guidance: Shaping Your Study Abroad Success
                  Story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features End --> */}

      {/* <!-- Quote1 Start --> */}
      <div>
        <h1 className="display-5 mb-5 text-center">
          Your Journey Our <span style={{ color: "#6E8644" }}>Expertise</span>
        </h1>
      </div>
      <div
        ref={refUp3}
        className={`container-fluid service-background1 animate__animated ${isVisibleUp3 ? "animate__fadeInUp" : ""
          } animate-on-scroll`}
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 mb-5"
            style={{ marginTop: "5rem" }}
          >
            <h1>Study Abroad Explore Your Options</h1>
            <p>
              Embark on an enriching global journey through our study abroad
              programs. Immerse yourself in diverse cultures while pursuing your
              academic passions.Choose from carefully crafted itineraries that
              cater to your interests, ensuring an immersive and hassle-free
              travel experience. Embark on your dream journey with us today.
            </p>

            <div className="row gx-3">
              <div className="col-md-4 col-4">
                <Link to="/university"> <div className="d-flex align-items-center">
                  <i className="fa-solid fa-flag"></i>
                  <h5 className="mx-2">UK</h5>
                </div></Link>
                <Link to="/university"> <div className="d-flex align-items-center">
                  <i className="fa-solid fa-flag"></i>
                  <h5 className="mx-2">Malaysia</h5>
                </div></Link>
                <Link to="/university"><div className="d-flex align-items-center">
                  <i className="fa-solid fa-flag"></i>
                  <h5 className="mx-2">Canada</h5>
                </div></Link>
              </div>
              <div className="col-md-4 col-4">
                <Link to="/university"> <div className="d-flex align-items-center">
                  <i className="fa-solid fa-flag"></i>
                  <h5 className="mx-2">Austrailia</h5>
                </div></Link>
                <Link to="/university"><div className="d-flex align-items-center">
                  <i className="fa-solid fa-flag"></i>
                  <h5 className="mx-2">France</h5>
                </div></Link>
                <Link to="/university"><div className="d-flex align-items-center">
                  <i className="fa-solid fa-flag"></i>
                  <h5 className="mx-2">Italy</h5>
                </div></Link>
              </div>
              <div className="col-md-4 col-4">
                <Link to="/university"><div className="d-flex align-items-center">
                  <i className="fa-solid fa-flag"></i>
                  <h5 className="mx-2">New Zealand</h5>
                </div></Link>
                <Link to="/university"><div className="d-flex align-items-center">
                  <i className="fa-solid fa-flag"></i>
                  <h5 className="mx-2">Finland</h5>
                </div></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 mb-5">
            <img
              src={img2}
              alt=""
              className="img-fluid"
              style={{ opacity: 0.4 }}
            />
          </div>
        </div>
      </div>
      <div></div>
      {/* <!-- Quote1 End --> */}

      {/* <!-- Quote Start --> */}
      <div
        ref={refUp2}
        className={`container-fluid bg-secondary animate__animated ${isVisibleUp2 ? "animate__fadeInUp" : ""
          }  animate-on-scroll`}
      >
        <div className="row text-white" style={{ backgroundColor: "#6E8644" }}>
          <div
            className="col-lg-8 col-md-6 col-sm-12 mb-5"
            style={{ marginTop: "5rem" }}
          >
            <div className="container">
              <h1 className="text-white">Visitation Explore Your Options</h1>
              <p>
                Unveil a world of exploration through our visitation Optionss.
                Roam captivating landscapes, delve into vibrant cultures, and
                create unforgettable memories. Choose from carefully crafted
                itineraries that cater to your interests, ensuring an immersive
                and hassle-free travel experience. Embark on your dream journey
                with us today.
              </p>
              <div className="row gx-3 d-flex">
                <div className="col-md-6 col-6">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-flag flag1"></i>
                    <h5 className="mx-2 text-white">UK</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-flag flag1"></i>
                    <h5 className="mx-2 text-white">USA</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-flag flag1"></i>
                    <h5 className="mx-2 text-white">Canada</h5>
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-flag flag1"></i>
                    <h5 className="mx-2 text-white">Austrailia</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-flag flag1"></i>
                    <h5 className="mx-2 text-white">Schengen</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-flag flag1"></i>
                    <h5 className="mx-2 text-white">Turkey</h5>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 mt-5 mb-5"
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <img src={img3} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* <!-- Quote End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h1 className="display-5 mb-0">
            Our <span style={{ color: "#6E8644" }}>Team</span> Members
          </h1>
          <hr className="w-25 mx-auto bg-success" />
        </div>
        <div
          ref={refRight1}
          className={`row g-5 animate__animated ${isVisibleRight1 ? "animate__fadeInUp" : ""
            }  animate-on-scroll`}
        >
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src={FarhanImg} loading="lazy" alt="" />
              <div
                className="team-text w-100 position-absolute top-50 text-center p-4"
                style={{ backgroundColor: "#6E8644" }}
              >
                <h3 className="text-white">Farhan Babar Warraich</h3>
                <p className="text-white mb-0">Managing Director</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src={BilalImg} loading="lazy" alt="" />
              <div
                className="team-text w-100 position-absolute top-50 text-center p-4"
                style={{ backgroundColor: "#6E8644" }}
              >
                <h3 className="text-white">Bilal Warraich</h3>
                <p className="text-white text-uppercase mb-0">CEO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-item position-relative overflow-hidden">
              <img className="img-fluid w-100" src={WaseemImg} loading="lazy" alt="" />
              <div
                className="team-text w-100 position-absolute top-50 text-center p-4"
                style={{ backgroundColor: "#6E8644" }}
              >
                <h3 className="text-white">Waseem Munir</h3>
                <p className="text-white mb-0">Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- Testimonial Start --> */}
      <div>
        <h1 className="display-5 mb-5 text-center">
          What People Say <span style={{ color: "#6E8644" }}>About Us</span>
          !!
          <hr className="w-25 mx-auto bg-success" />
        </h1>
      </div>
      <div
        ref={refRight2}
        className={`container-fluid testimonial animate__animated ${isVisibleRight2 ? "animate__fadeInUp" : ""
          }  animate-on-scroll`}
        style={{
          backgroundImage: `url(${"img/5.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-5">
          <div>
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              emulateTouch={true}
              renderIndicator={false}
              showThumbs={false}
              centerMode={true}
              centerSlidePercentage={centerSlidePercentage}
            >
              {testimonials.map((testimonial, index) => (
                <div className="testimonial-item" key={index}>
                  <div
                    className="rounded mb-4 p-4 mx-1"
                    style={{
                      backgroundColor: "#F6F6F6",
                      borderRadius: "15px",
                    }}
                  >
                    <p className="m-0">{testimonial.content}</p>
                  </div>
                  <div
                    className="d-flex align-items-center  mb-4"
                    style={{ padding: "0 0 0 25px" }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        style={{ width: 120, height: 120 }}
                        src={testimonial.imageSrc}
                        className="rounded-circle"
                        alt=""
                      />
                      <div
                        style={{
                          top: "33px",
                          left: "-25px",
                          position: "absolute",
                        }}
                      >
                        <i
                          className="fa fa-quote-left rounded-pill text-white p-3"
                          style={{ backgroundColor: "#28599D" }}
                        ></i>
                      </div>
                    </div>
                    <div className="ms-3">
                      <h4 className="mb-0 text-white">{testimonial.name}</h4>
                      <div className="d-flex">
                        {Array.from({ length: testimonial.stars }).map(
                          (_, starIndex) => (
                            <small
                              key={starIndex}
                              className="fas fa-star me-1"
                              style={{ color: "#B4D342" }}
                            ></small>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      {/* <!-- Back to Top --> */}
      <div
        className="btn btn-lg btn-lg-square rounded-circle back-to-top"
        style={{ backgroundColor: "#6E8644" }}
        onClick={MoveToTop}
      >
        <i className="bi bi-arrow-up text-white"></i>
      </div>
    </div>
  );
}
