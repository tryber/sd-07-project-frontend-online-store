import styled from 'styled-components';

export const cpnCenter = styled.div`
    
    margin: 50px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: red;

    .search-bar {
      position: relative;
      background-color: gray;
      display: flex;
      padding: 2px;
      width: 600px;
      
      .icon-search {
        
        top: 0;
        left: 0;
        align-self: center;
        order: -1;
      }
    
    }
    
`;
