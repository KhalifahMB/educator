const Courses = () => {
  return (
    <section className="courses">
      <h2>Our Popular Courses</h2>
      <div className="container courses_container">
        <article class="course">
          <div class="course_image">
            <img src="./images/course1.jpg" alt="" />
          </div>
          <div class="course_info">
            <h4>Responsive Social Media Website UI Design </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              ducimus odio sunt. Veniam numquam inventore consequatur.
            </p>
            <a href="courses.html" class="btn btn-primary ">
              Learn More
            </a>
          </div>
        </article>

        <article class="course">
          <div class="course_image">
            <img src="./images/course2.jpg" alt="" />
          </div>
          <div class="course_info">
            <h4>Responsive SmartHome Website Design </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              ducimus odio sunt. Veniam numquam inventore consequatur.
            </p>
            <a href="courses.html" class="btn btn-primary ">
              Learn More
            </a>
          </div>
        </article>

        <article class="course">
          <div class="course_image">
            <img src="./images/course3.jpg" alt="" />
          </div>
          <div class="course_info">
            <h4>Responsive Admin Dashboard UI Design </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              ducimus odio sunt. Veniam numquam inventore consequatur.
            </p>
            <a href="courses.html" class="btn btn-primary ">
              Learn More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Courses;
