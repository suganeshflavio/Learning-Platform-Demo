import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Testimonial = () => {
  return (
    <div>
      {/* <!-- Start of why choose us section
		============================================= --> */}
      <section id="why-choose-us" class="why-choose-us-section">
        <div class="jarallax  backgroud-style">
          <div class="container">
            <div class="section-title mb20 headline text-center ">
              <span class="subtitle text-uppercase">GENIUS ADVANTAGES</span>
              <h2>
                Reason <span>Why Choose Genius.</span>
              </h2>
            </div>
            <div id="service-slide-item" class="service-slide">
              <OwlCarousel className="owl-theme" loop margin={10} nav>
                <div class="item">
                  <div class="service-text-icon ">
                    <div class="service-icon float-left">
                      <i class="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i>
                    </div>
                    <div class="service-text">
                      <h3 class="bold-font">The Power Of Education.</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectuerer adipiscing elit
                        set diam nonnumynibh euismod tincidun laoreet.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="service-text-icon ">
                    <div class="service-icon float-left">
                      <i class="text-gradiant flaticon-clipboard-with-pencil"></i>
                    </div>
                    <div class="service-text">
                      <h3 class="bold-font">Best Online Education.</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectuerer adipiscing elit
                        set diam nonnumynibh euismod tincidun laoreet.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="service-text-icon ">
                    <div class="service-icon float-left">
                      <i class="text-gradiant flaticon-list"></i>
                    </div>
                    <div class="service-text">
                      <h3 class="bold-font">Education For All Student.</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectuerer adipiscing elit
                        set diam nonnumynibh euismod tincidun laoreet.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
            {/* <!-- /service-slide --> */}
            <div class="testimonial-slide">
              <div class="section-title-2 mb65 headline text-left ">
                <h2>
                  Students <span>Testimonial.</span>
                </h2>
              </div>

              <div id="testimonial-slide-item" class="testimonial-slide-area">
                <OwlCarousel className="owl-theme" loop margin={10} nav>
                  <div class="item">
                    <div class="student-qoute ">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatem odio atque, molestias magni
                        exercitationem similique voluptate soluta inventore
                        necessitatibus explicabo facere esse ab natus commodi
                        debitis quae deleniti maiores cumque?
                      </p>
                      <div class="student-name-designation">
                        <span class="st-name bold-font">Robertho Garcia </span>
                        <span class="st-designation">Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of why choose us section
		============================================= --> */}

      {/* <!-- Start Course category
		============================================= --> */}
      <section id="course-category" class="course-category-section">
        <div class="container">
          <div class="section-title mb45 headline text-center ">
            <span class="subtitle text-uppercase">COURSES CATEGORIES</span>
            <h2>
              Browse Courses<span> By Category.</span>
            </h2>
          </div>
          <div class="category-item">
            <div class="row">
              <div class="col-md-3">
                <div class="category-icon-title text-center ">
                  <div class="category-icon">
                    <i class="text-gradiant flaticon-technology"></i>
                  </div>
                  <div class="category-title">
                    <h4>Responsive Website</h4>
                  </div>
                </div>
              </div>
              {/* <!-- /category --> */}

              <div class="col-md-3">
                <div class="category-icon-title text-center ">
                  <div class="category-icon">
                    <i class="text-gradiant flaticon-app-store"></i>
                  </div>
                  <div class="category-title">
                    <h4>IOS Applications</h4>
                  </div>
                </div>
              </div>
              {/* <!-- /category --> */}

              <div class="col-md-3">
                <div class="category-icon-title text-center ">
                  <div class="category-icon">
                    <i class="text-gradiant flaticon-artist-tools"></i>
                  </div>
                  <div class="category-title">
                    <h4>Graphic Design</h4>
                  </div>
                </div>
              </div>
              {/* <!-- /category --> */}

              <div class="col-md-3">
                <div class="category-icon-title text-center ">
                  <div class="category-icon">
                    <i class="text-gradiant flaticon-business"></i>
                  </div>
                  <div class="category-title">
                    <h4>Marketing</h4>
                  </div>
                </div>
              </div>
              {/* <!-- /category --> */}

              <div class="col-md-3">
                <div class="category-icon-title text-center ">
                  <div class="category-icon">
                    <i class="text-gradiant flaticon-dna"></i>
                  </div>
                  <div class="category-title">
                    <h4>Science</h4>
                  </div>
                </div>
              </div>
              {/* <!-- /category --> */}

              <div class="col-md-3">
                <div class="category-icon-title text-center ">
                  <div class="category-icon">
                    <i class="text-gradiant flaticon-cogwheel"></i>
                  </div>
                  <div class="category-title">
                    <h4>Enginering</h4>
                  </div>
                </div>
              </div>
              {/* <!-- /category --> */}
              <div class="col-md-3">
                <div class="category-icon-title text-center ">
                  <div class="category-icon">
                    <i class="text-gradiant flaticon-technology-1"></i>
                  </div>
                  <div class="category-title">
                    <h4>Photography</h4>
                  </div>
                </div>
              </div>
              {/* <!-- /category --> */}

              <div class="col-md-3">
                <div class="category-icon-title text-center ">
                  <div class="category-icon">
                    <i class="text-gradiant flaticon-technology-2"></i>
                  </div>
                  <div class="category-title">
                    <h4>Mobile Application</h4>
                  </div>
                </div>
              </div>
              {/* <!-- /category --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Course category
		============================================= --> */}
    </div>
  );
};
