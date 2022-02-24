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
        language:{
          name: ""
        }
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

  useEffect( async () => {
    await fetchPokemon();
    fetchSpecies();
  }, []);


  const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F8D030',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  const mainTypes = Object.keys(colors);

  let typeArray = Object.values(pokemonData.types)

  const pokeTypes = typeArray.map(type => type.type.name);
  const type1 = pokeTypes.length > 0 ? pokeTypes[0] : {};
  const type2 = pokeTypes.length > 0 ? pokeTypes[1] : {};



	const type = mainTypes.find(type => type1.indexOf(type) > -1);

 
const color = colors[type];

 


  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`;

  let pokemonDescription; 
  let filter;
  let toArray;
  if (speciesData !== undefined){

    toArray = Object.values(speciesData.flavor_text_entries)
    filter = toArray.filter(
    (text) => text.language.name === "en"
  );
  const flavorTextEntry = filter.length > 0 ? filter[0] : {};
    
  pokemonDescription = flavorTextEntry.flavor_text;
  }

  return (
    <div>
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <>
          <div className="pokemon-data-display" style={{backgroundColor: color}}>
            <h3 className="data-name">{pokemonData.name}</h3>
            <div className="img-container">
              <img
                className="pokemon-data-img"
                src={imgSrc}
                alt={pokemonData.name}
              />
            </div>

            <div className="description-text">
              <p>{pokemonDescription ? pokemonDescription : "No description available"}</p>

              <p>Base experience: {pokemonData.base_experience}</p>
              <p className="pokemon-type-text">Ability: {pokemonData.abilities[0].ability.name}</p>

              <p>Weight: {pokemonData.weight}</p>
              <p className="pokemon-type-text">Type: {type1}</p>
              <p className="pokemon-type-text"> Sub-type: {type2 ? type2 : "None"}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokedata;
