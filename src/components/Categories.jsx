/* eslint-disable jsx-a11y/anchor-is-valid */
const Categories = () => {
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
        <div className="categories_right">
          <article className="category">
            <span className="category_icon">
              <i className="fa-brands fa-bitcoin"></i>
            </span>
            <h5>Blockchain</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              pariatur?
            </p>
          </article>

          <article className="category">
            <span className="category_icon">
              <i className="fa-thin  fa-pen"></i>
            </span>
            <h5>Graphic Design</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              pariatur?
            </p>
          </article>

          <article className="category">
            <span className="category_icon">
              <i className="fa fa-usd"></i>
            </span>
            <h5>Finance</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              pariatur?
            </p>
          </article>

          <article className="category">
            <span className="category_icon">
              <i className="fa-solid fa-megaphone"></i>
            </span>
            <h5>Marketing</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              pariatur?
            </p>
          </article>

          <article className="category">
            <span className="category_icon">
              <i className="fa fa-music"></i>
            </span>
            <h5>Music</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              pariatur?
            </p>
          </article>

          <article className="category">
            <span className="category_icon">
              <i className="fa fa-puzzle"></i>
            </span>
            <h5>Business</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              pariatur?
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Categories;
