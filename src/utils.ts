import {err, notFound} from "./responses";

export const fetchPokemon = async (pokemonName: string) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    );

    if (response.status === 404) {
      return notFound(pokemonName);
    }

    const data = await response.json();
    return data;
  } catch (e: any) {
    err(e);
  }
};
