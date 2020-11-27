import styled from 'styled-components';

export const ButtonCategory = styled.button`
  background-color: ${(props) => (props.toggle ? '#000' : '#E8265E')};
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
