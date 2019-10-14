import {createGlobalStyle} from 'styled-components';

import fonts from './fonts';
import colors from './colors';

const normalize = require('normalize.css');

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${normalize}

  * {
    box-sizing: border-box;
  }

  :root {
    ${colors}
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: var(--black);
    font-size: 16px;
  }
`;

export default GlobalStyle;
