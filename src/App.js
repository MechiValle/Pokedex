import React from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import Pokedex from "./Pokedex";
import searchPokemon, { getPokemonData, getPokemons } from "./api";

const { useState, useEffect } = React;

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  /*Pagination*/
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
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
      setTotal(Math.ceil(data.count/24));
      setNotFound(false);
    } catch (err) {}
  };

  useEffect(() => {
    if(!searching){
    fetchPokemons();
  }
  }, [page]);

  const onSearch = async(pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon)
    if(!result){
      setNotFound(true);
      setLoading(false);
      return;
    }else{
    setPokemons([result])
    setPage(0);
    setTotal(1);
    }
    setLoading(false);
    setSearching(false)
  }

  return (
    <div className="App">
      <Searchbar onSearch={onSearch}/>
      {notFound ? (
      <div className="not-found-text">Pokemon not found</div>)
      :
      (<Pokedex 
        loading={loading}  
        pokemons={pokemons} 
        page ={page}
        setPage={setPage}
        total={total}
        />
      )}
    </div>
  );
}
