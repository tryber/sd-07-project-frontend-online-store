import React from 'react';

import { HomeContainer, Wrapper } from './styles';
import Categories from '../../components/Categories';
import Search from '../../components/Search';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedCategory: '',
      products: [],
    };
    this.updateProducts = this.updateProducts.bind(this);
  }

  updateProducts(products) {
    this.setState({ products });
  }

  selectCategory({ target }) {
    const { id } = target;
    this.setState({ selectedCategory: id });
  }

  render() {
    const { products, selectedCategory } = this.state;
    return (
      <HomeContainer>
        <Wrapper>
          <Categories selectCategory={ this.selectCategory } />
          <Search
            selectedCategory={ selectedCategory }
            updateProducts={ this.updateProducts }
          />
        </Wrapper>
      </HomeContainer>
    );
  }
}

export default HomePage;
