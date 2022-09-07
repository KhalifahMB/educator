import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import About from "./routes/about";
import Courses from "./routes/courses";
import Contacts from "./routes/contacts";
import CoursesData from "./datas/courseData";
import CategoriesData from "./datas/categoriesData";
import TestimonialsData from "./datas/TestimonialsData";
function App() {
  //  for courses
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    setCourses(CoursesData);
  }, []);

  //  for categories
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    setCategories(CategoriesData);
  }, []);

  // for testimonials
  const [testimonials, setTestimonials] = React.useState([]);
  React.useEffect(() => {
    setTestimonials(TestimonialsData);
  }, []);
  // console.log("categories app", categories);
  // console.log("testestimonials app", testimonials);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<Err />} /> */}
        <Route
          path="/"
          element={<Main category={categories} testimonial={testimonials} />}
        />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses courses={courses} />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
