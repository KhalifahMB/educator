import { useState } from "react";
const FaqsArticle = (props) => {
  const { heading, body } = props;
  const [faqsExpand, setFaqsExpand] = useState(false);
  const styles = {
    display: faqsExpand ? "block" : "none",
  };
  function handleClick() {
    setFaqsExpand((prev) => {
      return !prev;
    });
  }
  return (
    <article className="faq" onClick={handleClick}>
      <div className="faq_icon">
        <i className={faqsExpand ? "bi bi-dash" : "bi bi-plus"}></i>
      </div>
      <div className="question_answer">
        <h4>{heading}</h4>
        <p style={styles}>{body}</p>
      </div>
    </article>
  );
};

export default FaqsArticle;
