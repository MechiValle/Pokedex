const url = `https://pokeapi.co/api/v2/pokemon/`

export const searchPokemon = async(pokemon) => {
    try{
        let pokemonSearchURL = url+pokemon
        const response = await fetch(pokemonSearchURL);
        const data = await response.json();
        return data;
    } catch(err){

    }
}

export const getPokemons = async(limit=25, offset=0) =>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err){

    }

}

export const getPokemonData = async(pokemon) => {
    try{
        let pokemonURL = url+pokemon
        const response = await fetch(pokemonURL);
        const data = await response.json();
        return data;
    }catch(err){

    }
}

export const getSpeciesData = async(pokemon) => {
    try{
        let speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
        const response = await fetch(speciesURL);
        const data = await response.json();
        return data;
    }catch(err){

    }
}

export default searchPokemon;