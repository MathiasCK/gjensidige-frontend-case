import {Pokemon, PokemonList} from "@Utils/types";
import {SET_POKEMON, SET_POKEMON_LIST} from "@Redux/types";

export const setPokemonAction = (obj: Pokemon) => ({
  type: SET_POKEMON,
  payload: obj,
});

export const setPokemonListAction = (obj: PokemonList) => ({
  type: SET_POKEMON_LIST,
  payload: obj,
});
