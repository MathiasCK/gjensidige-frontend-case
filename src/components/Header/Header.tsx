import React from "react";
import {useSelector} from "react-redux";
import styles from "./Header.module.css";

const Header: React.FunctionComponent = () => {
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.header}>
      <div className={styles.level}>
        <h2>Lvl {pokemon.experience}</h2>
      </div>
      <div className={styles.image}>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        />
      </div>
      <div className={styles.name}>
        <h1>{pokemon.name}</h1>
      </div>
      <div>
        <h2>{pokemon.types[0].type.name}</h2>
      </div>
    </div>
  );
};

export default Header;
