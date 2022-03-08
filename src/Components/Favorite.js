import React from "react";
import FavoriteContext from "../Contexts/favoritesContext";
import { HeaderElements } from "../Styles/HeaderElements";

const {useContext} = React;

const Favorite = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    return(
            <HeaderElements>
                <h3>&#10084;&#65039; {favoritePokemons.length}</h3>
            </HeaderElements>
    );
};

export default Favorite;