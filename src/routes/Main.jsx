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
  //  categories
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    setCategories(props.category);
  }, [props.category]);

  // testimonials
  const [testimonials, setTestimonials] = React.useState([]);
  React.useEffect(() => {
    setTestimonials(props.testimonial);
  }, [props.testimonial]);

  return (
    <>
      <Navbar />
      <Header />
      <Categories category={categories} />
      <Courses />
      <Faqs />
      <Testimonials testimonial={testimonials} />
      <Footer />
      <Outlet />
    </>
  );
};

export default Main;
