import {loadState, saveState} from "@Utils/state";
import {createStore} from "redux";
import pokemonReducer from "./pokemon-reducer";
// @ts-ignore
import throttle from "lodash.throttle";

const persistedState = loadState();

const store = createStore(pokemonReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000),
);

export default store;
