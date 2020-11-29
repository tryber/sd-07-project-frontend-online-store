import styled from 'styled-components';

export const CtnCenter = styled.div`
  /* background-color: yellow; */

  .ctn-main {
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 100vh;
    margin: 0 auto;

    .ctn-sidebar {
      /* background-color: yellow; */
      border: 1px solid black;
      width: 35%;
      height: 85vh;
      margin-top: 45px;
      overflow-y: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ctn-displayCard {
      /* background-color: pink; */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 65%;
      height: 85vh;
      margin-top: 45px;

      .displayCard {
        /* background-color: blueviolet; */
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 95%;
        height: 95vh;
        box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.68);
        border: 1px solid black;
        overflow-y: auto;
      }
    }
  }
`;
