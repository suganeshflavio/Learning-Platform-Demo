import React from "react";

const Carousel = () => {
  return (
    <div>
      {/* <!-- Start of slider section
		============================================= --> */}
      <section id="slide" class="slider-section">
        <div id="slider-item" class="slider-item-details">
          <div class="slider-area slider-bg-2 relative-position">
            <div class="slider-text">
              <div class="section-title mb20 headline text-center ">
                <div class="layer-1-1">
                  <span class="subtitle text-uppercase">
                    EDUCATION & TRAINING ORGANIZATION
                  </span>
                </div>
                <div class="layer-1-2">
                  <h2 class="secoud-title">
                    {" "}
                    Browse The <span>Best Courses.</span>
                  </h2>
                </div>
              </div>
              <div class="layer-1-3">
                <div class="layer-1-4">
                  <div class="slider-course-category ul-li text-center">
                    <span class="float-left" style={{color:"#46D0D0"}}>BY CATEGORY:</span>
                    <ul>
                      <li>JavaScript</li>
                      <li>Java</li>
                      <li>Python</li>
                      <li>C & C++</li>
                      <li>Sorting Algorithm</li>
                      <li>Search Algorithm</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of slider section
		============================================= --> */}

      {/* <!-- Start of Search Courses
		============================================= --> */}
      <section id="search-course" class="search-course-section">
        <div class="container">
          <div class="search-counter-up">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="counter-icon-number ">
                  <div class="counter-icon">
                    <i class="text-gradiant flaticon-graduation-hat"></i>
                  </div>
                  <div class="counter-number">
                    <span class="counter-count bold-font">5 </span>
                    <span>M+</span>
                    <p>Students Enrolled</p>
                  </div>
                </div>
              </div>
              {/* <!-- /counter --> */}

              <div class="col-md-3 col-sm-6">
                <div class="counter-icon-number ">
                  <div class="counter-icon">
                    <i class="text-gradiant flaticon-book"></i>
                  </div>
                  <div class="counter-number">
                    <span class="counter-count bold-font">122</span>
                    <span>.500+</span>
                    <p>Online Available Courses</p>
                  </div>
                </div>
              </div>
              {/* <!-- /counter --> */}

              <div class="col-md-3 col-sm-6">
                <div class="counter-icon-number ">
                  <div class="counter-icon">
                    <i class="text-gradiant flaticon-favorites-button"></i>
                  </div>
                  <div class="counter-number">
                    <span class="counter-count bold-font">15</span>
                    <span>.000+</span>
                    <p>Premium Quality Products</p>
                  </div>
                </div>
              </div>
              {/* <!-- /counter --> */}

              <div class="col-md-3 col-sm-6">
                <div class="counter-icon-number ">
                  <div class="counter-icon">
                    <i class="text-gradiant flaticon-group"></i>
                  </div>
                  <div class="counter-number">
                    <span class="counter-count bold-font">7</span>
                    <span>.500+</span>
                    <p>Teachers Registered</p>
                  </div>
                </div>
              </div>
              {/* <!-- /counter --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of Search Courses
		============================================= --> */}
    </div>
  );
};

export default Carousel;
