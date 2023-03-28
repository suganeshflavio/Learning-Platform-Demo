import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import About from "../Component/About";
import ArrayObject from "../Component/ArrayObject";
import Contact from "../Component/Contact";
import Course from "../Component/Course";
import CourseDetails from "../Component/CourseDetails";
import Home from "../Component/Home";

const MainRoutes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/about"} element={<About />} />
          <Route exact path={"/contact"} element={<Contact />} />
          <Route exact path={"/course"} element={<Course />} />
          <Route exact path={"/coursedetails"} element={<CourseDetails />} />
          <Route exact path={"/api"} element={<ArrayObject />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default MainRoutes;
