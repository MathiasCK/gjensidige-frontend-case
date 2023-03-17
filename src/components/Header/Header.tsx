import React from "react";
import {useSelector} from "react-redux";
import {Spinner} from "@Components";
import "./header.scss";

const Header: React.FunctionComponent = () => {
  const {pokemon} = useSelector((state: any) => state);

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <Spinner />;
  }

  return (
    <header className={`header ${pokemon.types[0].type.name}`}>
      <div className="header__level">
        <h2>Lvl {pokemon.base_experience}</h2>
      </div>
      <div className="header__image">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        />
      </div>
      <article className="header__info">
        <h1>{pokemon.name}</h1>
        <h2>{pokemon.types[0].type.name}</h2>
      </article>
    </header>
  );
};

export default Header;
