import {Pokemon} from "../types";
import {SET_POKEMON} from "./types";

export const setPokemonAction = (obj: Pokemon) => ({
  type: SET_POKEMON,
  payload: obj,
});
