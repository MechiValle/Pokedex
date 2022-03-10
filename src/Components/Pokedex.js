import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import { PokedexTitle } from "../Styles/PokedexTitle";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
          <>
            <div>
              <div className="header">
                <PokedexTitle>Pokedex</PokedexTitle>
                <Pagination
                  page={page + 1}
                  totalPages={total}
                  onLeftClick={lastPage}
                  onRightClick={nextPage}
                />
              </div>

              {loading ? (
                <div class="spinner">
                <div class="cube1"></div>
                <div class="cube2"></div>
              </div>
              ) : (
                <div className="pokedex-grid">
                  {pokemons.map((pokemon, index) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                  })}
                </div>
              )}
            </div>
            </>
  );
};

export default Pokedex;
