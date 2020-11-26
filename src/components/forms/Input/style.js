/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Input = styled.input`
  background-color: #f5f5f5;
  border: 1px solid black;
  padding: 5px 10px;
  outline: none;
  transition: all ease 0.2s;
  :focus {
    border: 1px solid green;
    box-shadow: 0 0 5px 0 green;
  }
`;
