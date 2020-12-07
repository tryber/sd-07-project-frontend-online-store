import React from 'react';

import Categories from '../Categories';

import {
  Logo,
  SideBarContainer,
  SideBarContent,
  SideBarTitle,
} from './styles';

import trybeLogo from '../../assets/images/trybe-logo.jpg';

class SideBar extends React.Component {
  render() {
    return (
      <SideBarContainer>
        <Logo>
          <img src={ trybeLogo } alt="trybe" />
          <p>ShoppingTryber</p>
        </Logo>
        <SideBarContent>
          <SideBarTitle>Filtrar por</SideBarTitle>
          <Categories />
        </SideBarContent>
      </SideBarContainer>
    );
  }
}

export default SideBar;
