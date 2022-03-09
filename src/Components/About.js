import React from "react";
import { Text } from "../Styles/Text";

const About = () => {
  return (
    <div className="home">
      <Text>Pokedex created with Create React App.</Text>
      <Text>
        API provided by{" "}
        <a href="https://pokeapi.co/" target="_blank">
          PokeAPI
        </a>
        .
      </Text>
    </div>
  );
};

export default About;
