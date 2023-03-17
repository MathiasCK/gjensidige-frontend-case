import React from "react";
import "./card.scss";
import {Header, Moves, Stats} from "@Components";

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
