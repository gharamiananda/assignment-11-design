import React from 'react';

const Banner = () => {
    return (


        <section className="section kf-started-slider">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">

                        <div className="kf-started-item">
                            <div className="slide js-parallax" style={{ backgroundImage: "url(images/started_img7.jpg)" }}>
                            </div>
                            <div className="container">
                                <div className="description align-left element-anim-1">
                                    <div className="subtitles">
                                        Welcome to the Kaffen
                                    </div>
                                    <h2 className="name text-anim-1" data-splitting="chars">
                                        Reserve Your <br />Table Today
                                    </h2>
                                    <div className="kf-bts">
                                        <a href="menu-restaurant.html" className="kf-btn">
                                            <span>explore more</span>
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                        <a href="reservation.html" className="kf-btn dark-btn">
                                            <span>get delivery</span>
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="swiper-slide">

                        <div className="kf-started-item">
                            <div className="slide js-parallax" style={{ backgroundImage: "url(images/started_img5.jpg)" }}>
                            </div>
                            <div className="container">
                                <div className="description align-left element-anim-1">
                                    <div className="subtitles">
                                        Welcome to the Kaffen
                                    </div>
                                    <h2 className="name text-anim-1" data-splitting="chars">
                                        Explore The <br />Lobsters
                                    </h2>
                                    <div className="kf-bts">
                                        <a href="menu-restaurant.html" className="kf-btn">
                                            <span>explore more</span>
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                        <a href="reservation.html" className="kf-btn dark-btn">
                                            <span>get delivery</span>
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="swiper-slide">

                        <div className="kf-started-item">
                            <div className="slide js-parallax" style={{ backgroundImage: "url(images/started_img6.jpg)" }}>
                            </div>
                            <div className="container">
                                <div className="description align-left element-anim-1">
                                    <div className="subtitles">
                                        Welcome to the Kaffen
                                    </div>
                                    <h2 className="name text-anim-1" data-splitting="chars">
                                        Premium <br />Meat Kaffen
                                    </h2>
                                    <div className="kf-bts">
                                        <a href="menu-restaurant.html" className="kf-btn">
                                            <span>explore more</span>
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                        <a href="reservation.html" className="kf-btn dark-btn">
                                            <span>get delivery</span>
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

            </div>
        </section>

    );
};

export default Banner;