import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  const redirectToWiki = () => {
    window.open(
      `https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pokémon)`,
      "_blank"
    );
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
    }
    return backColor;
  };

  return (
    <div
      className="pokemon-card"
      onClick={redirectToWiki}
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
          <h3>{pokemon.name}</h3>
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
