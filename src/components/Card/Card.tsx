import React from "react";
import styles from "./Card.module.css";
import Header from "../Header";
import Moves from "../Moves";
import Stats from "../Stats";

const Card: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Moves />
      <Stats />
    </div>
  );
};
export default Card;
