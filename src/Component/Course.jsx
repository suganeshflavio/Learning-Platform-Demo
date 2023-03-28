import React from "react";
import { Link } from "react-router-dom";

const Course = () => {

  const courseSyllabus = [
    {
      topic: "Introduction of JavaScript",
      images: "https://jthemes.net/themes/html/genius-course/assets/img/course/bc-6.jpg",
      price: 999,
      duration: "60 Days",
      keyword: "Web Design",
      students: 250
    },
    {
      topic: "Advnaced Python Topics",
      images: "https://jthemes.net/themes/html/genius-course/assets/img/course/bc-1.jpg",
      price: 899,
      duration: "90 Days",
      keyword: "Algorithms",
      students: 350
      
    },
    {
      topic: "Core Topics of Java",
      images: "https://jthemes.net/themes/html/genius-course/assets/img/course/bc-7.jpg",
      price: 899,
      duration: "90 Days",
      keyword: "Oops",
      students: 200

    },
    {
      topic: "Basics of C and C++",
      images: "https://jthemes.net/themes/html/genius-course/assets/img/course/bc-2.jpg",
      price: 599,
      duration: "45 Days",
      keyword: "Dev Environment",
      students: 50

    }
  ];

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
              Learning Platform <span>Courses</span>
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
                      {courseSyllabus.map(x => (
                        <div class="col-md-4">
                          <div class="best-course-pic-text relative-position">
                            <div class="best-course-pic relative-position">
                              <img src={x.images} alt="" />
                              <div class="trend-badge-2 text-center text-uppercase">
                                <i class="fas fa-bolt"></i>
                                <span>Trending</span>
                              </div>
                              <div class="course-price text-center gradient-bg">
                                <span>₹{x.price}</span>
                              </div>
                              
                              <div class="course-details-btn">
                                <Link to="/python">
                                  COURSE DETAIL{" "}
                                  <i class="fas fa-arrow-right"></i>
                                </Link>
                              </div>
                              <div class="blakish-overlay"></div>
                            </div>
                            <div class="best-course-text">
                              <div class="course-title mb20 headline relative-position">
                                <h3>
                                  <Link to="/c&c++">
                                   {x.topic}
                                  </Link>
                                </h3>
                              </div>
                              <div class="course-meta">
                                <span class="course-category">
                                  <Link to="#">{x.keyword}</Link>
                                </span>
                                <span class="course-author">
                                  <Link to="#">{x.students}</Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        ))}
                        {/* <!-- /course --> */}

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
                          <th>LENGTH</th>
                        </tr>
                        {courseSyllabus.map(x => (
                        <tr>
                          <td>
                            <div class="course-list-img-text">
                              <div class="course-list-img">
                                <img src={x.images} alt="" />
                              </div>
                              <div class="course-list-text">
                                <h3>
                                  <Link to="/js">
                                    {x.topic}
                                  </Link>
                                </h3>
                                <div class="course-meta">
                                  <span class="course-category bold-font">
                                    <Link to="/java">₹{x.price}</Link>
                                  </span>
                                  
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="course-type-list">
                              <span>{x.keyword}</span>
                            </div>
                          </td>
                          <td>{x.duration}</td>
                        </tr>
                       ))}
                      </table>
                    </div>
                  </div>
                </div>
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
