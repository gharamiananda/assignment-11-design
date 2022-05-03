import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="kf-header">

                {/* <!-- topline --> */}
                <div className="kf-topline">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">

                            {/* <!-- hours --> */}
                            <div className="kf-h-group">
                                <i className="far fa-clock"></i>
                                <em>opening hours :</em> 08:00 am - 09:00 pm
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">

                            {/* <!-- social --> */}
                            <div className="kf-h-social">
                                <a href="facebook.com" target="blank"><i className="fab fa-facebook-f"></i></a>
                                <a href="twitter.com" target="blank"><i className="fab fa-twitter"></i></a>
                                <a href="instagram.com" target="blank"><i className="fab fa-instagram"></i></a>
                                <a href="youtube.com" target="blank"><i className="fab fa-youtube"></i></a>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">

                            {/* <!-- location --> */}
                            <div className="kf-h-group">
                                <i className="fas fa-map-marker-alt"></i>
                                <em>Location :</em> 55 main street, new york
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- navbar --> */}
                <div className="kf-navbar">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">

                            {/* <!-- logo --> */}
                            <div className="kf-logo">
                                <a href="index.html"><img src="images/logo.png" alt="" /></a>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">

                            {/* <!-- main menu --> */}
                            <div className="kf-main-menu">
                                <ul>
                                    <li>
                                        <a href="index.html">Home<i className="las la-angle-down"></i></a>
                                        <ul>
                                            <li><a href="index.html">Coffee House</a></li>
                                            <li><a href="index-2.html">Restaurant</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li>
                                        <a href="menu-coffee.html">Menu<i className="las la-angle-down"></i></a>
                                        <ul>
                                            <li><a href="menu-coffee.html">Menu Coffee</a></li>
                                            <li><a href="menu-restaurant.html">Menu Restaurant</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages<i className="las la-angle-down"></i></a>
                                        <ul>
                                            <li><a href="services.html">Service</a></li>
                                            <li><a href="reservation.html">Reservation</a></li>
                                            <li><a href="history.html">History</a></li>
                                            <li><a href="team.html">Our Chefs</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="faq.html">FAQ</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Blog<i className="las la-angle-down"></i></a>
                                        <ul>
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            <li><a href="blog.html">Blog Standard</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contacts.html">Contacts</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">

                            {/* <!-- menu /btn --> */}
                            <a href="#" className="kf-menu-btn"><span></span></a>

                            {/* <!-- btn/ --> */}
                            <a href="reservation.html" className="kf-btn h-btn">
                                <span>Book a table</span>
                            </a>

                        </div>
                    </div>
                </div>

                {/* <!-- mobile navbar --> */}
                <div className="kf-navbar-mobile">

                    {/* <!-- mobile menu --> */}
                    <div className="kf-main-menu">
                        <ul>
                            <li className="has-children">
                                <a href="index.html">Home</a>
                                <i className="las la-angle-down"></i>
                                <ul>
                                    <li><a href="index.html">Coffee House</a></li>
                                    <li><a href="index-2.html">Restaurant</a></li>
                                </ul>
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li className="has-children">
                                <a href="menu-coffee.html">Menu</a>
                                <i className="las la-angle-down"></i>
                                <ul>
                                    <li><a href="menu-coffee.html">Menu Coffee</a></li>
                                    <li><a href="menu-restaurant.html">Menu Restaurant</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="#">Pages</a>
                                <i className="las la-angle-down"></i>
                                <ul>
                                    <li><a href="services.html">Service</a></li>
                                    <li><a href="reservation.html">Reservation</a></li>
                                    <li><a href="history.html">History</a></li>
                                    <li><a href="team.html">Our Chefs</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                </ul>
                            </li>
                            <li className="has-children">
                                <a href="#">Blog</a>
                                <i className="las la-angle-down"></i>
                                <ul>
                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                    <li><a href="blog.html">Blog Standard</a></li>
                                    <li><a href="blog-single.html">Blog Single</a></li>
                                </ul>
                            </li>
                            <li><a href="contacts.html">Contacts</a></li>
                        </ul>
                    </div>

                    {/* <!-- mobile topline --> */}
                    <div className="kf-topline">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                {/* <!-- mobile btn --> */}
                                <a href="reservation.html" className="kf-btn h-btn">
                                    <span>Book a table</span>
                                    <i className="fas fa-chevron-right"></i>
                                </a>

                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                {/* <!-- social --> */}
                                <div className="kf-h-social">
                                    <a href="facebook.com" target="blank"><i className="fab fa-facebook-f"></i></a>
                                    <a href="twitter.com" target="blank"><i className="fab fa-twitter"></i></a>
                                    <a href="instagram.com" target="blank"><i className="fab fa-instagram"></i></a>
                                    <a href="youtube.com" target="blank"><i className="fab fa-youtube"></i></a>
                                </div>

                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                {/* <!-- hours --> */}
                                <div className="kf-h-group">
                                    <i className="far fa-clock"></i>
                                    <em>opening hours :</em> 08:00 am - 09:00 pm
                                </div>

                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                                {/* <!-- location --> */}
                                <div className="kf-h-group">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <em>Location :</em> 55 main street, new york
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </header>
        </div>
    );
};

export default Header;