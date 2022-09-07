import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseArticle from "../components/articles/CourseArticle";

const Courses = (props) => {
  const courseElements = props.courses.map((course) => {
    return (
      <CourseArticle
        key={course.id}
        src={course.src}
        title={course.title}
        text={course.text}
      />
    );
  });
  // console.log(courses);
  return (
    <>
      <Navbar />
      <section className="courses">
        <div className="container courses_container">{courseElements}</div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;
