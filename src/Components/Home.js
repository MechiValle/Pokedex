import React from "react";
import pokelogo from "../Images/pokelogo.png";
import { PokedexTitle } from "../Styles/PokedexTitle";
import { Text } from "../Styles/Text";

const Home = () => {
  return (
    <div className="home">
      {/* <img src={pokelogo} alt="Pokemon logo" className="pokelogo" /> */}
      <Text>Click on any Pokemon's name to access its information</Text>
      <Text>
        You can add a Pokemon to your favorites counter by clicking the heart
        at the bottom of each entry.
      </Text>
      <Text>
        Click your favorites counter to display your favorite Pokemon.
      </Text>
    </div>
  );
};

export default Home;
