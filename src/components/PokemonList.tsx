/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../api";
import { Link } from "@tanstack/react-router";

const PokemonList = () => {
  // Queries
  const query = useQuery({ queryKey: ["pokemons"], queryFn: getPokemons });

  query.isLoading && <div>Loading</div>;
  query.isError && <div>Error</div>;

  query.data && console.log(query.data);
  return (
    <div>
      <ul>
        {query.data?.results.map((pokemon: any) => (
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
