import React from "react";
import {searchPokemon} from './api';
const {useState} = React;

const Searchbar = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();
    const onChange = (e) => {
        setSearch(e.target.value.toLowerCase());
        if(e.target.value.length === 0){
          onSearch(null);
        }
    }

    const onClick = () =>{
      onSearch(search);
    }

    
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search Pokemon..." 
        onChange = {onChange}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            onClick()
          }
        }}
        />
      </div>
      <div className="searchbar-btn">
          <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
