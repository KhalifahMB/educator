/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import CategoryArticles from "./articles/CategoriesArticles";

const Categories = (props) => {
  const categoryElements = props.category.map((category) => {
    return (
      <CategoryArticles
        key={category.id}
        title={category.title}
        category={category.category}
        text={category.text}
      />
    );
  });

  return (
    <section className="categories">
      <div className="container categories_container">
        <div className="categories_left">
          <h1>Categories</h1>
          <p>
            Lorem ipsum & dolor sit amet consectetur adipisicing elit. Iusto
            amet assumenda corrupti aliquam temporibus dicta quo eligendi
            quibusdam perspiciatis nisi. Doloremque ut corrupti aperiam quo amet
            repudiandae quod veniam unde.
          </p>
          <a href="#" className="btn">
            Learn more
          </a>
        </div>
        <div className="categories_right">{categoryElements}</div>
      </div>
    </section>
  );
};

export default Categories;
