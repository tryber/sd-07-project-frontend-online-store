import styled from 'styled-components';

export const Header = styled.header`
  background: linear-gradient(to right, #1eff9080, #1e90ff, #08264298);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;

  .ctn-center {
    border: 1px solid black;
    width: 85%;
    display: flex;
    padding: 16px;
    align-items: center;
    justify-content: space-between;
  }
`;
