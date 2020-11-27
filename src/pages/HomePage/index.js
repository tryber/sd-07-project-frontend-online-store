import React from 'react';

import { HomeContainer, Wrapper } from './styles';
import Categories from '../../components/Categories';
import Main from '../../components/Main';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: '',
    };
  }

  selectCategory({ target }) {
    const { id } = target;
    this.setState({ selectedCategory: id });
  }

  render() {
    const { selectedCategory } = this.state;
    return (
      <HomeContainer>
        <Wrapper>
          <Categories selectCategory={ this.selectCategory } />
          <Main selectedCategory={ selectedCategory } />
        </Wrapper>
      </HomeContainer>
    );
  }
}

export default HomePage;
