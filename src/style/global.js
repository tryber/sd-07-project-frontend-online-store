import { createGlobalStyle, css } from 'styled-components';
import resetCss from './reset';

export const title = css`
  font-size: 24px;
  font-weight: 700;
`;

export const subTitle = css`
  font-size: 20px;
`;

export const text = css`
  font-size: 15px;
`;

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
