import React from "react";

const FavoriteContext = React.createContext({
    favoritePokemons: [],
    updateFav: (id) => null
})

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;