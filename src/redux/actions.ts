import {Pokemon, PokemonList} from "../types";
import {SET_POKEMON, SET_POKEMON_LIST} from "./types";

export const setPokemonAction = (obj: Pokemon) => ({
  type: SET_POKEMON,
  payload: obj,
});

export const setPokemonListAction = (obj: PokemonList) => ({
  type: SET_POKEMON_LIST,
  payload: obj,
});
