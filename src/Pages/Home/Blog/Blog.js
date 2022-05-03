import React from 'react';

const Blog = () => {
    return (
        <section className="section kf-menu-classic section-bg" style={{ backgroundImage: "url(images/category_bg.jpg)" }}>
            <div className="container">

                <div className="kf-titles align-center">
                    <div className="kf-subtitle element-anim-1 scroll-animate" data-animate="active">
                        Get Every Single Update
                    </div>
                    <h3 className="kf-title element-anim-1 scroll-animate" data-animate="active">
                        Read Some Latest Blog & News
                    </h3>
                </div>

                <div className="kf-blog-grid-items row">

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="kf-blog-grid-item element-anim-1 scroll-animate" data-animate="active">
                            <div className="image kf-image-hover">
                                <a href="blog-single.html"><img src="images/latest_blog1.jpg" alt="" /></a>
                            </div>
                            <div className="desc">
                                <h5 className="name">SWR React Hooks With Next Increm Ental Static Regeneration</h5>
                                <div className="kf-date"><i className="far fa-calendar-alt"></i>25 Sep 2021</div>
                                <div className="kf-comm"><i className="far fa-comments"></i>Comments (7)</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="kf-blog-grid-item element-anim-1 scroll-animate" data-animate="active">
                            <div className="image kf-image-hover">
                                <a href="blog-single.html"><img src="images/latest_blog2.jpg" alt="" /></a>
                            </div>
                            <div className="desc">
                                <h5 className="name">Decisions For Building Flexible Components DevTools Browser</h5>
                                <div className="kf-date"><i className="far fa-calendar-alt"></i>25 Sep 2021</div>
                                <div className="kf-comm"><i className="far fa-comments"></i>Comments (7)</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                        <div className="kf-blog-grid-item element-anim-1 scroll-animate" data-animate="active">
                            <div className="image kf-image-hover">
                                <a href="blog-single.html"><img src="images/latest_blog3.jpg" alt="" /></a>
                            </div>
                            <div className="desc">
                                <h5 className="name">SWR React Hooks With Next Increm Ental Static Regeneration</h5>
                                <div className="kf-date"><i className="far fa-calendar-alt"></i>25 Sep 2021</div>
                                <div className="kf-comm"><i className="far fa-comments"></i>Comments (7)</div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="align-center">

                    <a href="blog-grid.html" className="kf-btn element-anim-1 scroll-animate" data-animate="active">
                        <span>view all</span>
                        <i className="fas fa-chevron-right"></i>
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Blog;