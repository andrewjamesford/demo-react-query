/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api";
import { Link } from "@tanstack/react-router";

const PokemonList = () => {
  // Queries
  const { isLoading, isError, data } = useQuery({ queryKey: ["pokemons"], queryFn: getPokemons, staleTime: 1000 * 60 * 5,});

  isLoading && <div>Loading</div>;
  isError && <div>Error</div>;

  data && console.log(data);
  return (
    <div>
      <ul>
        {data?.results.map((pokemon: any) => (
          <li key={pokemon.name}>
            <Link
              to="/details/$id"
              params={{
                id: pokemon.url.split("/")[6],
              }}
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
