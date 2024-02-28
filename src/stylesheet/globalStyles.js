import "modern-normalize";
import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

html {
  scroll-behavior: smooth;
}
body {
  font-family:'Roboto' sans-serif;
 
  background:#141414;
  min-height:100vh;
  color:#F9F9F9

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
