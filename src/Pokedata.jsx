import React from "react";
import {
    Link, useParams
  } from "react-router-dom";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import searchPokemon from "./api";

const {useState} = React;

const Pokedata = (props) => {
  
    const {id} = useParams()
    const [pokemon, setPokemon] = useState();
    React.useEffect(() =>{
        searchPokemon()
    }, []);

    const searchPokemon = async(id) => {
        try{
            let url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const response = await fetch(url);
            const data = await response.json();
            setPokemon(pokemon)
        } catch(err){
    
        }
    }

    return (
        <div>
            <h3>{pokemon.name}</h3>
        </div>
    )}

    export default Pokedata;