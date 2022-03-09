import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import FavoriteContext from "../Contexts/favoritesContext";
import { FavoriteProvider } from "../Contexts/favoritesContext";

const MyFavs = (props) => {
  const { loading } = props;
  const { useContext, useEffect, useState } = React;
  const { favoritePokemons } = useContext(FavoriteContext);
  const [fav, setFav] = useState([]);



  const localStorageKey = "favorite_pokemon";

  const loadFavPokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
      setFav(pokemons);
  };

  useEffect(() => {
    loadFavPokemons();
  }, []);


  const iterator = favoritePokemons.values();

  for (const value of iterator) {
    console.log(value);
  }



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
