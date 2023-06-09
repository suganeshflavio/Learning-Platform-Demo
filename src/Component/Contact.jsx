import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
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
              Learning Platform <span>Contact</span>
              </h2>
            </div>
            <div class="page-breadcrumb-item ul-li">
              <ul class="breadcrumb text-uppercase black">
                <li class="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of breadcrumb section
		============================================= --> */}

      {/* <!-- Start of contact section
		============================================= --> */}
      <section id="contact-page" class="contact-page-section">
        <div class="container">
          <div class="section-title mb45 headline text-center">
            <span class="subtitle text-uppercase">SEND US A MESSAGE</span>
            <h2>
              Keep<span> In Touch.</span>
            </h2>
          </div>
          <div class="social-contact">
            <div class="category-icon-title text-center">
              <div class="category-icon">
                <i class="text-gradiant fab fa-facebook-f"></i>
              </div>
              <div class="category-title">
                <h4>Facebbok</h4>
              </div>
            </div>
            <div class="category-icon-title text-center">
              <div class="category-icon">
                <i class="text-gradiant fab fa-twitter"></i>
              </div>
              <div class="category-title">
                <h4>Twitter</h4>
              </div>
            </div>
            <div class="category-icon-title text-center">
              <div class="category-icon">
                <i class="text-gradiant fab fa-google-plus-g"></i>
              </div>
              <div class="category-title">
                <h4>Google +</h4>
              </div>
            </div>
            <div class="category-icon-title text-center">
              <div class="category-icon">
                <i class="text-gradiant fab fa-behance"></i>
              </div>
              <div class="category-title">
                <h4>Behance</h4>
              </div>
            </div>
            <div class="category-icon-title text-center">
              <div class="category-icon">
                <i class="text-gradiant fab fa-instagram"></i>
              </div>
              <div class="category-title">
                <h4>Instagram</h4>
              </div>
            </div>
            <div class="category-icon-title text-center">
              <div class="category-icon">
                <i class="text-gradiant fab fa-dribbble"></i>
              </div>
              <div class="category-title">
                <h4>Dribble</h4>
              </div>
            </div>
            <div class="category-icon-title text-center">
              <div class="category-icon">
                <i class="text-gradiant fab fa-deviantart"></i>
              </div>
              <div class="category-title">
                <h4>Devianart</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End of contact section
		============================================= --> */}

      {/* <!-- Start of contact area form
		============================================= --> */}
      <section
        id="contact-form"
        class="contact-form-area_3 contact-page-version"
      >
        <div class="container">
          <div class="section-title mb45 headline text-center">
            <span class="subtitle text-uppercase">Send us a message</span>
            <h2>
              Send Us A<span> Message.</span>
            </h2>
          </div>

          <div class="contact_third_form">
            <form class="contact_form" enctype="multipart/form-data">
              <div class="row">
                <div class="col-md-4">
                  <div class="contact-info">
                    <input
                      class="name"
                      name="name"
                      type="text"
                      placeholder="Your Name."
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="contact-info">
                    <input
                      class="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="contact-info">
                    <input
                      class="number"
                      name="number"
                      type="number"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
              <textarea placeholder="Message."></textarea>
              <div class="nws-button text-center  gradient-bg text-uppercase">
                <button type="submit" value="Submit">
                  SEND EMAIL <i class="fas fa-caret-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- End of contact area form
		============================================= --> */}
    </div>
  );
};

export default Contact;
