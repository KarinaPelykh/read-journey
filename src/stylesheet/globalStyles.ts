import 'modern-normalize';

import GilroyBold from '../assets/fonts/Gilroy-Bold.ttf';
import GilroyMedium from '../assets/fonts/Gilroy-Medium.ttf';
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`



@font-face {
  font-family: 'Gilroy-Bold';
  src:  url(${GilroyBold});
   font-weight: 700 ; 
}

@font-face {
  font-family: 'Gilroy-Medium';
  src:  url(${GilroyMedium});
   font-weight: 500 ; 
}

html {
  scroll-behavior: smooth;
}
body {
  font-family:'Gilroy-Medium';

  background:#141414;
  min-height:100vh;
 

}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  `;
export default GlobalStyles;
