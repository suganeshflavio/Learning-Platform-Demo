import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* <!-- Start of breadcrumb section
		============================================= --> */}
      <section
        id="breadcrumb"
        class="breadcrumb-section relative-position backgroud-style"
      >
        <div class="blakish-overlay"></div>
        <div class="container">
          <div class="page-breadcrumb-content text-center">
            <div class="page-breadcrumb-title">
              <h2 class="breadcrumb-head black bold">
                Genius <span>Blog</span>
              </h2>
            </div>
            <div class="page-breadcrumb-item ul-li">
              <ul class="breadcrumb text-uppercase black">
                <li class="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active">ABOUT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of breadcrumb section
		============================================= --> */}

      {/* <!-- Start of about us content
		============================================= --> */}
      <section id="about-page" class="about-page-section">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="about-us-content-item">
                <div class="about-gallery">
                  <div class="about-gallery-img grid-1">
                    <img src="assets/img/about/abt-2.jpg" alt="" />
                  </div>
                  <div class="about-gallery-img grid-2">
                    <img src="assets/img/about/abt-3.jpg" alt="" />
                  </div>
                  <div class="about-gallery-img grid-2">
                    <img src="assets/img/about/abt-4.jpg" alt="" />
                  </div>
                </div>
                {/* <!-- /gallery --> */}

                <div class="about-text-item">
                  <div class="section-title-2  headline text-left">
                    <h2>
                      We Are <span>Genius Course,</span> Online Course Since
                      1990
                    </h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi.
                  </p>
                </div>
                {/* <!-- /about-text --> */}

                <div class="course-teacher about-teacher-2">
                  <div class="course-advantage about-teacher-2">
                    <div class="section-title-2  headline text-left">
                      <h2>
                        Genius Course <span>Advantages</span>
                      </h2>
                    </div>
                    <div class="service-slide_3">
                      <OwlCarousel className="owl-theme" loop margin={10} nav>
                        <div class="item">
                          <div class="service-text-icon">
                            <div class="service-icon float-left">
                              <i class="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                            </div>
                            <div class="service-text">
                              <h3 class="bold-font">The Power Of Education.</h3>
                              <p>
                                Lorem ipsum dolor sit amet consectuerer
                                adipiscing elit set diam nonnumynibh.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="service-text-icon">
                            <div class="service-icon float-left">
                              <i class="text-gradiant flaticon-clipboard-with-pencil"></i>
                            </div>
                            <div class="service-text">
                              <h3 class="bold-font">Best Online Education.</h3>
                              <p>
                                Lorem ipsum dolor sit amet consectuerer
                                adipiscing elit set diam nonnumynibh.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="service-text-icon">
                            <div class="service-icon float-left">
                              <i class="text-gradiant flaticon-list"></i>
                            </div>
                            <div class="service-text">
                              <h3 class="bold-font">
                                Education For All Student.
                              </h3>
                              <p>
                                Lorem ipsum dolor sit amet consectuerer
                                adipiscing elit set diam nonnumynibh.
                              </p>
                            </div>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                  {/* <!-- /course-advantage --> */}

                  <div class="about-course-categori about-teacher-2">
                    <div class="section-title-2  headline text-left">
                      <h2>
                        Course <span>Categories</span>
                      </h2>
                    </div>
                    <div class="category-slide text-center">
                      <OwlCarousel className="owl-theme" loop margin={10} nav>
                        <div class="item">
                          <div class="category-icon-title text-center">
                            <div class="category-icon">
                              <i class="text-gradiant flaticon-technology"></i>
                            </div>
                            <div class="category-title">
                              <h4>Responsive Website</h4>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="category-icon-title text-center">
                            <div class="category-icon">
                              <i class="text-gradiant flaticon-app-store"></i>
                            </div>
                            <div class="category-title">
                              <h4>IOS Applications</h4>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="category-icon-title text-center">
                            <div class="category-icon">
                              <i class="text-gradiant flaticon-artist-tools"></i>
                            </div>
                            <div class="category-title">
                              <h4>Graphic Design</h4>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="category-icon-title text-center">
                            <div class="category-icon">
                              <i class="text-gradiant flaticon-business"></i>
                            </div>
                            <div class="category-title">
                              <h4>Marketing</h4>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="category-icon-title text-center">
                            <div class="category-icon">
                              <i class="text-gradiant flaticon-dna"></i>
                            </div>
                            <div class="category-title">
                              <h4>Science</h4>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="category-icon-title text-center">
                            <div class="category-icon">
                              <i class="text-gradiant flaticon-cogwheel"></i>
                            </div>
                            <div class="category-title">
                              <h4>Enginering</h4>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="category-icon-title text-center">
                            <div class="category-icon">
                              <i class="text-gradiant flaticon-technology-1"></i>
                            </div>
                            <div class="category-title">
                              <h4>Photography</h4>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <div class="category-icon-title text-center">
                            <div class="category-icon">
                              <i class="text-gradiant flaticon-technology-2"></i>
                            </div>
                            <div class="category-title">
                              <h4>Mobile Application</h4>
                            </div>
                          </div>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                  {/* <!-- /course-categori --> */}
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="side-bar-widget first-widget">
                <h2 class="widget-title text-capitalize">
                  <span>Find A Course </span>&amp; Sign up Today.
                </h2>
                <div class="course-img">
                  <img src="assets/img/teacher/ct-1.jpg" alt="" />
                </div>
                <div class="course-desc">
                  <p>
                    Lorem ipsum dolor sit consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt.
                  </p>
                </div>
                <div class="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                  <Link to="#">
                    VIEW ONLINE COURSES <i class="fas fa-caret-right"></i>
                  </Link>
                </div>
              </div>

              <div class="side-bar-widget">
                <h2 class="widget-title text-capitalize">
                  <span>Related </span>News.
                </h2>
                <div class="latest-news-posts">
                  <div class="latest-news-area">
                    <div class="latest-news-thumbnile relative-position">
                      <img src="assets/img/blog/lb-1.jpg" alt="" />
                      <div class="hover-search">
                        <i class="fas fa-search"></i>
                      </div>
                      <div class="blakish-overlay"></div>
                    </div>
                    <div class="date-meta">
                      <i class="fas fa-calendar-alt"></i> 26 April 2018
                    </div>
                    <h3 class="latest-title bold-font">
                      <Link to="#">
                        Affiliate Marketing A Beginner’s Guide.
                      </Link>
                    </h3>
                  </div>
                  {/* <!-- /post --> */}

                  <div class="latest-news-posts">
                    <div class="latest-news-area">
                      <div class="latest-news-thumbnile relative-position">
                        <img src="assets/img/blog/lb-2.jpg" alt="" />
                        <div class="hover-search">
                          <i class="fas fa-search"></i>
                        </div>
                        <div class="blakish-overlay"></div>
                      </div>
                      <div class="date-meta">
                        <i class="fas fa-calendar-alt"></i> 26 April 2018
                      </div>
                      <h3 class="latest-title bold-font">
                        <Link to="#">No.1 The Best Online Course 2018.</Link>
                      </h3>
                    </div>
                    {/* <!-- /post --> */}
                  </div>

                  <div class="view-all-btn bold-font">
                    <Link to="#">
                      View All News <i class="fas fa-chevron-circle-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div class="side-bar-widget">
                <h2 class="widget-title text-capitalize">
                  <span>Featured</span> Course.
                </h2>
                <div class="featured-course">
                  <div class="best-course-pic-text relative-position">
                    <div class="best-course-pic relative-position">
                      <img src="assets/img/blog/fb-1.jpg" alt="" />
                      <div class="trend-badge-2 text-center text-uppercase">
                        <i class="fas fa-bolt"></i>
                        <span>Trending</span>
                      </div>
                    </div>
                    <div class="best-course-text">
                      <div class="course-title mb20 headline relative-position">
                        <h3>
                          <Link to="#">
                            Fully Responsive Web Design &amp; Development.
                          </Link>
                        </h3>
                      </div>
                      <div class="course-meta">
                        <span class="course-category">
                          <Link to="#">Web Design</Link>
                        </span>
                        <span class="course-author">
                          <Link to="#">250 Students</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of about us content
		============================================= --> */}
    </div>
  );
};

export default About;
