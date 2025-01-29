import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uni1 from "./img/Uni/dunya-int.jpg"
import uni2 from "./img/Uni/debrecen-hungry.jpg"
import uni3 from "./img/Uni/sunderland-uni.webp"
import uni4 from "./img/Uni/metropolitan-uni.webp"
import uni5 from "./img/Uni/nicosia-cyprus.webp"
import uni6 from "./img/Uni/central-lancashire.webp"

function ScrollUni() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    
    return (
        <div className="slider-container container mb-5">
            <h1 className="display-5 text-center">
                Collaborte <span style={{ color: "#6E8644" }}>With Us</span>
                <hr className="w-25 mx-auto bg-success" />
            </h1>
            <Slider {...settings}>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <img src={uni1} className="img-fluid" alt="" />
                            <h4>Duna International College Hungary</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <img src={uni2} className="img-fluid" alt="" />
                            <h4>University of Debrecen Hungary</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <img src={uni3} className="img-fluid" alt="" />
                            <h4>University of Sunderland UK</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <img src={uni4} className="img-fluid" alt="" />
                            <h4>London Metropolitan Uni.</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <img src={uni5} className="img-fluid" alt="" />
                            <h4>City Unity College Nicosia Cyprus</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <img src={uni6} className="img-fluid" alt="" />
                            <h4>University of Central Lancashire</h4>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default ScrollUni;
