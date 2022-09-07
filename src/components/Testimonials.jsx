// import Testimonial from "./articles/TestimonialArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = (props) => {
  const element = props.testimonial;
  const elements = element.map((el) => {
    return (
      <SwiperSlide ke>
        <article className="testimonial swiper-slide">
          <div className="avatar">
            <img src={el.src} alt="" />
          </div>
          <div className="testimonial_info">
            <h5>{el.details}</h5>
            <small>{el.role}</small>
          </div>
          <div className="testimonial_body">
            <p>{el.body}</p>
          </div>
        </article>
      </SwiperSlide>
    );
  });
  return (
    <section className="container testimonials_container swiper mySwiper">
      <h2>Student's Testimonials </h2>
      <div className="swiper-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={2}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(Swiper) => console.log(Swiper)}
          className="my-swiper"
        >
          {elements}
          ...
        </Swiper>
      </div>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Testimonials;
