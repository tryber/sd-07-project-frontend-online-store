import styled from 'styled-components';

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid black;
  padding: 5px 10px;
  transition: all ease 0.2s;
  outline: none;
  transform: scale(0.9);
  transform: all ease 0.2s;

  :hover {
    background-color: #f5f5f5;
    border: 1px solid dodgerblue;
    box-shadow: 0 0 5px 0 dodgerblue;
    cursor: pointer;
  }
  :active {
    border: 1px solid green;
    box-shadow: 0 0 5px 0 green;
    transform: scale(1);
  }
`;
