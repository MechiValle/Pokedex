import styled from "styled-components"
import {
    NavLink,
  } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
color: white;
text-decoration: none;

&:visited{
    color: red; 
}

&:hover{
    color: yellow;
}

`