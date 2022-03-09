import React from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../Contexts/favoritesContext";
const { useContext } = React;

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFav } = useContext(FavoriteContext);

  const toFave = "🖤";
  const faved = "❤️";
  const heart = favoritePokemons.includes(pokemon) ? faved : toFave;
  const clickHeart = (e) => {
    e.preventDefault();
    updateFav(pokemon);
  };

  const colors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#fdcb00',
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

  let typeArray = Object.values(pokemon.types)

  const pokeTypes = typeArray.map(type => type.type.name);
  const type1 = pokeTypes.length > 0 ? pokeTypes[0] : {};
  const type2 = pokeTypes.length > 0 ? pokeTypes[1] : {};

	const type = mainTypes.find(type => type1.indexOf(type) > -1);

 
const color = colors[type];
  

  return (
    <div
      className="pokemon-card"
      style={{ backgroundColor: color }}
    >
      <div className="pokemon-img-container">
        <img
          className="pokemon-img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>

      <div className="card-body">
        <div className="card-top">
          <Link to={`/Pokemon/${pokemon.name}`}>
            <h3>{pokemon.name}</h3>
          </Link>
          <div>#{pokemon.id}</div>
        </div>

        <div className="card-bottom">
          <div className="pokemon-type">
                <div >
                  <span className="pokemon-type-text">{type1}</span> <span className="pokemon-type-text">{type2 ? type2 : null}</span>
                </div>
          </div>
          <button className="fav-btn" onClick={clickHeart}>
            <div>{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
