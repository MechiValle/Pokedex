import { createGlobalStyle } from 'styled-components';

import SFPixelateWoff from './Styles/Fonts/SFPixelate.woff';
import SFPixelateWoff2 from './Styles/Fonts/SFPixelate.woff2';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'SF Pixelate';
        src: url(${SFPixelateWoff2}) format('woff2'),
        url(${SFPixelateWoff}) format('woff');
    }
`;

export default FontStyles;