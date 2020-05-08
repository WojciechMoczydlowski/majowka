import { createGlobalStyle } from "styled-components";
import CaveatBold from "../assets/fonts/CaveatBold.ttf";
import CaveatRegular from "../assets/fonts/CaveatRegular.ttf";
const GlobalStyle = createGlobalStyle`
  * {
      box-sizing:border-box;
      
  }

  body {
     font-family: 'Caveat' ;
     font-size:28px;
  }

   @font-face {
        font-family: 'Caveat';
        src: local('Caveat'),
        url(${CaveatRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

      @font-face {
        font-family: 'Caveat';
        src: local('Caveat'),
        url(${CaveatBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
`;

export default GlobalStyle;
