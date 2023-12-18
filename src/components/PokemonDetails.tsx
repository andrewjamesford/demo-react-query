import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { getPokemon } from "../api";

const PokemonDetails = () => {
  const { id } = useParams({ strict: false });

  const query = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
  });

  query.isLoading && <div>Loading</div>;
  query.isError && <div>Error</div>;

  query.data && console.log(query.data);
  return (
    <>
      <div>
        <h1>{query.data?.name}</h1>
        {query.data?.sprites && (
          <img src={query.data.sprites.front_default} alt={query.data.name} />
        )}
      </div>
    </>
  );
};

export default PokemonDetails;
