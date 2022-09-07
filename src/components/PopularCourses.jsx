const PopularCourses = () => {
  return (
    <section className="courses">
      <h2>Our Popular Courses</h2>
      <div className="container courses_container">
        <article className="course">
          <div className="course_image">
            <img src="./images/course2.jpg" alt="" />
          </div>
          <div className="course_info">
            <h4>Responsive Admin Dashboard UI Design </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              ducimus odio sunt. Veniam numquam inventore consequatur.
            </p>
            <a href="courses.html" className="btn btn-primary ">
              Learn More
            </a>
          </div>
        </article>

        <article className="course">
          <div className="course_image">
            <img src="./images/course3.jpg" alt="" />
          </div>
          <div className="course_info">
            <h4>Responsive Admin Dashboard UI Design </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              ducimus odio sunt. Veniam numquam inventore consequatur.
            </p>
            <a href="courses.html" className="btn btn-primary ">
              Learn More
            </a>
          </div>
        </article>
        <article className="course">
          <div className="course_image">
            <img src="./images/course1.jpg" alt="" />
          </div>
          <div className="course_info">
            <h4>Responsive Admin Dashboard UI Design </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              ducimus odio sunt. Veniam numquam inventore consequatur.
            </p>
            <a href="courses.html" className="btn btn-primary ">
              Learn More
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PopularCourses;
