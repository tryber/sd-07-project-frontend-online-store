import styled from 'styled-components';
import { ShoppingCart } from 'styled-icons/entypo';

export const CardDetailsContainer = styled.div``;

export const CardDetailsContent = styled.div`
align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h2``;

export const Price = styled.span``;

export const Image = styled.img`
max-width: 200px;
`;

export const ShoppingCartIcon = styled(ShoppingCart)`
  height: 50px;
  width: 50px;
`;
