import React from "react";
import Pokemon from "./Pokemon";
import FavoriteContext from "../Contexts/favoritesContext";
import { FavoriteProvider } from "../Contexts/favoritesContext";

const MyFavs = (props) => {
  const { loading } = props;
  const { useContext} = React;
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <div>
      <FavoriteProvider value={{ favoritePokemons }}>

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="pokedex-grid">
            {favoritePokemons.map((pokemon) => {
              return (
                <Pokemon
                  pokemon={pokemon}
                  key={pokemon}
                />
              );
            })}
          </div>
        )}
      </FavoriteProvider>
    </div>
  );
};

export default MyFavs;
