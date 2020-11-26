import React, { Component } from 'react';
import ProductList from '../components/ProductList/ProductList';
import ShoppingCartButton from '../components/ShoppingCartButton/ShoppingCartButton';
import CategoryList from '../components/CategoryList/CategoryList';
import * as api from '../services/api';

class HomePage extends Component {
 constructor(props) {
    super(props);
    this.renderProducts = this.renderProducts.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.state = {
      categoryIdSelected: '',
      searchInput: '',
      productList: [],
    };
  }
  
  async renderProducts() {
    const { searchInput, categoryIdSelected } = this.state;
    const filteredProducts = await api.getProductsFromCategoryAndQuery(categoryIdSelected, searchInput);
    this.setState({ productList: filteredProducts })
  }

  onChangeCategory({ target }) {
    this.setState({
      categoryIdSelected: target.id
    }, () => this.renderProducts())
  }
>>>>>>> 25fe1fb8c07af36071eacdb69294476c5b915e84

  render() {
    const { categoryIdSelected} = this.state;
    return (
      <div>
        <ShoppingCartButton />
        <ProductList categoryId={ categoryIdSelected } />
        <CategoryList onChangeCategory={ this.onChangeCategory } />
      </div>
    );
  }
}

export default HomePage;
