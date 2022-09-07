const CategoryArticles = (props) => {
  const { category, text, title } = props;

  return (
    <article className="category">
      <span className="category_icon">
        <i className={category}></i>
      </span>
      <h5>{title}</h5>
      <p>{text}</p>
    </article>
  );
};

export default CategoryArticles;
