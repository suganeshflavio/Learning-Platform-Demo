import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
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
                Genius <span>Courses</span>
              </h2>
            </div>
            <div class="page-breadcrumb-item ul-li">
              <ul class="breadcrumb text-uppercase black">
                <li class="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active">Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of breadcrumb section
		============================================= --> */}

      {/* <!-- Start of course section
		============================================= --> */}
      <section id="course-page" class="course-page-section">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="genius-post-item">
                <div class="tab-container">
                  <div id="tab1" class="tab-content-1 pt35">
                    <div class="best-course-area best-course-v2">
                      <div class="row">
                        <div class="col-md-4">
                          <div class="best-course-pic-text relative-position">
                            <div class="best-course-pic relative-position">
                              <img src="assets/img/course/bc-1.jpg" alt="" />
                              <div class="trend-badge-2 text-center text-uppercase">
                                <i class="fas fa-bolt"></i>
                                <span>Trending</span>
                              </div>
                              <div class="course-price text-center gradient-bg">
                                <span>$99.00</span>
                              </div>
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
                              <div class="course-details-btn">
                                <Link to="/coursedetails">
                                  COURSE DETAIL{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              <div class="blakish-overlay"></div>
                            </div>
                            <div class="best-course-text">
                              <div class="course-title mb20 headline relative-position">
                                <h3>
                                  <Link to="/coursedetails">
                                    Fully Responsive Web Design &amp;
                                    Development.
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
                        {/* <!-- /course --> */}

                        <div class="col-md-4">
                          <div class="best-course-pic-text relative-position">
                            <div class="best-course-pic relative-position">
                              <img src="assets/img/course/bc-2.jpg" alt="" />
                              <div class="course-price text-center gradient-bg">
                                <span>$99.00</span>
                              </div>
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
                                  </li>{" "}
                                </ul>
                              </div>
                              <div class="course-details-btn">
                                <Link to="/coursedetails">
                                  COURSE DETAIL{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              <div class="blakish-overlay"></div>
                            </div>
                            <div class="best-course-text">
                              <div class="course-title mb20 headline relative-position">
                                <h3>
                                  <Link to="/coursedetails">
                                    Fully Responsive Web Design &amp;
                                    Development.
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
                        {/* <!-- /course --> */}

                        <div class="col-md-4">
                          <div class="best-course-pic-text relative-position">
                            <div class="best-course-pic relative-position">
                              <img src="assets/img/course/bc-3.jpg" alt="" />
                              <div class="course-price text-center gradient-bg">
                                <span>$99.00</span>
                              </div>
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
                              <div class="course-details-btn">
                                <Link to="/coursedetails">
                                  COURSE DETAIL{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              <div class="blakish-overlay"></div>
                            </div>
                            <div class="best-course-text">
                              <div class="course-title mb20 headline relative-position">
                                <h3>
                                  <Link to="/coursedetails">
                                    Fully Responsive Web Design &amp;
                                    Development.
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
                        {/* <!-- /course --> */}

                        <div class="col-md-4">
                          <div class="best-course-pic-text relative-position">
                            <div class="best-course-pic relative-position">
                              <img src="assets/img/course/bc-4.jpg" alt="" />
                              <div class="course-price text-center gradient-bg">
                                <span>$99.00</span>
                              </div>
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
                              <div class="course-details-btn">
                                <Link to="/coursedetails">
                                  COURSE DETAIL{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              to <div class="blakish-overlay"></div>
                            </div>
                            <div class="best-course-text">
                              <div class="course-title mb20 headline relative-position">
                                <h3>
                                  <Link to="/coursedetails">
                                    Fully Responsive Web Design &amp;
                                    Development.
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
                        {/* <!-- /course --> */}

                        <div class="col-md-4">
                          <div class="best-course-pic-text relative-position">
                            <div class="best-course-pic relative-position">
                              <img src="assets/img/course/bc-5.jpg" alt="" />
                              <div class="course-price text-center gradient-bg">
                                <span>$99.00</span>
                              </div>
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
                              <div class="course-details-btn">
                                <Link to="/coursedetails">
                                  COURSE DETAIL{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              <div class="blakish-overlay"></div>
                            </div>
                            <div class="best-course-text">
                              <div class="course-title mb20 headline relative-position">
                                <h3>
                                  <Link to="/coursedetails">
                                    Fully Responsive Web Design &amp;
                                    Development.
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
                        {/* <!-- /course --> */}

                        <div class="col-md-4">
                          <div class="best-course-pic-text relative-position">
                            <div class="best-course-pic relative-position">
                              <img src="assets/img/course/bc-6.jpg" alt="" />
                              <div class="trend-badge-2 text-center text-uppercase">
                                <i class="fas fa-bolt"></i>
                                <span>Trending</span>
                              </div>
                              <div class="course-price text-center gradient-bg">
                                <span>$99.00</span>
                              </div>
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
                              <div class="course-details-btn">
                                <Link to="/coursedetails">
                                  COURSE DETAIL{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              <div class="blakish-overlay"></div>
                            </div>
                            <div class="best-course-text">
                              <div class="course-title mb20 headline relative-position">
                                <h3>
                                  <Link to="/coursedetails">
                                    Fully Responsive Web Design &amp;
                                    Development.
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
                        {/* <!-- /course --> */}

                        <div class="col-md-4">
                          <div class="best-course-pic-text relative-position">
                            <div class="best-course-pic relative-position">
                              <img src="assets/img/course/bc-7.jpg" alt="" />
                              <div class="course-price text-center gradient-bg">
                                <span>$99.00</span>
                              </div>
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
                              <div class="course-details-btn">
                                <Link to="/coursedetails">
                                  COURSE DETAIL{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              <div class="blakish-overlay"></div>
                            </div>
                            <div class="best-course-text">
                              <div class="course-title mb20 headline relative-position">
                                <h3>
                                  <Link to="/coursedetails">
                                    Fully Responsive Web Design &amp;
                                    Development.
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
                        {/* <!-- /course --> */}

                        <div class="col-md-4">
                          <div class="best-course-pic-text relative-position">
                            <div class="best-course-pic relative-position">
                              <img src="assets/img/course/bc-8.jpg" alt="" />
                              <div class="course-price text-center gradient-bg">
                                <span>$99.00</span>
                              </div>
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
                              <div class="course-details-btn">
                                <Link to="/coursedetails">
                                  COURSE DETAIL{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              <div class="blakish-overlay"></div>
                            </div>
                            <div class="best-course-text">
                              <div class="course-title mb20 headline relative-position">
                                <h3>
                                  <Link to="/coursedetails">
                                    Fully Responsive Web Design &amp;
                                    Development.
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
                        {/* <!-- /course --> */}

                        <div class="col-md-4">
                          <div class="best-course-pic-text relative-position">
                            <div class="best-course-pic relative-position">
                              <img src="assets/img/course/bc-4.jpg" alt="" />
                              <div class="course-price text-center gradient-bg">
                                <span>$99.00</span>
                              </div>
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
                              <div class="course-details-btn">
                                <Link to="/coursedetails">
                                  COURSE DETAIL{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              <div class="blakish-overlay"></div>
                            </div>
                            <div class="best-course-text">
                              <div class="course-title mb20 headline relative-position">
                                <h3>
                                  <Link to="/coursedetails">
                                    Fully Responsive Web Design &amp;
                                    Development.
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
                        {/* <!-- /course --> */}
                      </div>
                    </div>
                  </div>

                  <div id="tab2" class="tab-content-1">
                    <div class="course-list-view">
                      <table>
                        <tr class="list-head">
                          <th>COURSE NAME</th>
                          <th>COURSE TYPE</th>
                          <th>STARTS</th>
                          <th>LENGTH</th>
                        </tr>
                        <tr>
                          <td>
                            <div class="course-list-img-text">
                              <div class="course-list-img">
                                <img src="assets/img/course/cl-1.jpg" alt="" />
                              </div>
                              <div class="course-list-text">
                                <h3>
                                  <Link to="#">
                                    Fully Responsive Web Design & Development.
                                  </Link>
                                </h3>
                                <div class="course-meta">
                                  <span class="course-category bold-font">
                                    <Link to="#">$120.25</Link>
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
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="course-type-list">
                              <span>Graphic Design & 3D</span>
                            </div>
                          </td>
                          <td>6-06-2018</td>
                          <td>3 Months</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="course-list-img-text">
                              <div class="course-list-img">
                                <img src="assets/img/course/cl-2.jpg" alt="" />
                              </div>
                              <div class="course-list-text">
                                <h3>
                                  <Link to="#">
                                    Fully Responsive Web Design & Development.
                                  </Link>
                                </h3>
                                <div class="course-meta">
                                  <span class="course-category bold-font">
                                    <Link to="#">$120.25</Link>
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
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="course-type-list">
                              <span>Graphic Design & 3D</span>
                            </div>
                          </td>
                          <td>6-06-2018</td>
                          <td>3 Months</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="course-list-img-text">
                              <div class="course-list-img">
                                <img src="assets/img/course/cl-3.jpg" alt="" />
                              </div>
                              <div class="course-list-text">
                                <h3>
                                  <Link to="#">
                                    Fully Responsive Web Design & Development.
                                  </Link>
                                </h3>
                                <div class="course-meta">
                                  <span class="course-category bold-font">
                                    <Link to="#">$120.25</Link>
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
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="course-type-list">
                              <span>Graphic Design & 3D</span>
                            </div>
                          </td>
                          <td>6-06-2018</td>
                          <td>3 Months</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="course-list-img-text">
                              <div class="course-list-img">
                                <img src="assets/img/course/cl-4.jpg" alt="" />
                              </div>
                              <div class="course-list-text">
                                <h3>
                                  <Link to="#">
                                    Fully Responsive Web Design & Development.
                                  </Link>
                                </h3>
                                <div class="course-meta">
                                  <span class="course-category bold-font">
                                    <Link to="#">$120.25</Link>
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
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="course-type-list">
                              <span>Graphic Design & 3D</span>
                            </div>
                          </td>
                          <td>6-06-2018</td>
                          <td>3 Months</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="course-list-img-text">
                              <div class="course-list-img">
                                <img src="assets/img/course/cl-5.jpg" alt="" />
                              </div>
                              <div class="course-list-text">
                                <h3>
                                  <Link to="#">
                                    Fully Responsive Web Design & Development.
                                  </Link>
                                </h3>
                                <div class="course-meta">
                                  <span class="course-category bold-font">
                                    <Link to="#">$120.25</Link>
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
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="course-type-list">
                              <span>Graphic Design & 3D</span>
                            </div>
                          </td>
                          <td>6-06-2018</td>
                          <td>3 Months</td>
                        </tr>
                        <tr>
                          <td>
                            <div class="course-list-img-text">
                              <div class="course-list-img">
                                <img src="assets/img/course/cl-1.jpg" alt="" />
                              </div>
                              <div class="course-list-text">
                                <h3>
                                  <Link to="/coursedetails">
                                    Fully Responsive Web Design & Development.
                                  </Link>
                                </h3>
                                <div class="course-meta">
                                  <span class="course-category bold-font">
                                    <Link to="#">$120.25</Link>
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
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="course-type-list">
                              <span>Graphic Design & 3D</span>
                            </div>
                          </td>
                          <td>6-06-2018</td>
                          <td>3 Months</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="couse-pagination text-center ul-li">
                <ul>
                  <li class="pg-text">
                    <Link to="#">PREV</Link>
                  </li>
                  <li>
                    <Link to="#">01</Link>
                  </li>
                  <li>
                    <Link to="#">02</Link>
                  </li>
                  <li class="active">
                    <Link to="#">03</Link>
                  </li>
                  <li>
                    <Link to="#">04</Link>
                  </li>
                  <li>
                    <Link to="#">...</Link>
                  </li>
                  <li>
                    <Link to="#">15</Link>
                  </li>
                  <li class="pg-text">
                    <Link to="#">NEXT</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="side-bar">
                <div class="side-bar-widget  first-widget">
                  <h2 class="widget-title text-capitalize">
                    <span>Find </span>Your Course.
                  </h2>
                  <div class="listing-filter-form pb30">
                    <form action="#" method="get">
                      <div class="filter-select mb20">
                        <label>COURSE TYPE</label>
                        <select>
                          <option value="9" selected="">
                            All Categories{" "}
                          </option>
                          <option value="10">Default Listing</option>
                          <option value="11">Category Listing</option>
                          <option value="12">Orderly Listing</option>
                        </select>
                      </div>

                      <div class="filter-select mb20">
                        <label>STUDY LAVEL</label>
                        <select>
                          <option value="9" selected="">
                            All Locations
                          </option>
                          <option value="10">Default Listing</option>
                          <option value="11">Category Listing</option>
                          <option value="12">Orderly Listing</option>
                        </select>
                      </div>
                      <div class="filter-search mb20">
                        <label>FULL TEXT</label>
                        <input
                          type="text"
                          class=""
                          placeholder="Looking for?"
                        />
                      </div>
                      <div class="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                        <Link to="#">
                          FIND COURSES <i class="fas fa-caret-right"></i>
                        </Link>
                      </div>
                    </form>
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
        </div>
      </section>
      {/* <!-- End of course section
		============================================= --> */}
    </div>
  );
};

export default Course;
