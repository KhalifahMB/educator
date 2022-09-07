/* eslint-disable no-unused-vars */

// former codes
import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const styles = {
    display: "flex",
  };
  useEffect(() => {
    console.log(screenWidth);
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenWidth]);

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/">
          <h4>EL-KUFAHN </h4>
        </Link>

        {(toggleMenu || screenWidth > 500) && (
          <ul
            style={styles}
            className={`nav_menu ${toggleMenu ? "expand" : "nav_menu"}`}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contacts">Contact</Link>
            </li>
          </ul>
        )}
        <button id="open-menu-btn" onClick={toggleNav}>
          <i className={toggleMenu ? "bi bi-asterisk" : "bi bi-list"}></i>
        </button>
        {/* <button id="close-menu-btn">
            <i className="bi bi-plus"></i>
          </button> */}
      </div>

      <Outlet />
    </nav>
  );
};

export default Navbar;
