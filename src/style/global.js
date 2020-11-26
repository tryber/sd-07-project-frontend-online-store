import { createGlobalStyle } from 'styled-components';
import resetCss from './reset';

export default createGlobalStyle`    
   
   
    ${resetCss}

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        background-color: #f5f5f5;
    }

    @keyframes is-rotating {
        to {
            transform: rotate(2turn);
        }
    }

`;
