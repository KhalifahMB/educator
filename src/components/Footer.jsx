/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <footer class="footer">
      <div class="container footer_container">
        <div class="footer_1">
          <a href="index.html" class="footer_logo">
            <h4>EL-KUFAHN</h4>
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            nulla rem quidem.
          </p>
        </div>

        <div class="footer_2">
          <h4>Permalinks</h4>
          <ul class="permalinks">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="courses.html">Courses</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>

        <div class="footer_3">
          <h4>Privacy</h4>
          <ul class="privacy">
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

        <div class="footer_4">
          <h4>Contact Us</h4>
          <p>08025378442</p>
          <p>muhammadelkufahn27@gmail.com</p>

          <ul class="footer_socials">
            <li>
              <a href="#">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer_copyright">
          <small>Copy &copy; El-kufahn's Website</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
