import {
  SET_POKEMON,
  SET_POKEMON_LIST,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
} from "@Redux/types";
import {Pokemon, PokemonList} from "@Utils/types";

interface State {
  pokemon: Pokemon | Object;
  pokemonList: PokemonList | Object;
  favouritesList: Pokemon[] | any;
}

const INITIAL_STATE: State = {
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
    case ADD_FAVOURITE:
      state.favouritesList.push(action.payload);
      return {
        ...state,
      };
    case REMOVE_FAVOURITE:
      const filtered = state.favouritesList.filter(
        (e: Pokemon) => e.name !== action.payload.name,
      );
      return {
        ...state,
        favouritesList: filtered,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
