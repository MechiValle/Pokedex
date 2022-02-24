import React from "react";
import FavoriteContext from "../Contexts/favoritesContext";


const {useContext} = React;

const Favorite = () => {
    const {favoritePokemons} = useContext(FavoriteContext)
    return(
            <div className="favorite">
                <h3>&#10084;&#65039; {favoritePokemons.length}</h3>
            </div>
    );
};

export default Favorite;