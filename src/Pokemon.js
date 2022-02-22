import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import FavoriteContext from "./favoritesContext";
const { useContext } = React;

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFav } = useContext(FavoriteContext);

  /*const redirectToWiki = () => {
    window.open(
      `https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pokémon)`,
      "_blank"
    );
  };*/

  const toFave = "🖤";
  const faved = "❤️";
  const heart = favoritePokemons.includes(pokemon.name) ? faved : toFave;
  const clickHeart = (e) => {
    e.preventDefault();
    updateFav(pokemon.name);
  };

  const getBackColor = (pokemon, type) => {
    let backColor = type === "img" ? "#fffcdb" : "#EEE8AA";
    const pokeTypes = pokemon.types.map((i) => i.type.name);
    if (pokeTypes.includes("fire")) {
      backColor = type === "img" ? "#f6b282" : "#f6b282";
    } else if (pokeTypes.includes("grass")) {
      backColor = type === "img" ? "#aede96" : "#aede96";
    } else if (pokeTypes.includes("water")) {
      backColor = type === "img" ? "#c2d2f9" : "#c2d2f9";
    } else if (pokeTypes.includes("bug")) {
      backColor = type === "img" ? "#d3db8f" : "#d3db8f";
    } else if (pokeTypes.includes("normal")) {
      backColor = type === "img" ? "#d3d3bb" : "#d3d3bb";
    } else if (pokeTypes.includes("electric")) {
      backColor = type === "img" ? "#F8D030" : "#F8D030";
    } else if (pokeTypes.includes("ground")) {
      backColor = type === "img" ? "#E0C068" : "#E0C068";
    } else if (pokeTypes.includes("fairy")) {
      backColor = type === "img" ? "#f6ccd5" : "#f6ccd5";
    } else if (pokeTypes.includes("ghost")) {
      backColor = type === "img" ? "#705898" : "#705898";
    } else if (pokeTypes.includes("fighting")) {
      backColor = type === "img" ? "#d9827e" : "#d9827e";
    } else if (pokeTypes.includes("rock")) {
      backColor = type === "img" ? "#B8A038" : "#B8A038";
    } else if (pokeTypes.includes("poison")) {
      backColor = type === "img" ? "#cf9fcf" : "#cf9fcf";
    } else if (pokeTypes.includes("psychic")) {
      backColor = type === "img" ? "#fa9ab7" : "#fa9ab7";
    } else if (pokeTypes.includes("ice")) {
      backColor = type === "img" ? "#f3f6f4" : "#f3f6f4";
    } else if (pokeTypes.includes("dark")) {
      backColor = type === "img" ? "#9a8a7e" : "#9a8a7e";
    } else if (pokeTypes.includes("flying")) {
      backColor = type === "img" ? "#A890F0" : "#A890F0";
    } else if (pokeTypes.includes("dragon")) {
      backColor = type === "img" ? "#e2d7fd" : "#e2d7fd";
    } else if (pokeTypes.includes("steel")) {
      backColor = type === "img" ? "#B8B8D0" : "#B8B8D0";
    }
    return backColor;
  };

  return (
    <div
      className="pokemon-card"
      /*onClick={redirectToWiki}*/
      style={{ backgroundColor: getBackColor(pokemon) }}
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
            {pokemon.types.map((type, index) => {
              return (
                <div className="pokemon-type-text" key={index}>
                  {type.type.name}
                </div>
              );
            })}
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
