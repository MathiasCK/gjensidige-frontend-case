import {SET_POKEMON, SET_POKEMON_LIST, SET_FAVOURITES_LIST} from "@Redux/types";

const INITIAL_STATE = {
  pokemon: {},
  pokemonList: {},
  favouritesList: [],
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
    case SET_FAVOURITES_LIST:
      // @ts-ignore
      state.favouritesList.push(action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
