/* eslint-disable jsx-a11y/anchor-is-valid */
import { Outlet, Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_1">
          <a href="index.html" className="footer_logo">
            <h4>EL-KUFAHN</h4>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nulla rem quidem.
          </p>
        </div>

        <div className="footer_2">
          <h4>Permalinks</h4>
          <ul className="permalinks">
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
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>

        <div className="footer_3">
          <h4>Privacy</h4>
          <ul className="privacy">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Condition</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer_4">
          <h4>Contact Us</h4>
          <p>08025378442</p>
          <p>muhammadelkufahn27@gmail.com</p>

          <ul className="footer_socials">
            <li>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <small>Copy &copy; El-kufahn's Website</small>
      </div>
      <Outlet />
    </footer>
  );
};

export default Footer;
