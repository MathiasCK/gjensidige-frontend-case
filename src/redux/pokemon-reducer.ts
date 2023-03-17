import {SET_POKEMON} from "./types";

const INITIAL_STATE = {
  pokemon: {},
};

export const pokemonReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
