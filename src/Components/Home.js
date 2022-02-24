import React from "react";
import pokelogo from "../Images/pokelogo.png";

const Home = () => {
    
    return(
            <div className="home">
            <img src={pokelogo} alt="Pokemon logo" className="pokelogo"/>

            </div>
    );
};

export default Home;