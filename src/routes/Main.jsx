import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Courses from "../components/PopularCourses";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Main = (props) => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    setCategories(props.category);
  }, [props.category]);

  return (
    <>
      <Navbar />
      <Header />
      <Categories category={categories} />
      <Courses />
      <Faqs />
      <Testimonials />
      <Footer />
      <Outlet />
    </>
  );
};

export default Main;
