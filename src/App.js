import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="courses" element={<Courses />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
