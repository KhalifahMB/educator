/* eslint-disable jsx-a11y/anchor-is-valid */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="container contact_container">
          <aside className="contact_aside">
            <div className="aside_image">
              <img src="./images/contact.svg" alt="" />
            </div>
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              inventore sed expedita delectus ducimus similique!
            </p>
            <ul className="contact_details">
              <li>
                {" "}
                <i className="fa-solid fa-user"></i>
                <h5>+2348025378443</h5>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <h5>muhammadelkufahn27@gmail.com</h5>
              </li>
              <li>
                <i className="fa fa-location"></i>
                <h5>Abuja, Nigeria</h5>
              </li>
            </ul>

            <ul className="contact_socials">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </aside>

          <form
            action="https://formspree.io/f/xknyvzwa"
            method="POST"
            className="contact_form"
          >
            <div className="form_name">
              <input
                type="text"
                name="First Name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              type="email"
              name="Email Address"
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="Message"
              rows="7"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contacts;
