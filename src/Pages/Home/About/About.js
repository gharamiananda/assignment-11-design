import React from 'react';

const About = () => {
    return (
        <div>
            <section className="section kf-category" style={{ backgroundImage: "url(images/category_bg.jpg)" }}>
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">

                            <div className="kf-category-items element-anim-1 scroll-animate" data-animate="active">
                                <div className="kf-category-item">
                                    <div className="image kf-image-hover">
                                        <a href="menu-restaurant.html"><img src="images/category1.jpg" alt="" /></a>
                                    </div>
                                    <div className="desc">
                                        <h5 className="name">Chiken Roll</h5>
                                    </div>
                                </div>
                                <div className="kf-category-item">
                                    <div className="image kf-image-hover">
                                        <a href="menu-restaurant.html"><img src="images/category2.jpg" alt="" /></a>
                                    </div>
                                    <div className="desc">
                                        <h5 className="name">Salad Bowl</h5>
                                    </div>
                                </div>
                                <div className="kf-category-item">
                                    <div className="image kf-image-hover">
                                        <a href="menu-restaurant.html"><img src="images/category3.jpg" alt="" /></a>
                                    </div>
                                    <div className="desc">
                                        <h5 className="name">Lobsters</h5>
                                    </div>
                                </div>
                                <div className="kf-category-item">
                                    <div className="image kf-image-hover">
                                        <a href="menu-restaurant.html"><img src="images/ins_gal1.jpg" alt="" /></a>
                                    </div>
                                    <div className="desc">
                                        <h5 className="name">Italian Burger</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">

                            <div className="kf-titles">
                                <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                                    Popular Categories
                                </div>
                                <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                                    Choose Your Best Food <br />From Categories
                                </h3>
                            </div>

                            <div className="kf-text element-anim-1 scroll-animate" data-animate="active">
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error accusantium doloremque laudantium,
                                    totam rem
                                    aperiam eaque ipsa quae abillo inventore veritatis quasi architecto beatae vitae
                                    dicta sunt explicabo.
                                    Nemo enim ipsluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia con
                                </p>
                            </div>

                            <a href="menu-restaurant.html" className="kf-btn element-anim-1 scroll-animate"
                                data-animate="active">
                                <span>explore more Category</span>
                                <i className="fas fa-chevron-right"></i>
                            </a>

                        </div>
                    </div>

                </div>
            </section>


            {/* <section className="section kf-menu-classic section-bg">
                <div className="container">

                    <div className="kf-titles align-center">
                        <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                            Choose Best Menus
                        </div>
                        <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                            Kaffen Popular Foods Menu
                        </h3>
                    </div>

                    <div className="kf-menu-items" style={{ backgroundImage: "url(images/menu_logo.png)" }}>
                        <div className="row">

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Chicken</h5>
                                        <div className="subname">Sed ut perspiciatis unde</div>
                                        <div className="price"><span>$4.9</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Salad Bowl</h5>
                                        <div className="subname">Sed ut perspiciatis unde</div>
                                        <div className="price"><span>$199</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Barista Pouring Syrup</h5>
                                        <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                                        <div className="price">$3.5</div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Smoothie</h5>
                                        <div className="subname">Sed ut perspiciatis unde</div>
                                        <div className="price"><span>$55.9</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Gin Trifles</h5>
                                        <div className="subname">Sed ut perspiciatis unde</div>
                                        <div className="price"><span>$37.5</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Quesadillas</h5>
                                        <div className="subname">Sed ut perspiciatis unde</div>
                                        <div className="price"><span>$4.9</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Italian Burger</h5>
                                        <div className="subname">Tomatoes, sausage, ground, onions, cheese</div>
                                        <div className="price">$12.8</div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Chicken Burger</h5>
                                        <div className="subname">Ground chicken breast, mustard, paprika</div>
                                        <div className="price">$17.5</div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Sea Fish</h5>
                                        <div className="subname">Sed ut perspiciatis unde</div>
                                        <div className="price"><span>$79.0</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Okonomiyaki</h5>
                                        <div className="subname">Sed ut perspiciatis unde</div>
                                        <div className="price"><span>$99.9</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Benedict</h5>
                                        <div className="subname">Sed ut perspiciatis unde</div>
                                        <div className="price"><span>$68.5</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="kf-menu-item element-anim-1 scroll-animate" data-animate="active">
                                    <div>
                                        <h5 className="name">Milk Cream</h5>
                                        <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                                        <div className="price">$7.5</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section> */}
        </div>
    );
};

export default About;