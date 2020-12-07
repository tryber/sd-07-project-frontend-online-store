import React from 'react';

import SideBar from '../../components/SideBar';
import MainContent from '../../components/MainContent';

import {
  LayoutContainer,
  LayoutContent,
} from './styles';

class Layout extends React.Component {
  render() {
    return (
      <LayoutContainer>
        <SideBar />
        <LayoutContent>
          <MainContent />
        </LayoutContent>
      </LayoutContainer>
    );
  }
}

export default Layout;
