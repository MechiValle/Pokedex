import styled from "styled-components"

export const Button = styled.button`
background-color: gray;
border: none;
border-radius: 10px;
height: 100%;
color: white;
font-weight: bold;
padding: 10px 12px;
box-shadow: 0 .2em lightgray; 
font-family: 'SF Pixelate';



&:active{
    box-shadow: none;
	position: relative;
	top: .2em;
}

`