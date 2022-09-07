/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import TeamArticles from "./articles/TeamsArticles";
import TeamsData from "../datas/TeamsData";
const Teams = () => {
  const [teams, setTeams] = React.useState([]);

  React.useEffect(() => {
    setTeams(TeamsData);
  }, []);

  const teamElements = teams.map((team) => {
    return (
      <TeamArticles
        key={team.id}
        src={team.src}
        fullName={team.fullName}
        role={team.role}
      />
    );
  });

  return (
    <section className="team">
      <h2>Meet Our Team</h2>
      <div className="container team_container">{teamElements}</div>
    </section>
  );
};

export default Teams;
