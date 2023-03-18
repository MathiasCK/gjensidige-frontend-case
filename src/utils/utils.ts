import {err, notFound} from "@Utils/responses";

const base_url = "https://pokeapi.co/api/v2";

export const fetcher = async (
  path: string,
  pokemonName: string | null = null,
) => {
  try {
    const response = await fetch(`${base_url}/${path}`);

    if (response.status === 404 && pokemonName !== null) {
      return notFound(pokemonName);
    }

    if (!response.ok) {
      const msg = `${response.status} : ${response.statusText}`;
      return err(msg);
    }
    const data = await response.json();
    return data;
  } catch (e: any) {
    err(e.message);
  }
};

export const fetchPokemon = async (pokemonName: string) =>
  await fetcher(`pokemon/${pokemonName.toLowerCase()}`, pokemonName);

export const fetchAllPokemons = async () =>
  await fetcher("pokemon?limit=100&offset=0", null);

export const fetchPokemonTypes = async (type: string) =>
  await fetcher(`type/${type}`, null);
