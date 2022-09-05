import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Courses from "./Courses";
import Faqs from "../components/Faqs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Categories />
      <Courses />
      <Faqs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Main;
