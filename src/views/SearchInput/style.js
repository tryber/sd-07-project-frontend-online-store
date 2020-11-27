import styled from 'styled-components';

export const ctnCenter = styled.div`
  margin: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 85%;
  align-content: center;
  /* background-color: red; */

  .ctn-search-bar {
    /* background-color: gray; */
    position: relative;
    display: flex;
    align-items: center;
    padding: 2px;

    width: 70%;
    /* height: 10px; */

    border-radius: 10px;
    border: 1px solid black;

    &:focus {
      border: 1px solid dodgerblue;
    }
    .input {
      border: none;
      padding-left: 30px;
      flex: 1;

      :focus {
        border: none;
        box-shadow: none;
      }
    }
    .input:focus + .icon-search {
      transform: scale(1);
    }

    .icon-search {
      position: absolute;
      top: 5px;
      left: 7px;
      align-self: center;
      z-index: 1;
      font-size: 1.2em;
      transform: scale(0.8);
    }
  }

`;
