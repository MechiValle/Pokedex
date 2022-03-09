import { createGlobalStyle } from 'styled-components';

import SFPixelateWoff from './Styles/Fonts/SFPixelate.woff';
import SFPixelateWoff2 from './Styles/Fonts/SFPixelate.woff2';
import PokemonSolidWoff from './Styles/Fonts/PokemonSolid.woff';
import PokemonSolidWoff2 from './Styles/Fonts/PokemonSolid.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'SF Pixelate';
        src: url(${SFPixelateWoff2}) format('woff2'),
        url(${SFPixelateWoff}) format('woff');
    }

    @font-face {
        font-family: 'PokemonSolid';
        src: url(${PokemonSolidWoff2}) format('woff2'),
        url(${PokemonSolidWoff}) format('woff');
    }
`;

export default FontStyles;