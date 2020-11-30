import styled from 'styled-components';

export const ctnCenter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;

  /* background-color: red; */

  .ctn-badge {
    position: relative;
  }
  .badge {
    position: absolute;
    border: 1px solid black;
    padding: 3px;
    border-radius: 5px;
    top: 0;
    left: 30px;
    z-index: 1;
    font-weight: 700;
    font-size: 10px;
    transform: scale(1.2);
  }

  .ctn-search-bar {
    /* background-color: gray; */
    position: relative;
    display: flex;
    align-items: center;
    width: 67%;

    .input {
      padding-left: 30px;
      border-radius: 10px;
      flex: 1;
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
