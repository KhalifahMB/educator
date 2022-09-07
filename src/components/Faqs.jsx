import React from "react";
import FaqsData from "../datas/FaqData";
import FaqsArticle from "./articles/FaqsArticle";
const Faqs = () => {
  const [frequent, setFaqs] = React.useState([]);

  React.useEffect(() => {
    setFaqs(FaqsData);
  }, []);

  const faqsElements = frequent.map((faq) => {
    return (
      <FaqsArticle key={faq.id} heading={faq.heading} body={faq.heading} />
    );
  });
  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="container faqs_container">{faqsElements}</div>
    </section>
  );
};

export default Faqs;
