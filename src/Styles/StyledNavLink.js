import styled from "styled-components"
import {
    NavLink,
  } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`

display: flex;
width: 270px;
align-items: center;
justify-content: center;
margin: 5px;
padding: 10px 10px 10px 10px ;
background-color: lightgray;
border-radius: 7px;
box-shadow: 0 .2em gray; 

font-family: 'SF Pixelate';

color: black;
font-weight: bold;
text-decoration: none;

&:visited{
    color: black; 
}

&:hover{
    color: white;
}

&:active{
    box-shadow: none;
	position: relative;
	top: .2em;
}

`