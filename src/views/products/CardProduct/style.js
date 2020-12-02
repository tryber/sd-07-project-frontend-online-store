import styled from 'styled-components';
import { text } from '../../../style/global';

export const cpnCenter = styled.div`
  background-color: #f5f5f5;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  height: 42vh;
  margin: 10px;
  border-radius: 10px;

  .ctn-title {
    /* background-color: blue; */
    width: 100%;
    height: 8vh;
    padding: 10px;
    overflow: hidden;
    margin-bottom: 10px;

    .text {
      ${text}
      line-height: 17px;
    }
  }

  .links {
    text-decoration: none;
    margin: 5px 0 10px;
  }

  .button {
    width: 80%;
    padding: 10px;
  }
`;

export default cpnCenter;
