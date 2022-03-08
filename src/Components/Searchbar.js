import React from "react";
import { HeaderElements } from "./styles/HeaderElements";
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
      <div className="searchbar-btn">
          <button onClick={onClick}>Search</button>
      </div>
    </HeaderElements>
  );
};

export default Searchbar;
