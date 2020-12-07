import styled from 'styled-components';
import { ShoppingCart } from 'styled-icons/entypo';

export const HeaderContainer = styled.div`
background-color: #0fa36b;
  border-bottom: 5px solid #0fa36b;
box-sizing: border-box;
padding: 10px;
position: fixed;
width: 100%;
`;

export const HeaderContent = styled.div`
display: flex;
justify-content: space-between;
width: 79%;
  a {
    border: 1px solid white;
    border-radius: 8px;
  }
`;

export const SearchLabel = styled.label`
display: flex;
a {
  border: 1px solid gray;
  border-radius: 8px;
  background-color: #fff;
  color: #0fa36b;
  font-weight: bold;
  line-height: 40px;
  padding: 0 4px;
  text-decoration: none;
}
  a:hover {
    color: #5c687c;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid gray;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 40px;
  margin-right: 10px;
  padding-left: 10px;
  width: 600px;
`;

export const CartIcon = styled(ShoppingCart)`
height: 40px;
width: 40px;
  color: white;
`;
