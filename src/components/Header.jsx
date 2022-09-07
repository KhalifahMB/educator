import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_left">
          <h1> Grow your skills to advance your career</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            dolor nisi perspiciatis provident quis omnis laudantium aliquam
            explicabo quam? Doloremque.
          </p>
          <Link to="courses" className="btn btn-primary">
            Get Started
          </Link>
        </div>
        <div className="header_right">
          <div className="header_right-image">
            <img src="./images/header.svg" alt="" />
          </div>
        </div>
      </div>
      <Outlet />
    </header>
  );
};

export default Header;
