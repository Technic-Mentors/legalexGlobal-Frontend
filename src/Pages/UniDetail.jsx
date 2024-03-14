import React, { useState } from "react";

export default function University() {
    const [activeTab, setActiveTab] = useState("universities-in-uk");

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
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
                                style={{ fontSize: 70 }}
                            >
                                Available Universities
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <section
                className="pills-tab-section mt-5 "
                style={{ scrollMarginTop: "65px", backgroundColor: "#f5f5f5" }}
            >
                <div className="container-fluid px-4 py-4">
                    <div className="row">
                        <div
                            className="col-md-3 jutify-content-center align-items-center"
                            data-aos="fade-right"
                            data-aos-duration="2000"
                        >
                            {/* Tab navs */}
                            <div
                                className="nav flex-column nav-pills text-start"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    className={`nav-link text-white mb-2 ${activeTab === "universities-in-uk" ? "active" : ""
                                        }`}
                                    id="universities-in-uk-tab"
                                    data-mdb-toggle="pill"
                                    href="#universities-in-uk"
                                    role="tab"
                                    onClick={() => handleTabChange("universities-in-uk")}
                                    aria-controls="universities-in-uk"
                                    aria-selected={activeTab === "universities-in-uk"}
                                    style={{
                                        fontWeight: "bold",
                                        borderRadius: "25px 0",
                                        display: "block",
                                        padding: "12px",
                                        backgroundColor:
                                            activeTab === "universities-in-uk"
                                                ? "rgb(40, 89, 157)"
                                                : "rgb(110, 134, 68)",
                                        border:
                                            activeTab === "universities-in-uk"
                                                ? "none"
                                                : "1px solid var(--primary-color)",
                                    }}
                                >
                                    <span className="mt-3">Universities In UK</span>
                                </a>

                                <a
                                    className={`nav-link text-white mb-2 ${activeTab === "universities-in-newzealand" ? "active" : ""
                                        }`}
                                    id="universities-in-newzealand-tab"
                                    data-mdb-toggle="pill"
                                    href="#universities-in-newzealand"
                                    role="tab"
                                    onClick={() => handleTabChange("universities-in-newzealand")}
                                    aria-controls="universities-in-newzealand"
                                    aria-selected={activeTab === "universities-in-newzealand"}
                                    style={{
                                        fontWeight: "bold",
                                        display: "block",
                                        padding: "12px",
                                        borderRadius: "25px 0",
                                        backgroundColor:
                                            activeTab === "universities-in-newzealand"
                                                ? "rgb(40, 89, 157)"
                                                : "rgb(110, 134, 68)",
                                        border:
                                            activeTab === "universities-in-newzealand"
                                                ? "none"
                                                : "1px solid var(--primary-color)",
                                    }}
                                >
                                    Universities In New Zealand
                                </a>

                                <a
                                    className={`nav-link text-white mb-2 ${activeTab === "universities-in-canada" ? "active" : ""
                                        }`}
                                    id="universities-in-canada-tab"
                                    data-mdb-toggle="pill"
                                    href="#universities-in-canada"
                                    role="tab"
                                    onClick={() => handleTabChange("universities-in-canada")}
                                    aria-controls="universities-in-canada"
                                    aria-selected={activeTab === "universities-in-canada"}
                                    style={{
                                        fontWeight: "bold",
                                        display: "block",
                                        padding: "12px",
                                        borderRadius: "25px 0",
                                        backgroundColor:
                                            activeTab === "universities-in-canada"
                                                ? "rgb(40, 89, 157)"
                                                : "rgb(110, 134, 68)",
                                        border:
                                            activeTab === "universities-in-canada"
                                                ? "none"
                                                : "1px solid var(--primary-color)",
                                    }}
                                >
                                    Universities In Canada
                                </a>

                                <a
                                    className={`nav-link text-white mb-2 ${activeTab === "universities-in-austrailia" ? "active" : ""
                                        }`}
                                    id="universities-in-austrailia-tab"
                                    data-mdb-toggle="pill"
                                    href="#universities-in-austrailia"
                                    role="tab"
                                    onClick={() => handleTabChange("universities-in-austrailia")}
                                    aria-controls="universities-in-austrailia"
                                    aria-selected={activeTab === "universities-in-austrailia"}
                                    style={{
                                        fontWeight: "bold",
                                        display: "block",
                                        padding: "12px",
                                        borderRadius: "25px 0",
                                        backgroundColor:
                                            activeTab === "universities-in-austrailia"
                                                ? "rgb(40, 89, 157)"
                                                : "rgb(110, 134, 68)",
                                        border:
                                            activeTab === "universities-in-austrailia"
                                                ? "none"
                                                : "1px solid var(--primary-color)",
                                    }}
                                >
                                    Universities In Austrailia
                                </a>

                                <a
                                    className={`nav-link text-white mb-2 ${activeTab === "universities-in-france" ? "active" : ""
                                        }`}
                                    id="universities-in-france-tab"
                                    data-mdb-toggle="pill"
                                    href="#universities-in-france"
                                    role="tab"
                                    onClick={() => handleTabChange("universities-in-france")}
                                    aria-controls="universities-in-france"
                                    aria-selected={activeTab === "universities-in-france"}
                                    style={{
                                        fontWeight: "bold",
                                        display: "block",
                                        padding: "12px",
                                        borderRadius: "25px 0",
                                        backgroundColor:
                                            activeTab === "universities-in-france"
                                                ? "rgb(40, 89, 157)"
                                                : "rgb(110, 134, 68)",
                                        border:
                                            activeTab === "universities-in-france"
                                                ? "none"
                                                : "1px solid var(--primary-color)",
                                    }}
                                >
                                    Universities In France
                                </a>

                                <a
                                    className={`nav-link text-white mb-2  ${activeTab === "universities-in-italy" ? "active" : ""
                                        }`}
                                    id="universities-in-italy-tab"
                                    data-mdb-toggle="pill"
                                    href="#universities-in-italy"
                                    role="tab"
                                    onClick={() => handleTabChange("universities-in-italy")}
                                    aria-controls="universities-in-italy"
                                    aria-selected={activeTab === "universities-in-italy"}
                                    style={{
                                        fontWeight: "bold",
                                        display: "block",
                                        padding: "12px",
                                        borderRadius: "25px 0",
                                        backgroundColor:
                                            activeTab === "universities-in-italy"
                                                ? "rgb(40, 89, 157)"
                                                : "rgb(110, 134, 68)",
                                        border:
                                            activeTab === "universities-in-italy"
                                                ? "none"
                                                : "1px solid var(--primary-color)",
                                    }}
                                >
                                    Universities In Italy
                                </a>
                                <a
                                    className={`nav-link text-white mb-2  ${activeTab === "universities-in-malaysia" ? "active" : ""
                                        }`}
                                    id="universities-in-malaysia-tab"
                                    data-mdb-toggle="pill"
                                    href="#universities-in-malaysia"
                                    role="tab"
                                    onClick={() => handleTabChange("universities-in-malaysia")}
                                    aria-controls="universities-in-malaysia"
                                    aria-selected={activeTab === "universities-in-malaysia"}
                                    style={{
                                        fontWeight: "bold",
                                        display: "block",
                                        padding: "12px",
                                        borderRadius: "25px 0",
                                        backgroundColor:
                                            activeTab === "universities-in-malaysia"
                                                ? "rgb(40, 89, 157)"
                                                : "rgb(110, 134, 68)",
                                        border:
                                            activeTab === "universities-in-malaysia"
                                                ? "none"
                                                : "1px solid var(--primary-color)",
                                    }}
                                >
                                    Universities In Malaysia
                                </a>
                                <a
                                    className={`nav-link text-white mb-2  ${activeTab === "universities-in-finland" ? "active" : ""
                                        }`}
                                    id="universities-in-finland-tab"
                                    data-mdb-toggle="pill"
                                    href="#universities-in-finland"
                                    role="tab"
                                    onClick={() => handleTabChange("universities-in-finland")}
                                    aria-controls="universities-in-finland"
                                    aria-selected={activeTab === "universities-in-finland"}
                                    style={{
                                        fontWeight: "bold",
                                        display: "block",
                                        padding: "12px",
                                        borderRadius: "25px 0",
                                        backgroundColor:
                                            activeTab === "universities-in-finland"
                                                ? "rgb(40, 89, 157)"
                                                : "rgb(110, 134, 68)",
                                        border:
                                            activeTab === "universities-in-finland"
                                                ? "none"
                                                : "1px solid var(--primary-color)",
                                    }}
                                >
                                    Universities In Findland
                                </a>
                            </div>
                            {/* Tab navs  */}
                        </div>

                        <div
                            className="col-md-9 tab-detail"
                            data-aos="fade-left"
                            data-aos-duration="2000"
                        >
                            {/* Tab content */}
                            <div className="tab-content" id="v-pills-tabContent">
                                <div
                                    className={`tab-pane fade show ${activeTab === "universities-in-uk" ? "active" : ""
                                        }`}
                                    id="universities-in-uk"
                                    role="tabpanel"
                                    aria-labelledby="universities-in-uk-tab"
                                >
                                    <div className="container bag-design-gallery">
                                        <div className="row">
                                            <div className="col-md-4 uni-height">
                                                <ul>
                                                    <li>University of the West of Scotland</li>
                                                    <li>London South Bank University</li>
                                                    <li>Keele University</li>
                                                    <li>University of Plymouth</li>
                                                    <li>University of Huddersfield</li>
                                                    <li>BPP University</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 uni-height">
                                                <ul>
                                                    <li>Coventry University</li>
                                                    <li>The University of Manchester</li>
                                                    <li>University of Birmingham</li>
                                                    <li>Northumbria University - London</li>
                                                    <li>University of Leicester</li>
                                                    <li>Newcastle University</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4 uni-height">
                                                <ul>
                                                    <li>University of Roehampton London</li>
                                                    <li>The University of Edinburgh</li>
                                                    <li>University of Bristol</li>
                                                    <li>Imperial College London</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "universities-in-newzealand" ? "active" : ""
                                        }`}
                                    id="universities-in-newzealand"
                                    role="tabpanel"
                                    aria-labelledby="universities-in-newzealand-tab"
                                >
                                    <div className="container ceramics-design-gallery">
                                        <div className="row">
                                            <div className="col-md-9">

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "universities-in-canada" ? "active" : ""
                                        }`}
                                    id="universities-in-canada"
                                    role="tabpanel"
                                    aria-labelledby="universities-in-canada-tab"
                                >
                                    <div className="container ceramics-design-gallery">
                                        <div className="row">
                                            <div className="col-md-9">

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "universities-in-austrailia" ? "active" : ""
                                        }`}
                                    id="universities-in-austrailia"
                                    role="tabpanel"
                                    aria-labelledby="universities-in-austrailia"
                                >
                                    <div className="container ceramics-design-gallery">
                                        <div className="row">
                                            <div className="col-md-9">

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "universities-in-france" ? "active" : ""
                                        }`}
                                    id="universities-in-france"
                                    role="tabpanel"
                                    aria-labelledby="universities-in-france"
                                >
                                    <div className="container ceramics-design-gallery">
                                        <div className="row">
                                            <div className="col-md-9">

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade show ${activeTab === "universities-in-italy" ? "active" : ""
                                        }`}
                                    id="universities-in-italy"
                                    role="tabpanel"
                                    aria-labelledby="universities-in-italy"
                                >
                                    <div className="container ceramics-design-gallery">
                                        <div className="row">
                                            <div className="col-md-9">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`tab-pane fade show ${activeTab === "universities-in-malaysia" ? "active" : ""
                                        }`}
                                    id="universities-in-malaysia"
                                    role="tabpanel"
                                    aria-labelledby="universities-in-malaysia"
                                >
                                    <div className="container ceramics-design-gallery">
                                        <div className="row">
                                            <div className="col-md-9">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`tab-pane fade show ${activeTab === "universities-in-finland" ? "active" : ""
                                        }`}
                                    id="universities-in-finland"
                                    role="tabpanel"
                                    aria-labelledby="universities-in-finland"
                                >
                                    <div className="container ceramics-design-gallery">
                                        <div className="row">
                                            <div className="col-md-9">

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* Tab content */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}