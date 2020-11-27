import * as icon from 'react-icons/fa';
import styled, { css } from 'styled-components';

const styledIconGlobal = css`
  font-size: 2.5em;
  color: dodgerblue;
  transform: scale(0.8);
  transition: all ease 0.2s;


  :hover {
    transform: scale(1);

  }
`;

export const Cart = styled(icon.FaCartPlus)`

  ${styledIconGlobal}
`;

export const Plus = styled(icon.FaPlus)`
  ${styledIconGlobal}


`;

  transform: scale(1);
  :active {
    transform: scale(1.1);
  }

`;

export const Minus = styled(icon.FaMinus)`
  ${styledIconGlobal}


`;


  transform: scale(1);
  :active {
    transform: scale(1.1);
  }


`;

export const Search = styled(icon.FaSearch)`
  ${styledIconGlobal}
  transform: scale(1);
`;

export const Star = styled(icon.FaStar)`
  ${styledIconGlobal};
  transform: scale(1);
  color: ${(props) => props.color};
`;

export const Back = styled(icon.FaArrowLeft)`
  ${styledIconGlobal};
`;

export const Close = styled(icon.FaWindowClose)`
  ${styledIconGlobal};
  :active {
    transform: scale(1.1);
  }
`;

