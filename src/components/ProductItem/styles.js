import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  max-width: 250px;
  padding: 10px;
  width: 100%;
`;

export const ProductItemContent = styled.div`
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px 0.2px gray;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: -30px;
  padding: 10px;
  width: 100%;
`;

export const ProductItemTitle = styled.h4`
  color: #5c687c;
  text-align: center;
`;

export const ProductItemPrice = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ProductItemImage = styled.img``;

export const ProductItemButtonAdd = styled.button`
  background-color: #0fa36b;
  border: 1px solid gray;
  border-radius: 5px;
  color: white;
  line-height: 25px;
  width: 100%;
`;
