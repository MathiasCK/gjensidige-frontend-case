import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setPokemonAction} from "../../redux/actions";
import {fetchPokemon} from "../../utils";

import FormInput from "./FormInput";
import "./searchbar.scss";

import {randomPokemon} from "../../pokemon";

const TodoAdder = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const pokemon = await fetchPokemon(inputValue);
    dispatch(setPokemonAction(pokemon));
    setInputValue("");
  };

  const fetchRandomPokemon = async () => {
    const pokemon = await fetchPokemon(randomPokemon());
    dispatch(setPokemonAction(pokemon));
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="add"
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
        }}
        label="Search for any pokemon"
        required
      />
      <button className="searchbar__button">Submit</button>
      <button
        type="button"
        className="searchbar__button"
        onClick={async () => {
          await fetchRandomPokemon();
        }}
      >
        Random
      </button>
    </form>
  );
};

export default TodoAdder;
