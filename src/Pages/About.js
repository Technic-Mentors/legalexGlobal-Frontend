import React from "react";
import { useInView } from "react-intersection-observer";
import BilalImg from "./img/Bilal-Warraich.avif"
import WaseemImg from "./img/Waseem-Munir.avif"
import FarhanImg from "./img/Farhan-Babar.avif"

export default function About() {
  const [isVisibleLeft, setIsVisibleLeft] = React.useState(false);
  const [isVisibleRight1, setIsVisibleRight1] = React.useState(false);
  const [isVisibleRight, setIsVisibleRight] = React.useState(false);
  const [isVisibleRight2, setIsVisibleRight2] = React.useState(false);
  const [isVisibleUp, setIsVisibleUp] = React.useState(false);
  const [isVisibleUp1, setIsVisibleUp1] = React.useState(false);
  const [isVisibleUp2, setIsVisibleUp2] = React.useState(false);
  const [isVisibleUp3, setIsVisibleUp3] = React.useState(false);
  const [isVisibleUp4, setIsVisibleUp4] = React.useState(false);

  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refRight1, inViewRight1] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refRight2, inViewRight2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refUp, inViewUp] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refUp1, inViewUp1] = useInView({
    triggerOnce: true,
    threshold: 0.33,
  });
  const [refUp2, inViewUp2] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refUp3, inViewUp3] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [refUp4, inViewUp4] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
    if (inViewUp4) {
      setIsVisibleUp4(true);
    }
  }, [
    inViewLeft,
    inViewRight,
    inViewRight1,
    inViewRight2,
    inViewUp,
    inViewUp1,
    inViewUp2,
    inViewUp3,
    inViewUp4,
  ]);

  const MoveToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="home-container">
        <div
          className="background-image1"
          style={{
            backgroundImage: `url(${"img/carousel-3.jpg"})`,
          }}
        >
          <div className="color-overlay1 d-flex justify-content-center align-items-center">
            <div>
              <h1
                style={{ color: "#28599D", fontSize: 70 }}
                className="text-white text-center animate__animated animate__zoomIn"
              >
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- About Start --> */}
      <div className="container-fluid bg-secondary p-0">
        <div className="row g-0">
          <div
            ref={refLeft}
            className={`col-lg-6 py-6 px-5 animate__animated ${
              isVisibleLeft ? "animate__fadeInUp" : ""
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
          </div>
          <div
            ref={refUp}
            className={`col-lg-6 animate__animated ${
              isVisibleUp ? "animate__fadeInUp" : ""
            }  animate-on-scroll`}
          >
            <div
              className="h-100 d-flex flex-column justify-content-center p-5"
              style={{ backgroundColor: "#6E8644" }}
            >
              <div className="d-flex text-white mb-5">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mx-auto mb-4"
                >
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
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mx-auto mb-4"
                >
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
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mx-auto mb-4"
                >
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

      {/*  */}
      <div className="container mt-5">
        <div className="text-center mx-auto" style={{ maxWidth: "600px" }}>
          <h1 className="display-5 mb-0">
            Our Mission <span style={{ color: "#6E8644" }}>&</span> Vision
          </h1>
          <hr className="w-25 mx-auto bg-success" />
        </div>
        <div className="row">
          <div
            style={{ borderRadius: 5 }}
            ref={refUp3}
            className={`col-sm-6 mt-3 animate__animated ${
              isVisibleUp3 ? "animate__fadeInUp" : ""
            } animate-on-scroll`}
          >
            <div className="card">
              <div className="card-body">
                <h3 className="display-5 mb-4" style={{ color: "#6E8644" }}>
                  Mission
                </h3>
                <p>
                  Our mission of "Every Student's Career Matters" is to provide
                  our customers with the best career counselling that aligns
                  with our premium educational consultancy-opening their door to
                  a foreign education that is befitting to their interests and
                  skills.From humble beginnings to global prominence, LEGALEX
                  GLOBAL has redefined immigration solutions.
                </p>
              </div>
            </div>
          </div>
          <div
            ref={refUp3}
            className={`col-sm-6 mt-3 animate__animated ${
              isVisibleUp3 ? "animate__fadeInUp" : ""
            }  animate-on-scroll`}
          >
            <div className="card">
              <div className="card-body">
                <h3 className="display-5 mb-4" style={{ color: "#6E8644" }}>
                  Vision
                </h3>
                <p>
                  our vision is to be the compass guiding aspiring students
                  towards the brightest global opportunities. We envision a
                  world where education transcends borders, where every student
                  has the chance to explore, learn, and thrive on an
                  international stage. Our mission is to unlock doors to
                  prestigious institutions worldwide, facilitating
                  transformative educational journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* Core Values */}
      <div className="container mt-5">
        <div
          className="text-center mx-auto mb-5 mt-5"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="display-5 mb-0">Core Values</h1>
          <hr className="w-25 mx-auto bg-success" />
        </div>
        <div
          ref={refUp4}
          className={`row d-flex justify-content-between g-5 px-4 animate__animated ${
            isVisibleUp4 ? "animate__fadeInUp" : ""
          }  animate-on-scroll`}
        >
          <div className="col-md-4 col-content coreC">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mb-3 coreI"
            >
              <i className="fas fa-balance-scale fs-4"></i>
            </div>
            <h3 className="coreH">Integrity</h3>
          </div>
          <div className="col-md-3 col-content coreC">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center mb-3 coreI"
            >
              <i className="fas fa-book fs-4"></i>
            </div>
            <h3 className="coreH">Empowerment</h3>
          </div>
          <div className="col-md-4 col-content coreC">
            <div
              className=" rounded-circle d-flex align-items-center justify-content-center mb-3 coreI"
            >
              <i className="fab fa-dropbox fs-4"></i>
            </div>
            <h3 className="coreH">Compliance</h3>
          </div>
          <div className="col-lg-4 col-content coreC">
            <div
              className=" rounded-circle d-flex align-items-center justify-content-center mb-3 coreI"
            >
              <i className="fas fa-th-list fs-4"></i>
            </div>
            <h3 className="coreH">Solution</h3>
          </div>
          <div className="col-md-3 col-content coreC">
            <div
              className=" rounded-circle d-flex align-items-center justify-content-center mb-3 coreI"
            >
              <i className="far fa-flag fs-4 text-white"></i>
            </div>
            <h3 className="coreH">Leadership</h3>
          </div>
          <div className="col-md-4 col-content coreC">
            <div
              className=" rounded-circle d-flex align-items-center justify-content-center mb-3 coreI"
            >
              <i className="fas fa-book fs-4"></i>
            </div>
            <h3 className="coreH">Guidance</h3>
          </div>
        </div>
      </div>
      {/*  */}
      {/* CEO Message */}
      <div>
        <div
          className="text-center mx-auto mb-5 mt-5"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="display-5 mb-0">CEO Message</h1>
          <hr className="w-25 mx-auto bg-success" />
        </div>
        <div className="container-fluid" style={{ backgroundColor: "#28599D" }}>
          <div className="container">
            <div className="row">
              <div
                ref={refRight}
                className={`col mt-3 mb-2 animate__animated ${
                  isVisibleRight ? "animate__fadeInUp" : ""
                }  animate-on-scroll`}
                style={{ backgroundColor: "white", borderRadius: 10 }}
              >
                <p className="mt-4 mb-4">
                  Bilal Warraich is the founder of Legalex Global Consultants
                  UK. He is also founder and Principal Solicitor of BW
                  Solicitors UK. With a sterling career as an accomplished
                  Solicitor of England & Wales he is also a senior advocate of
                  Lahore High court, Pakistan. It is a great privilege for him
                  to serve the clients in both jurisdictions (United Kingdom as
                  well as in Pakistan).{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div
                ref={refUp2}
                className={`col mt-2 mb-2 animate__animated ${
                  isVisibleUp2 ? "animate__fadeInUp" : ""
                }  animate-on-scroll`}
                style={{ backgroundColor: "white", borderRadius: 10 }}
              >
                <p className="mt-4 mb-4">
                  Bilal Warraich holds 2 master’s degrees and LLB from Pakistan
                  and LLM Human rights from London, UK. He is a human rights
                  activists and has previously worked at Amnesty International.
                  He appears on UK TV channels as an Immigration Expert
                  Solicitor. He has been hosting a TV show “Legal Hour” in the
                  UK on Islam TV.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div
                ref={refRight1}
                className={`col mt-2 mb-3 animate__animated ${
                  isVisibleRight1 ? "animate__fadeInUp" : ""
                }  animate-on-scroll`}
                style={{ backgroundColor: "white", borderRadius: 10 }}
              >
                <p className="mt-4 mb-4">
                  Bilal Warraich enjoys the reputation of a seasoned, devoted
                  and committed Lawyer serving his clients worldwide using the
                  state of art technology. Legalex Global Consultants and BW
                  Solicitors are powered by the most sophisticated case
                  management system and CRM that helps his clients interact with
                  him from the comfort of their home. As per Google and social
                  media reviews, he is considered dedicated, very friendly,
                  reliable, approachable and professional with highest level of
                  result oriented legal expertise.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

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
          className={`row g-5 animate__animated ${
            isVisibleRight1 ? "animate__fadeInUp" : ""
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

      {/* Perks start*/}
      <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
        <h1 className="display-5 mb-0">
          Perks Of <span style={{ color: "#6E8644" }}>Studying</span> Abroad
        </h1>
        <hr className="w-25 mx-auto bg-success" />
      </div>
      <div
        className="container-fluid py-6 px-5"
        style={{ backgroundColor: "#6E8644" }}
      >
        <div
          ref={refRight2}
          className={`row g-5 animate__animated ${
            isVisibleRight2 ? "animate__fadeInUp" : ""
          }  animate-on-scroll`}
        >
          <div className="col-lg-4 text-white perksB">
            <h2 className="text-white">
              01 <span>.</span>
            </h2>
            <h2 className="text-white">Cultural Immersion </h2>
            <p>
              Embrace the local culture and immerse yourself in the UK’s rich
              history and traditions. Engage with local customs, attend cultural
              events, and interact with native students.{" "}
            </p>
          </div>
          <div className="col-lg-4 text-white perksB">
            <h2 className="text-white">
              {" "}
              02 <span>.</span>
            </h2>
            <h2 className="text-white">Balancing Academics </h2>
            <p>
              While it’s important to excel academically, don’t forget to
              explore the country and its surroundings. The UK offers a wealth
              of historical sites & natural landscapes.{" "}
            </p>
          </div>
          <div className="col-lg-4 text-white perksB">
            <h2 className="text-white">
              {" "}
              03 <span>.</span>
            </h2>
            <h2 className="text-white">Networking Extends </h2>
            <p>
              Building a network of contacts is crucial for both your academic
              and professional future. Attend university events, workshops, and
              seminars.{" "}
            </p>
          </div>
        </div>
      </div>
      {/*  */}

      {/* <!-- Back to Top --> */}
      <div
        onClick={MoveToTop}
        className="btn btn-lg btn-lg-square rounded-circle back-to-top"
        style={{ backgroundColor: "#6E8644" }}
      >
        <i className="bi bi-arrow-up text-white"></i>
      </div>
    </div>
  );
}
