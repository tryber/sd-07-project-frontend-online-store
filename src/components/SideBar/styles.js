import styled from 'styled-components';

export const SideBarContainer = styled.div`
background-color: white;
  border-right: 1px solid #0fa36b;
height: 100vh;
overflow: auto;
width: 20vw;
::-webkit-scrollbar {
  display: none;
}
`;

export const Logo = styled.h2`
  align-items: center;
  background-color: white;
  border-bottom: 5px solid #0fa36b;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 10px 0;
  position: fixed;
  width: 20vw;
  z-index: 10;
  img {
    border-radius: 5px;
    width: 44px;
  }
  p {
    margin: 0;
    padding: 0;
    color: #0fa36b;
  }

  @media (max-width: 720px) {
    p {
      display: none;
    }
  }

  @media (max-width: 900px) {
    p {
      font-size: 16px;
    }
  }
`;

export const SideBarContent = styled.div`
  background-color: #f5f5f5;
  box-sizing: border-box;
  margin-top: 50px;
  min-height: 100%;
  padding: 10px 0 10px 10px;
  position: relative;
  width: 100%;
`;

export const SideBarTitle = styled.h3`
  color: #0fa36b;
  width: 100%;
`;
