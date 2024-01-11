import { createGlobalStyle } from 'styled-components';
import background from '../images/iMac.jpg';
export const Global = createGlobalStyle`

h1,
h2,
h3,
h4,
h5,
h6,
p {
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

body{
     font-family: 'Poppins-Regular';
  font-weight: 400;
  font-size: 18px;
  height: 100vh;
  color: var(--white);
  background: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

`;

export default Global;
