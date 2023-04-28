/* eslint-disable no-unused-vars */

import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
const Navbar = () => {
  const menuRef = useRef();
  const menuBtnRef = useRef();
  const closeBtnRef = useRef();

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    menuRef.current.style.display = "flex";
    closeBtnRef.current.style.display = "inline-block";
    menuBtnRef.current.style.display = "none";
  };
  const closeNav = () => {
    menuRef.current.style.display = "none";
    closeBtnRef.current.style.display = "none";
    menuBtnRef.current.style.display = "inline-block";
  };

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/">
          <h4>EL-KUFAHN </h4>
        </Link>

        <ul
          className={`nav_menu ${toggleMenu ? "expand" : "nav_menu"}`}
          ref={menuRef}
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

        <button id="open-menu-btn" onClick={toggleNav} ref={menuBtnRef}>
          <i className="bi bi-list"></i>
          {/* <i className={toggleMenu ? "bi bi-asterisk" : "bi bi-list"}></i> */}
        </button>
        <button id="close-menu-btn" onClick={closeNav} ref={closeBtnRef}>
          <i className="bi bi-asterisk"></i>
        </button>
      </div>

      <Outlet />
    </nav>
  );
};

export default Navbar;
//  const [toggleMenu, setToggleMenu] = useState(false);
//  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//  const toggleNav = () => {
//    setToggleMenu(!toggleMenu);
//  };
//  const styles = {
//    display: "flex",
//  };
//  useEffect(() => {
//    console.log(screenWidth);
//    const changeWidth = () => {
//      setScreenWidth(window.innerWidth);
//    };

//    window.addEventListener("resize", changeWidth);

//    return () => {
//      window.removeEventListener("resize", changeWidth);
//    };
//  }, [screenWidth]);

//  return (
//    <nav>
//      <div className="container nav_container">
//        <Link to="/">
//          <h4>EL-KUFAHN </h4>
//        </Link>

//        {toggleMenu && screenWidth > 500 && (
//          <ul
//            style={styles}
//            className={`nav_menu ${toggleMenu ? "expand" : "nav_menu"}`}
//          >
//            <li>
//              <Link to="/">Home</Link>
//            </li>
//            <li>
//              <Link to="/about">About</Link>
//            </li>
//            <li>
//              <Link to="/courses">Courses</Link>
//            </li>
//            <li>
//              <Link to="/contacts">Contact</Link>
//            </li>
//          </ul>
//        )}
//        <button id="open-menu-btn" onClick={toggleNav}>
//          <i className={toggleMenu ? "bi bi-asterisk" : "bi bi-list"}></i>
//        </button>
//        {/* <button id="close-menu-btn">
//             <i className="bi bi-plus"></i>
//           </button> */}
//      </div>

//      <Outlet />
//    </nav>
//  );
