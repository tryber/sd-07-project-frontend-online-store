import styled from 'styled-components';

export const Ctn = styled.div`
  background-color: gray;
  height: 100vh;
  width: 80%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;

  .icon-ctn {
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-top: 50px;
  }

  .ctn-item-display {
    border: 1px solid black;
    width: 70%;
    height: 70vh;
    margin: 30px 0;
    display: flex;
    justify-content: baseline;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
  }
`;
