import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [navExpand, setNavExpand] = useState(true);

  const styles = {
    display: navExpand ? "none" : "flex",
  };

  function handleClick() {
    console.log("navclick", navExpand);
    setNavExpand((prev) => {
      return !navExpand;
    });
  }

  return (
    <nav>
      {
        <div className="container nav_container">
          <Link to="main">
            <h4>EL-KUFAHN </h4>
          </Link>

          <ul className={`nav_menu`} style={styles}>
            <li>
              <Link to="/main">Home</Link>
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

          <button id="open-menu-btn" onClick={handleClick}>
            <i className={navExpand ? "bi bi-list" : "bi bi-asterisk"}></i>
          </button>
          {/* <button id="close-menu-btn">
            <i className="bi bi-plus"></i>
          </button> */}
        </div>
      }
      <Outlet />
    </nav>
  );
};

export default Navbar;
