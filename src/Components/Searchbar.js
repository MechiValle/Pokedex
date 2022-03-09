import React from "react";
import { HeaderElements } from "../Styles/HeaderElements";
import {Button} from "../Styles/Button.js"
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
          <Button onClick={onClick}>SEARCH</Button>
    </HeaderElements>
  );
};

export default Searchbar;
