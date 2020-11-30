import styled from 'styled-components';
import { subTitle } from '../../style/global';

export const ctnSideBar = styled.div`

  display: flex;
  flex-direction: column;
  width: 85%;
  height: 85vh;
  padding: 20px;

  .subTitle {
    ${subTitle}
    margin-bottom: 30px;
  }

  .ctn-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
  }

  .div-category {
    margin-bottom: 10px;

    .labelText {
      cursor: pointer;
      margin-left: 8px;
    }

  }
`;
