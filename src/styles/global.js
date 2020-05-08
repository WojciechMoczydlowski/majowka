import { createGlobalStyle } from "styled-components";
import CaveatBold from "../assets/fonts/CaveatBold.ttf";
import CaveatRegular from "../assets/fonts/CaveatRegular.ttf";
import RobotoBold from "../assets/fonts/RobotoBold.ttf";
import RobotoRegular from "../assets/fonts/RobotoRegular.ttf";
const GlobalStyle = createGlobalStyle`
  * {
      box-sizing:border-box;
      
  }

  body {
     font-family: 'Roboto' ;
     font-size:18px;
     line-height:1.5;
  }

   @font-face {
        font-family: 'Roboto';
        src: local('Roboto'),
        url(${RobotoRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

      @font-face {
        font-family: 'Roboto';
        src: local('Roboto'),
        url(${RobotoBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
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
