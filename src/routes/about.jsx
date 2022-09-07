import React from "react";
import Teams from "../components/Teams";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <section className="about_achievements">
        <div className="container about_acheivements-container">
          <div className="about_acheivement-left">
            <img src="./images/about achievements.svg" alt="" />
          </div>
          <div className="about_acheivement-right">
            <h1>Acheivements</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              ipsam libero voluptatibus beatae dolor ducimus aspernatur,
              recusandae blanditiis ratione odio architecto praesentium ex quis
              maxime minus consectetur nisi vel doloremque?
            </p>
            <div className="about_acheivements_cards">
              <article className="acheivement_card">
                <span className="acheivement_icon">
                  <i className="fas fa-video"></i>
                </span>
                <h3>450+</h3>
                <p>Courses </p>
              </article>

              <article className="acheivement_card">
                <span className="acheivement_icon">
                  <i className="fa fa-users"></i>
                </span>
                <h3>79,000+</h3>
                <p>Students </p>
              </article>

              <article className="acheivement_card">
                <span className="acheivement_icon">
                  <i className="fas fa-trophy"></i>
                </span>
                <h3>26</h3>
                <p>Awards </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Teams />
      <Footer />
    </>
  );
};

export default About;
