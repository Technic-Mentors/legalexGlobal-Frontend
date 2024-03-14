import React from 'react'

export default function Feature() {
  return (
    <div>
      <div className="container-fluid bg-dark p-5">
        <div className="row">
            <div className="col-12 text-center">
                <h1 className="display-4 text-white">Features</h1>
                <a href="#/">Home</a>
                <i className="far fa-square text-primary px-2"></i>
                <a href="#/">Features</a>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Features Start --> */}
    <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5" style={{maxWidth: '600px'}}>
            <h1 className="display-5 mb-0">Why Choose Us!!!</h1>
            <hr className="w-25 mx-auto bg-primary"/>
        </div>
        <div className="row g-5">
            <div className="col-lg-4">
                <div className="row g-5">
                    <div className="col-12">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-cubes fs-4 text-white"></i>
                        </div>
                        <h3>Best In Industry</h3>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                    </div>
                    <div className="col-12">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-percent fs-4 text-white"></i>
                        </div>
                        <h3>99% Success Rate</h3>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                    </div>
                    <div className="col-12">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-award fs-4 text-white"></i>
                        </div>
                        <h3>Award Winning</h3>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="d-block bg-primary h-100 text-center">
                    <img className="img-fluid" src="img/feature.jpg" alt=""/>
                    <div className="p-4">
                        <p className="text-white mb-4">Clita nonumy sanctus nonumy et clita tempor, et sea amet ut et sadipscing rebum amet takimata amet, sed accusam eos eos dolores dolore et. Et ea ea dolor rebum invidunt clita eos. Sea accusam stet stet ipsum, sit ipsum et ipsum kasd</p>
                        <a href="#/" className="btn btn-light py-md-3 px-md-5 rounded-pill mb-2">Learn More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row g-5">
                    <div className="col-12">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="far fa-smile-beam fs-4 text-white"></i>
                        </div>
                        <h3>100% Happy Client</h3>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                    </div>
                    <div className="col-12">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-user-tie fs-4 text-white"></i>
                        </div>
                        <h3>Professional Advisors</h3>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                    </div>
                    <div className="col-12">
                        <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="fa fa-headset fs-4 text-white"></i>
                        </div>
                        <h3>24/7 Customer Support</h3>
                        <p className="mb-0">Magna sea eos sit dolor, ipsum amet ipsum lorem diam dolor eos diam et diam dolor ea</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Features Start --> */}
    

    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-primary text-secondary p-5">
        <div className="row g-5">
            <div className="col-12 text-center">
                <h1 className="display-5 mb-4">Stay Update!!!</h1>
                <form className="mx-auto" style={{maxWidth: '600px'}}>
                    <div className="input-group">
                        <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                        <button className="btn btn-dark px-4">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-secondary p-5">
        <div className="row g-5">
            <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-secondary mb-2" href="#/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                    <a className="text-secondary mb-2" href="#/"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                    <a className="text-secondary mb-2" href="#/"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                    <a className="text-secondary mb-2" href="#/"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog Post</a>
                    <a className="text-secondary" href="#/"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Popular Links</h3>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-secondary mb-2" href="#/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                    <a className="text-secondary mb-2" href="#/"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                    <a className="text-secondary mb-2" href="#/"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                    <a className="text-secondary mb-2" href="#/"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog Post</a>
                    <a className="text-secondary" href="#/"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Get In Touch</h3>
                <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
            </div>
            <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Follow Us</h3>
                <div className="d-flex">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#/"><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#/"><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#/"><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#/"><i className="fab fa-instagram fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-secondary text-center border-top py-4 px-5" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
        <p className="m-0">&copy; <a className="text-secondary border-bottom" href="#/">Your Site Name</a>. All Rights Reserved. Designed by <a className="text-secondary border-bottom" href="https://htmlcodex.com">HTML Codex</a></p>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#/" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
  )
}
