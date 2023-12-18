const getPokemon = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  return pokemon;
};

const getPokemons = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  const pokemons = await response.json();
  return pokemons;
};

export { getPokemon, getPokemons };
