import React from "react";
import img1 from "./img/events/1.jpg";
import img2 from "./img/events/2.jpg";
import img3 from "./img/events/3.jpg";
import img4 from "./img/events/4.jpg";
import img5 from "./img/events/5.jpg";
import img6 from "./img/events/6.jpg";
import img7 from "./img/events/7.jpg";
import img8 from "./img/events/8.jpg";
import img9 from "./img/events/9.jpg";
import img10 from "./img/events/10.jpg";
import img11 from "./img/events/11.jpg";
import img12 from "./img/events/12.jpg";
import img13 from "./img/events/13.jpg";
import img14 from "./img/events/14.jpg";
import img15 from "./img/events/15.jpg";
import img16 from "./img/events/16.jpg";
import img17 from "./img/events/17.jpg";

const EventGallery = () => {
    const events = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
        { img: img9 },
        { img: img10 },
        { img: img11 },
        { img: img12 },
        { img: img13 },
        { img: img14 },
        { img: img15 },
        { img: img16 },
        { img: img17 },
    ];

    return (
        <>
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
                                Events
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            <div className="container py-4">
                <div className="row g-4">
                    {events?.map((e, ind) => {
                        return (
                            <div key={ind} className="col-md-3">
                                <img
                                    src={e.img}
                                    alt={`img-${ind}`}
                                    className="img-fluid"
                                    style={{
                                        borderRadius: "15px",
                                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                        cursor: "pointer",
                                    }}
                                    onMouseEnter={(e) =>
                                    (e.currentTarget.style.transform =
                                        "scale(1.05)")
                                    }
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow =
                                            "0 4px 15px rgba(0, 0, 0, 0.2)";
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default EventGallery;
