import React from "react";
import pokelogo from "../Images/pokelogo.png";
import { PokedexTitle } from "../Styles/PokedexTitle";
import { Text } from "../Styles/Text";

const Home = () => {
  return (
    <div className="home">
      {/* <img src={pokelogo} alt="Pokemon logo" className="pokelogo" /> */}
      <Text>Click on any Pokemon's name and access its information</Text>
      <Text>
        You can add a Pokemon to your favorites counter by clicking on the heart
        at the bottom of each individual card
      </Text>
    </div>
  );
};

export default Home;
