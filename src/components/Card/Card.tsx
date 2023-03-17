import React from "react";
import styles from "./Card.module.css";
import Header from "../Header";
import Moves from "../Moves";
import Stats from "../Stats";
import {useSelector} from "react-redux";

const Card: React.FunctionComponent = () => {
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Header />

      <Moves />
      <Stats />
    </div>
  );
};
export default Card;
