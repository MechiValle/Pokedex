import React from "react";
import { Route, Routes, Link, Router, Switch } from "react-router-dom";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import Pokedata from "./Pokedata";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;
  const { pokemon } = props;
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
          <div>
            <div>
              <div className="header">
                <h1>Pokedex</h1>
                <Pagination
                  page={page + 1}
                  totalPages={total}
                  onLeftClick={lastPage}
                  onRightClick={nextPage}
                />
              </div>

              {loading ? (
                <div className="loading">Loading...</div>
              ) : (
                <div className="pokedex-grid">
                  {pokemons.map((pokemon, index) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                  })}
                </div>
              )}
            </div>
          </div>
  );
};

export default Pokedex;
