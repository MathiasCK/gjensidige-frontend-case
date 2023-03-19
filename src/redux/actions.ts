import {Pokemon, PokemonList} from "@Utils/types";
import {
  SET_POKEMON,
  SET_POKEMON_LIST,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from "@Redux/types";

export const setPokemonAction = (obj: Pokemon) => ({
  type: SET_POKEMON,
  payload: obj,
});

export const setPokemonListAction = (obj: PokemonList) => ({
  type: SET_POKEMON_LIST,
  payload: obj,
});

export const addFavouriteAction = (obj: Pokemon) => ({
  type: ADD_FAVOURITE,
  payload: obj,
});

export const removeFavouriteAction = (obj: Pokemon) => ({
  type: REMOVE_FAVOURITE,
  payload: obj,
});
