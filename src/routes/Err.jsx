import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Categories from "../components/Categories";
import PopularCourses from "../components/PopularCourses";
import Faqs from "../components/Faqs";
// import Testimonials from "../components/Testimonials";
const Err = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <Categories /> */}
      <PopularCourses />
      <Faqs />
      {/* <Testimonials /> */}
      <h1>Nothing found</h1>
      <Footer />
    </div>
  );
};

export default Err;
