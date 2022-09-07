const CourseArticle = (props) => {
  const { src, title, text } = props;
  return (
    <article className="course">
      <div className="course_image">
        <img src={src} alt="" />
      </div>
      <div className="course_info">
        <h4>{title}</h4>
        <p>{text} </p>
        <a href="courses.html" className="btn btn-primary ">
          Learn More
        </a>
      </div>
    </article>
  );
};

export default CourseArticle;
