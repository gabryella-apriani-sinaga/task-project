import Pokemon from "./components/Pokemon";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "./stores/actions/index";
import Image from "./components/Image";

function App() {
  const dispatch = useDispatch();

  const { loading, pokemonData, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="font-bold text-3xl text-center p-2 text-white bg-red-500">
        Pokemon API
      </div>
      <div className="px-20 py-8 flex gap-5 flex-wrap">
        {pokemonData.map((pokemon, index) => (
          <div
            className="shadow-lg rounded-sm p-3 flex-col flex text-center border-4 border-neutral-200 w-1/6 mx-auto"
            key={index}
          >
            <Pokemon key={index} title={pokemon.name} />
            <Image imageSrc={pokemon.url} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
