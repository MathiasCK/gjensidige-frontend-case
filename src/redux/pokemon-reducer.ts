import {SET_POKEMON, SET_POKEMON_LIST} from "./types";

const INITIAL_STATE = {
  pokemon: {},
  pokemonList: {},
};

export const pokemonReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
