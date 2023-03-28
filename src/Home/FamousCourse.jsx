import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const FamousCourse = () => {
  return (
    <div>
      {/* <!-- Start popular course
		============================================= --> */}
      <section id="popular-course" class="popular-course-section">
        <div class="container">
          <div class="section-title mb20 headline text-left ">
            <span class="subtitle text-uppercase">LEARN NEW SKILLS</span>
            <h2>
              <span>Popular</span> Courses.
            </h2>
          </div>
          <div id="course-slide-item" class="course-slide">
            {/* <!-- /item --> */}
            <OwlCarousel className="owl-theme" loop margin={10} nav>
              <div class="item">
                <div class="course-item-pic-text ">
                  <div class="course-pic relative-position mb25">
                    <img src="assets/img/course/c-1.jpg" alt="" />
                    <div class="course-price text-center gradient-bg">
                      <span>$99.00</span>
                    </div>
                    <div class="course-details-btn">
                      <Link to="#">
                        COURSE DETAIL <i class="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="course-item-text">
                    <div class="course-meta">
                      <span class="course-category bold-font">
                        <Link to="#">Web Design</Link>
                      </span>
                      <span class="course-author bold-font">
                        <Link to="#">John Luis Fernandes</Link>
                      </span>
                      <div class="course-rate ul-li">
                        <ul>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="course-title mt10 headline pb45 relative-position">
                      <h3>
                        <Link to="#">
                          Fully Responsive Web Design & Development.
                        </Link>{" "}
                        <span class="trend-badge text-uppercase bold-font">
                          <i class="fas fa-bolt"></i> TRENDING
                        </span>
                      </h3>
                    </div>
                    <div class="course-viewer ul-li">
                      <ul>
                        <li>
                          <Link to="#">
                            <i class="fas fa-user"></i> 1.220
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i class="fas fa-comment-dots"></i> 1.015
                          </Link>
                        </li>
                        <li>
                          <Link to="#">125k Unrolled</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="course-item-pic-text ">
                  <div class="course-pic relative-position mb25">
                    <img src="assets/img/course/c-2.jpg" alt="" />
                    <div class="course-price text-center gradient-bg">
                      <span>$99.00</span>
                    </div>
                    <div class="course-details-btn">
                      <Link to="#">
                        COURSE DETAIL <i class="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="course-item-text">
                    <div class="course-meta">
                      <span class="course-category bold-font">
                        <Link to="#">Mobile Apps</Link>
                      </span>
                      <span class="course-author bold-font">
                        <Link to="#">Fernando Torres</Link>
                      </span>
                      <div class="course-rate ul-li">
                        <ul>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="course-title mt10 headline pb45 relative-position">
                      <h3>
                        <Link to="#">
                          Introduction to Mobile Application Development.
                        </Link>
                      </h3>
                    </div>
                    <div class="course-viewer ul-li">
                      <ul>
                        <li>
                          <Link to="#">
                            <i class="fas fa-user"></i> 1.220
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i class="fas fa-comment-dots"></i> 1.015
                          </Link>
                        </li>
                        <li>
                          <Link to="#">125k Unrolled</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="course-item-pic-text ">
                  <div class="course-pic relative-position mb25">
                    <img src="assets/img/course/c-3.jpg" alt="" />
                    <div class="course-price text-center gradient-bg">
                      <span>$99.00</span>
                    </div>
                    <div class="course-details-btn">
                      <Link to="#">
                        COURSE DETAIL <i class="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div class="course-item-text">
                    <div class="course-meta">
                      <span class="course-category bold-font">
                        <Link to="#">Motion Graphic </Link>
                      </span>
                      <span class="course-author bold-font">
                        <Link to="#">enny Garcias</Link>
                      </span>
                      <div class="course-rate ul-li">
                        <ul>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="course-title mt10 headline pb45 relative-position">
                      <h3>
                        <Link to="#">
                          Learning IOS Apps Programming & Development.
                        </Link>
                      </h3>
                    </div>
                    <div class="course-viewer ul-li">
                      <ul>
                        <li>
                          <Link to="#">
                            <i class="fas fa-user"></i> 1.220
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i class="fas fa-comment-dots"></i> 1.015
                          </Link>
                        </li>
                        <li>
                          <Link to="#">125k Unrolled</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      {/* <!-- End popular course
		============================================= --> */}

      {/* <!-- Start of about us section
		============================================= --> */}
      <section id="about-us" class="about-us-section">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="about-resigter-form backgroud-style relative-position">
                <div class="register-content">
                  <div class="register-fomr-title text-center">
                    <h3 class="bold-font">
                      <span>Get a</span> Free Registration.
                    </h3>
                    <p>More Than 122K Online Available Courses</p>
                  </div>
                  <div class="register-form-area">
                    <form
                      class="contact_form"
                      action="#"
                      method="POST"
                      enctype="multipart/form-data"
                    >
                      <div class="contact-info">
                        <input
                          class="name"
                          name="name"
                          type="text"
                          placeholder="Your Name."
                        />
                      </div>
                      <div class="contact-info">
                        <input
                          class="nbm"
                          name="nbm"
                          type="number"
                          placeholder="Your Number"
                        />
                      </div>
                      <div class="contact-info">
                        <input
                          class="email"
                          name="email"
                          type="email"
                          placeholder="Email Address."
                        />
                      </div>
                      <select>
                        <option value="9" selected="">
                          Select Course.
                        </option>
                        <option value="10">Web Design</option>
                        <option value="11">Web Development</option>
                        <option value="12">Php Core</option>
                      </select>
                      <div class="contact-info">
                        <input
                          type="text"
                          id="datepicker"
                          placeholder="Date."
                        />
                      </div>
                      <textarea placeholder="Message."></textarea>
                      <div class="nws-button text-uppercase text-center white text-capitalize">
                        <button type="submit" value="Submit">
                          SUBMIT REQUEST{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="bg-mockup">
                <img src="assets/img/about/phone.png" alt="" />
              </div>
            </div>
            {/* <!-- /form --> */}

            <div class="col-md-7">
              <div class="about-us-text">
                <div class="section-title relative-position mb20 headline text-left ">
                  <span class="subtitle ml42 text-uppercase">
                    SORT ABOUT US
                  </span>
                  <h2>
                    We are <span>Learning Platform</span>
                    work since 1980.
                  </h2>
                  <p>
                    We take our mission of increasing global access to quality
                    education seriously. We connect learners to the best
                    universities and institutions from around the world.
                  </p>
                </div>
                <div class="about-content-text">
                  <p class="">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam volutpat. Ut wisi enim ad minim veniam. magna
                    aliquam volutpat. Ut wisi enim ad minim veniam.
                  </p>
                  <div class="about-list mb65 ul-li-block ">
                    <ul>
                      <li>Professional And Experienced Since 1980</li>
                      <li>
                        We Connect Learners To The Best Universities From Around
                        The World
                      </li>
                      <li>
                        Our Mission Increasing Global Access To Quality
                        Aducation
                      </li>
                      <li>100K Online Available Courses</li>
                    </ul>
                  </div>
                  <div class="about-btn ">
                    <div class="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                      <Link to="/about">
                        About Us <i class="fas fa-caret-right"></i>
                      </Link>
                    </div>
                    <div class="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                      <Link to="/contact">
                        contact us <i class="fas fa-caret-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of about us section
		============================================= --> */}
    </div>
  );
};

export default FamousCourse;
