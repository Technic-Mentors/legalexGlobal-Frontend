import React from "react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [isVisibleLeft, setIsVisibleLeft] = React.useState(false);
  const [isVisibleRight, setIsVisibleRight] = React.useState(false);

  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.4
  });
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.4
  });

  React.useEffect(() => {
    if (inViewLeft) {
      setIsVisibleLeft(true);
    }
    if (inViewRight) {
      setIsVisibleRight(true);
    }
  }, [inViewLeft,inViewRight]);

  const submit = (e) => {
    e.preventDefault();
  };
  const MoveToTop = () => {
    window.scrollTo(0, 0);
  }; 
  return (
    <div>
      <div className="home-container">
        <div
          className="background-image1"
          style={{
            backgroundImage: `url(${'img/carousel-9.jpg'})`,
          }}
        >
          <div className="color-overlay1 d-flex justify-content-center align-items-center">
            <div>
              <h1
                className="text-white text-center animate__animated animate__zoomIn"
                style={{fontSize: 70 }}
              >
                Contact Us
              </h1>
              <div className="d-flex justify-content-center">
              <a href=" https://wa.me/923331119210" target="blank"><button className="btn btn-outline-success text-white px-2 py-2" style={{fontSize:20}}>Contact On Whatsaap</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Contact Start --> */}
      <div className="container-fluid bg-secondary px-0">
        <div className="row g-0">
          <div ref={refLeft}
          className={`col-lg-6 py-6 px-5 animate__animated ${
            isVisibleLeft ? "animate__fadeInUp" : ""
          } animate-on-scroll`}>
            <h1 className="display-5 mb-4">
              Contact Us For Further Information
            </h1>
            <p>
              Connect with us for comprehensive assistance! Your bridge to UK
              immigration excellence starts here!
            </p>
            <form>
              <div className="row g-3">
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="form-floating-1"
                      placeholder="John Doe"
                    />
                    <label htmlFor="form-floating-1">Full Name</label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="form-floating-2"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="form-floating-2">Email address</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="form-floating-3"
                      placeholder="Subject"
                    />
                    <label htmlFor="form-floating-3">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      id="form-floating-4"
                      style={{ height: "150px" }}
                    ></textarea>
                    <label htmlFor="form-floating-4">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    onClick={submit}
                    className="btn w-100 py-3 submitB"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/*  */}
          <div style={{ minHeight: "400px" }} ref={refRight}
          className={`col-lg-6 animate__animated ${
            isVisibleRight ? "animate__fadeInUp" : ""
          } animate-on-scroll`}>
            <div className="h-100 d-flex flex-column justify-content-center p-5" style={{backgroundColor:'#6E8644'}}>
              <h1 className="mb-5" >Contact Information</h1>
              <div className="d-flex text-white mb-3">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mb-4"
                >
                  <i className="fas fa-map-marked-alt fs-4"></i>
                </div>
                <div className="ps-4 mt-3" style={{ fontWeight: 500 }}>
                  <p>Olympic House, 28-42 Clements Road, Ilford, UK IG1 1BA</p>
                </div>
              </div>
              <div className="d-flex text-white mb-3">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mb-4"
                >
                  <i className="fa-solid fa-phone fs-4"></i>
                </div>
                <div className="ps-4 mt-3" style={{ fontWeight: 500 }}>
                  <p>+44 2035 114111</p>
                </div>
              </div>
              <div className="d-flex text-white mb-3">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mb-4"
                >
                  <i className="fas fa-mail-bulk fs-4"></i>
                </div>
                <div className="ps-4 mt-3" style={{ fontWeight: 500 }}>
                  <p>Legalexglobal@gmail.com</p>
                </div>
              </div>
              <div className="d-flex text-white mb-3">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mb-4"
                >
                  <i className="fas fa-location-arrow fs-4"></i>
                </div>
                <div className="ps-4 mt-3" style={{ fontWeight: 500 }}>
                  <p>
                    Rehman Shaheed Road near Shell petrol Station, Gujrat,
                    Pakistan
                  </p>
                </div>
              </div>
              <div className="d-flex text-white mb-3">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mb-4"
                >
                  <i className="fa-solid fa-phone fs-4"></i>
                </div>
                <div className="ps-4 mt-3" style={{ fontWeight: 500 }}>
                  <p>+92 333 111 9210</p>
                </div>
              </div>
              <div className="d-flex text-white mb-3">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle mb-4"
                >
                  <i className="fa-solid fa-phone fs-4"></i>
                </div>
                <div className="ps-4 mt-3" style={{ fontWeight: 500 }}>
                  <p>+92 533 709606</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.7572807633437!2d74.0628852748182!3d32.585996593725085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1ad2710c7775%3A0xb0db743bfafe9179!2sRehman%20Shaheed%20Rd%2C%20Gujurat%2C%20Gujrat%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693459260481!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="working"></iframe>
      </div>
      {/* <!-- Back to Top --> */}
      <div
        onClick={MoveToTop}
        className="btn btn-lg btn-lg-square rounded-circle back-to-top"
        style={{backgroundColor:'#6E8644'}}
      >
        <i className="bi bi-arrow-up text-white"></i>
      </div>
    </div>
  );
}
