import React from "react";
import Teams from "../components/Teams";

const About = () => {
  return (
    <>
      <section class="about_achievements">
        <div class="container about_acheivements-container">
          <div class="about_acheivement-left">
            <img src="./images/about achievements.svg" alt="" />
          </div>
          <div class="about_acheivement-right">
            <h1>Acheivements</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              ipsam libero voluptatibus beatae dolor ducimus aspernatur,
              recusandae blanditiis ratione odio architecto praesentium ex quis
              maxime minus consectetur nisi vel doloremque?
            </p>
            <div class="about_acheivements_cards">
              <article class="acheivement_card">
                <span class="acheivement_icon">
                  <i class="fas fa-video"></i>
                </span>
                <h3>450+</h3>
                <p>Courses </p>
              </article>

              <article class="acheivement_card">
                <span class="acheivement_icon">
                  <i class="fa fa-users"></i>
                </span>
                <h3>79,000+</h3>
                <p>Students </p>
              </article>

              <article class="acheivement_card">
                <span class="acheivement_icon">
                  <i class="fas fa-trophy"></i>
                </span>
                <h3>26</h3>
                <p>Awards </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Teams />
    </>
  );
};

export default About;
