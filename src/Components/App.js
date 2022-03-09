import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "../Styles/App.css";
import Favorite from "./Favorite";
import Searchbar from "./Searchbar";
import Pokedex from "./Pokedex";
import Pokedata from "./Pokedata";
import About from "./About";
import Home from "./Home";
import MyFavs from "./MyFavs";
import FontStyles from '../FontStyles';
import { NavBar } from "../Styles/NavBar";
import { StyledNavLink } from "../Styles/StyledNavLink";
import searchPokemon, { getPokemonData, getPokemons } from "./api";
import { FavoriteProvider } from "../Contexts/favoritesContext";

const { useState, useEffect } = React;
const localStorageKey = "favorite_pokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  /*Pagination*/
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [fav, setFav] = useState([]);

  /* Not Found */
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.name);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (err) {}
  };

  const loadFavPokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFav(pokemons);
  };

  useEffect(() => {
    loadFavPokemons();
  }, []);

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
    if (isFav >= 0) {
      updated.splice(isFav, 1);
    } else {
      updated.push(name);
    }
    setFav(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };


  return (
    <Router>
      <FontStyles />
      <FavoriteProvider value={{ favoritePokemons: fav, updateFav: updateFav }}>
        <NavBar>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/Pokedex">Pokedex</StyledNavLink>
          <StyledNavLink to="/About">About</StyledNavLink>
        </NavBar>
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
          <Route path="/Pokemon/:name" element={<Pokedata />} />
          <Route path="/About" element={<About />} />
          <Route path="/MyFavs" element={<MyFavs />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </FavoriteProvider>
    </Router>
  );
}
