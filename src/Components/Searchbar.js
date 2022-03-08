import React from "react";
import { HeaderElements } from "./styles/HeaderElements";
import {Button} from "./styles/Button.js"
const {useState} = React;

const Searchbar = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState('');
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
    <HeaderElements>
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
          <Button onClick={onClick}>Search</Button>
    </HeaderElements>
  );
};

export default Searchbar;
