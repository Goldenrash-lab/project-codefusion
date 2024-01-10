import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}

img {
  display: block;
}
a {
  text-decoration: none;
  color: inherit;
}

`;

export default Global;
