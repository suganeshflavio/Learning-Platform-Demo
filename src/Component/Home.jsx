import React from "react";
import Carousel from "../Home/Carousel";
import FamousCourse from "../Home/FamousCourse";
import { Testimonial } from "../Home/Testimonial";

const Home = () => {
  return (
    <div>
      {/* <!-- Start of slider section
		============================================= --> */}
      <Carousel />
      {/* <!-- End of slider section
		============================================= --> */}

      {/* Start Famous Course */}
      <FamousCourse />
      {/* End Famous courese */}

      {/* start Testimonial */}
      <Testimonial />
      {/* end Testimonial */}
    </div>
  );
};

export default Home;
