/* eslint-disable jsx-a11y/anchor-is-valid */
const Contacts = () => {
  return (
    <section class="contact">
      <div class="container contact_container">
        <aside class="contact_aside">
          <div class="aside_image">
            <img src="./images/contact.svg" alt="" />
          </div>
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            inventore sed expedita delectus ducimus similique!
          </p>
          <ul class="contact_details">
            <li>
              {" "}
              <i class="fa-solid fa-user"></i>
              <h5>+2348025378443</h5>
            </li>
            <li>
              <i class="fa fa-envelope"></i>
              <h5>muhammadelkufahn27@gmail.com</h5>
            </li>
            <li>
              <i class="fa fa-location"></i>
              <h5>Abuja, Nigeria</h5>
            </li>
          </ul>

          <ul class="contact_socials">
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
        </aside>

        <form
          action="https://formspree.io/f/xknyvzwa"
          method="POST"
          class="contact_form"
        >
          <div class="form_name">
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
          <button type="submit" class="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
