import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { getPokemon } from "../api";

const PokemonDetails = () => {
  const { id } = useParams({ strict: false });

  const { isLoading, isError, data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  isLoading && <div>Loading</div>;
  isError && <div>Error</div>;

  data && console.log(data);
  return (
    <>
      <div>
        <h1>{data?.name}</h1>
        {data?.sprites && (
          <img src={data.sprites.front_default} alt={data.name} />
        )}
      </div>
    </>
  );
};

export default PokemonDetails;
