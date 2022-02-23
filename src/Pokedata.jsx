import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPokemonData, getSpeciesData } from "./api";

const Pokedata = (props) => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);

  const [pokemonData, setPokemonData] = useState({
    abilities: {
      0: {
        ability: {
          name: "",
        },
      },
    },

    types: {
      0: {
        type: {
          name: "",
        },
      },
    },
  });

  const [speciesData, setSpeciesData] = useState({
    flavor_text_entries: {
      1: {
        flavor_text: "",
      },
    },
  });

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemonData(name);
      setPokemonData(data);
      setLoading(false);
    } catch (err) {}
  };

  const fetchSpecies = async () => {
    try {
      setLoading(true);
      const data = await getSpeciesData(name);
      setSpeciesData(data);
      setLoading(false);
    } catch (err) {}
  };

  useEffect(() => {
    fetchPokemon();
    fetchSpecies();
  }, []);

  console.log(pokemonData);
  console.log(speciesData);

  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`;

  // let pokemonDescription = () => {
  //   speciesData.flavor_text_entries[0].filter(e => e.language.name === "en").map(e => e.flavor_text)
  // }

  // let description = pokemonDescription()

  let pokemonDescription = speciesData.flavor_text_entries[1].flavor_text;



  return (
    <div>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <>
          <div className="pokemon-data-display">
            <h3 className="data-name">{pokemonData.name}</h3>
            <div className="img-container">
              <img
                className="pokemon-data-img"
                src={imgSrc}
                alt={pokemonData.name}
              />
            </div>

            <div className="description-text">
              <p>{pokemonDescription}</p>

              <p>Base experience: {pokemonData.base_experience}</p>
              <p>Ability: {pokemonData.abilities[0].ability.name}</p>

              <p>Weight: {pokemonData.weight}</p>
              <p>Type: {pokemonData.types[0].type.name}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokedata;
