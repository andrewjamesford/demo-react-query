import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api";

const PokemonList = () => {
  // Queries
  const query = useQuery({ queryKey: ["pokemons"], queryFn: getPokemons });

  return (
    <div>
      <ul>
        {query.data?.results.map((pokemon: any) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
