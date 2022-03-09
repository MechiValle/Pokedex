import React from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../Contexts/favoritesContext";
import { HeaderElements } from "../Styles/HeaderElements";

const {useContext} = React;

const Favorite = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    return(
            <HeaderElements>
                <h3>&#10084;&#65039; <Link to={`/MyFavs`}>
          {favoritePokemons.length}</Link></h3>
            </HeaderElements>
    );
};

export default Favorite;