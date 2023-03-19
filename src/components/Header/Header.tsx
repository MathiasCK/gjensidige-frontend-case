import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "@Components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import {addFavouriteAction, removeFavouriteAction} from "@Redux/actions";
import {Pokemon} from "@Utils/types";

const Header: React.FunctionComponent = () => {
  const {pokemon, favouritesList} = useSelector((state: any) => state);
  const dispatch = useDispatch();

  if (!pokemon || Object.keys(pokemon).length === 0) {
    return <Spinner />;
  }

  const isFavourite = favouritesList.some(
    (e: Pokemon) => e.name === pokemon.name,
  );

  const favouriteStyle = isFavourite ? "star" : "star empty";

  const addToFavouirites = () => {
    if (!isFavourite) {
      dispatch(addFavouriteAction(pokemon));
    } else {
      dispatch(removeFavouriteAction(pokemon));
    }
  };

  return (
    <header className={`header ${pokemon.types[0].type.name}`}>
      <div className="header__stats">
        <FontAwesomeIcon
          onClick={addToFavouirites}
          className={favouriteStyle}
          icon={faStar}
        />
        <div className="header__level">
          <h2>Lvl {pokemon.base_experience}</h2>
        </div>
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
