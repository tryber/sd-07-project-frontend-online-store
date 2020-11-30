import styled from 'styled-components';
import * as global from '../../style/global';

export const Ctn = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100vh;

  .ctn-icons {
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    .title {
      ${global.title}
      align-self: flex-end;
    }
  }
  .ctn-main {
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 55vh;
    box-shadow: 1px 1px 1px 1px rgba(68, 68, 68, 0.6);
    background-color: #fff;

    .ctn-display {
      border: 1px solid rgba(68, 68, 68, 0.3);
      /* background-color: #f5f5f5; */
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 45%;
      height: 50vh;

      img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
      }

      .ctn-inputs {
        /* border: 1px solid black; */
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 75%;
        height: 15vh;

        .ctn-amount {
          /* border: 1px solid black; */
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 30%;
          height: 15vh;

          .amount {
            ${global.subTitle}
            align-self: center;
          }
        }
        .button {
          font-size: 18px;
          padding: 16px;
        }
      }
    }
    .ctn-texts {
      /* border: 1px solid black; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 40%;
      height: 40vh;

      .subTitle {
        ${global.subTitle}
        align-self: flex-start;
        padding: 0 5px;
      }
      .text {
        ${global.text}
        padding: 0 5px;
      }
    }
  }
  .ctn-evaluator {
    /* border: 1px solid black; */
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
    width: 80%;
    height: 30vh;
    box-shadow: 1px 1px 1px 1px rgba(68, 68, 68, 0.6);

    .ctn-width {
      /* border: 1px solid blue; */
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;
      height: 25vh;
    }

    .subTitle {
      font-size: 22px;
      font-weight: 700;
      padding-bottom: 5px;
    }
    .ctn-inputAndStar {
      /* border: 1px solid black; */
      display: flex;
      align-items: center;
      justify-content: space-between;

      .input {
        width: 50%;
      }
    }
    .textArea {
      width: 97%;
      height: 12vh;
      background-color: #f5f5f5;
      border: 1px solid black;
      padding: 5px 10px;
      outline: none;
      transition: all ease 0.2s;
      :focus {
        border: 1px solid green;
        box-shadow: 0 0 5px 0 green;
      }
    }
  }
`;
