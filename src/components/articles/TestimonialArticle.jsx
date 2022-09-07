const Testimonial = (props) => {
  const { src, details, role, body } = props;
  return (
    <article className="testimonial swiper-slide">
      <div className="avatar">
        <img src={src} alt="" />
      </div>
      <div className="testimonial_info">
        <h5>{details}</h5>
        <small>{role}</small>
      </div>
      <div className="testimonial_body">
        <p>{body}</p>
      </div>
    </article>
  );
};

export default Testimonial;
