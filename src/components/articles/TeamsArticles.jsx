/* eslint-disable jsx-a11y/anchor-is-valid */
const TeamArticles = (props) => {
  const { src, fullName, role } = props;
  return (
    <article className="team_member">
      <div className="team_member-image">
        <img src={src} alt="" />
      </div>
      <div className="team_member-info">
        <h4>{fullName}</h4>
        <p>{role}</p>
      </div>
      <div className="team_member-socials">
        <a href="#" targert="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" targert="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" targert="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </article>
  );
};

export default TeamArticles;
