import {useState, useEffect} from "react";
import {
    Link, useParams
  } from "react-router-dom";
import { getPokemonData, getSpeciesData } from "./api";


const Pokedata = (props) => {
    
    const {name} = useParams()
    const [loading, setLoading] = useState(true);

    const [pokemonData, setPokemonData] = useState({});
    const [speciesData, setSpeciesData] = useState({});

    const fetchPokemon = async () => {
        try {
          setLoading(true);
          const data = await getPokemonData(name);
          setPokemonData(data)
          setLoading(false);
        } catch (err) {}
      };
  
      const fetchSpecies = async() => {
        try {
            setLoading(true);
            const speciesData = await getSpeciesData(name);
            setSpeciesData(speciesData)
            setLoading(false);
          } catch (err) {}
        };
  
    useEffect(() =>{
        fetchPokemon()
        fetchSpecies()
    }, []);

        const imgSrcArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`

    return (
        <div>
            {loading ? <h3>loading...</h3> :
            (<>
            <div className="pokemon-data-display">
            <h3 className="data-name">{pokemonData.name}</h3>
            <img
          className="pokemon-data-img"
          src={imgSrcArtwork}
          alt={pokemonData.name}
        />
             <p>{}</p>

            <p>Base experience: {pokemonData.base_experience}</p>
            <p>Ability: {pokemonData.abilities[0].ability.name}</p>

            <p>Weight: {pokemonData.weight}</p>
            <p>Type: {pokemonData.types[0].type.name}</p>


            </div>            
            </>)
        }
        </div>
    )}

    export default Pokedata;