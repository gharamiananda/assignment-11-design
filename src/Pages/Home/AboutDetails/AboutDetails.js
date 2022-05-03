import React from 'react';
import Header from '../../Shared/Header/Header';

const AboutDetails = () => {
    return (
        <div className='bg'>
            <Header></Header>
            <div class="preloader">
                <div class="centrize full-width">
                    <div class="vertical-center">
                        <div class="spinner-logo">
                            <img src="images/logo.png" alt="" />
                            <div class="spinner-dot">
                                <div class="spinner-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Wrapper --> */}
            <div class="wrapper">

                {/* <!-- Section Started Inner --> */}
                <section class="section kf-started-inner">
                    <div class="kf-parallax-bg js-parallax" style={{ backgroundImage: "url(images/history_inner_bg.jpg)" }}></div>
                    <div class="container">

                        <h1 class="kf-h-title text-anim-1 scroll-animate" data-splitting="chars" data-animate="active">
                            About Us
                        </h1>

                    </div>
                </section>

                {/* <!-- Section About-2 --> */}
                <section class="section kf-choose kf-choose-2">
                    <div class="container">

                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">

                                <div class="kf-titles">
                                    <div class="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                                        About Kaffen
                                    </div>
                                    <h3 class="kf-title element-anim-1 scroll-animate" data-animate="active">
                                        New London Coffee Founded For Extraordinary Test
                                    </h3>
                                </div>

                                <div class="kf-text element-anim-1 scroll-animate" data-animate="active">
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque
                                        laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis
                                    </p>
                                </div>

                                <div class="kf-choose-list">
                                    <ul>
                                        <li class="element-anim-1 scroll-animate" data-animate="active">
                                            <div class="icon">
                                                <img src="images/choose_icon1.png" alt="" />
                                            </div>
                                            <div class="desc">
                                                <h5 class="name">Natural Coffee Beans</h5>
                                                <div class="subname">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</div>
                                            </div>
                                        </li>
                                        <li class="element-anim-1 scroll-animate" data-animate="active">
                                            <div class="icon">
                                                <img src="images/choose_icon2.png" alt="" />
                                            </div>
                                            <div class="desc">
                                                <h5 class="name">100% ISO Certification</h5>
                                                <div class="subname">Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <a href="menu-coffee.html" class="kf-btn element-anim-1 scroll-animate" data-animate="active">
                                    <span>our menu</span>
                                    <i class="fas fa-chevron-right"></i>
                                </a>

                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">

                                <div class="kf-choose-image element-anim-1 scroll-animate" data-animate="active">
                                    <img src="images/about_img2.jpg" alt="" />
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section class="section kf-cta kf-parallax" style={{ backgroundImage: "url(images/cta_bg.jpg)" }}>
                    <div class="container">

                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">

                                <div class="kf-titles">
                                    <div class="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                                        Need a Table On Coffee House
                                    </div>
                                    <h3 class="kf-title element-anim-1 scroll-animate" data-animate="active">
                                        Booking Table For Your & Family Members
                                    </h3>
                                </div>

                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">

                                <a href="reservation.html" class="kf-btn element-anim-1 scroll-animate" data-animate="active">
                                    <span>booking table</span>
                                    <i class="fas fa-chevron-right"></i>
                                </a>

                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>


    );
};

export default AboutDetails;