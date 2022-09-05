/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Link } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contacts from "../pages/Contacts";
const Navbar = () => {
  return (
    <nav>
      <div class="container nav_container">
        <a href="index.html">
          <h4>EL-KUFAHN </h4>
        </a>
        <ul class="nav_menu">
          <li>
            <Link to={Main}>Home</Link>
          </li>
          <li>
            <Link to={About}>About</Link>
          </li>
          <li>
            <Link to={Courses}>Courses</Link>
          </li>
          <li>
            <Link to={Contacts}>Contact</Link>
          </li>
        </ul>

        <button id="open-menu-btn">
          <i class="fas fa-bars"></i>{" "}
        </button>
        <button id="close-menu-btn">
          <i class="fas fa-multiply"></i>{" "}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
