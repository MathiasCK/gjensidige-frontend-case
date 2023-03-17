import {createStore} from "redux";
import pokemonReducer from "./pokemon-reducer";

const store = createStore(pokemonReducer);

export default store;
