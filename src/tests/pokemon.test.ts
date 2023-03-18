import {randomPokemon, pokemonNames} from "@Utils/pokemon";
import {describe, expect, test} from "@jest/globals";

describe("randomPokemon()", () => {
  test("randomPokemon returns a string", () => {
    const pokemon = randomPokemon();
    expect(typeof pokemon).toBe("string");
  });

  test("randomPokemon returns a string in lowercase", () => {
    const pokemon = randomPokemon();
    expect(typeof pokemon).toBe("string");
    expect(pokemon).toEqual(pokemon.toLowerCase());
  });

  test("randomPokemon returns a valid Pokémon name", () => {
    const random = randomPokemon();
    const includes = pokemonNames.some(
      pokemon => pokemon.toLowerCase() === random,
    );
    expect(includes).toBe(true);
  });

  test("returns different Pokemon names on consecutive calls", () => {
    const pokemon1 = randomPokemon();
    const pokemon2 = randomPokemon();
    expect(pokemon1).not.toEqual(pokemon2);
  });
});
