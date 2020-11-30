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
      /* border: 1px solid black; */
      width: 30%;
      height: 85vh;
      margin-top: 45px;
      overflow-y: auto;
      display: flex;
      align-items: center;
      justify-content: center;

      box-shadow: 1px 1px 1px 1px rgba(68, 68, 68, 0.68);

    }

    .ctn-displayCard {
      /* background-color: pink; */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 70%;
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
        box-shadow: 1px 1px 1px 1px rgba(68, 68, 68, 0.68);
        overflow-y: auto;
      }
    }
  }
`;
