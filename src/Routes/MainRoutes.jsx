import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import About from "../Component/About";
import ArrayObject from "../Component/ArrayObject";
import Contact from "../Component/Contact";
import Course from "../Component/Course";
import CourseDetails from "../Component/CourseDetails";
import DataStructure from "../Component/Dsa/DataStructure";
import Search from "../Component/Dsa/Search";
import Sort from "../Component/Dsa/Sort";
import Home from "../Component/Home";
import Java from "../Component/Language/Java";
import JavaScript from "../Component/Language/JavaScript";
import Python from "../Component/Language/Python";

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
          <Route exact path={"/sort"} element={<Sort />} />
          <Route exact path={"/search"} element={<Search />} />
          <Route exact path={"/java"} element={<Java />} />
          <Route exact path={"/python"} element={<Python />} />
          <Route exact path={"/js"} element={<JavaScript />} />
          <Route exact path={"/dsa"} element={<DataStructure />} />

          



        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default MainRoutes;
