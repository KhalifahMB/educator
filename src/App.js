import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import About from "./routes/about";
import Courses from "./routes/courses";
import Contacts from "./routes/contacts";
import CoursesData from "./datas/courseData";
import CategoriesData from "./datas/categoriesData";
function App() {
  //  for courses
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    setCourses(CoursesData);
  }, []);

  //

  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    setCategories(CategoriesData);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Main category={categories} />}></Route>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses courses={courses} />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
