import React from "react";
import "./card.scss";
import Header from "../Header";
import Moves from "../Moves";
import Stats from "../Stats";

const Card: React.FunctionComponent = () => {
  return (
    <section className="card__container">
      <div className="card">
        <Header />
        <Moves />
        <Stats />
      </div>
    </section>
  );
};
export default Card;
