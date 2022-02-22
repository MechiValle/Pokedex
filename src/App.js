import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Favorite from "./Favorite";
import Searchbar from "./Searchbar";
import Pokedex from "./Pokedex";
import Pokedata from "./Pokedata";

import searchPokemon, { getPokemonData, getPokemons } from "./api";
import { FavoriteProvider } from "./favoritesContext";

const { useState, useEffect } = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  /*Pagination*/
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fav, setFav] = useState(["bulbasaur"]);

  /* Not Found */
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(24, 24 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 24));
      setNotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  const updateFav = (name) => {
    const updated = [...fav]; 
    const isFav = fav.indexOf(name);
    if(isFav >= 0){
      updated.splice(isFav, 1);
    }    else{
      updated.push(name);
    }
    setFav(updated);
  };

  return (
    <Router>
      <FavoriteProvider value={{favoritePokemons: fav, updateFav: updateFav}}>
      <div className="nav">
        <NavLink to="/Pokedex">Pokedex</NavLink>
        <NavLink to="/About">About</NavLink>
      </div>
      <div>
        <Favorite />
      </div>
      <Routes>
        <Route
          path="/Pokedex"
          element={
            <div className="App">
              <Searchbar onSearch={onSearch} />
              {notFound ? (
                <div className="not-found-text">Pokemon not found</div>
              ) : (
                <Pokedex
                  loading={loading}
                  pokemons={pokemons}
                  page={page}
                  setPage={setPage}
                  total={total}
                />
              )}
            </div>
          }
        />
        <Route path="/Pokemon/:id" element={Pokedata} />
      </Routes>
      </FavoriteProvider>
    </Router>
  );
}
