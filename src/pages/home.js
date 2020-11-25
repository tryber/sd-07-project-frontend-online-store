import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../images/CartIcon.png';
import { getProductsFromCategoryAndQuery } from '../services/api';
import FilterList from '../filterList';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

class home extends Component {
  constructor(props) {
    super(props);
    this.changeSelected = this.changeSelected.bind(this);
    this.inputEvent = this.inputEvent.bind(this);
    this.state = {
      category: '$CATEGORY_ID',
      query: '$QUERY',
      products: [],
    };
  }
  
  changeSelected(item) {
    const { category } = this.state;
    this.setState({ category: item });
    console.log(category);
  }

  componentDidMount() {
    this.fecthProducts();
  }

  async fecthProducts() {
    const { category, query } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category, query);
    this.setState({ products: results });
  }

  async inputEvent(value) {
    await this.setState({ query: value });
    this.fecthProducts();
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <SearchBar query={ this.inputEvent } />
        <Link to="/shoppingCart">
          <img
            src={ CartIcon }
            width="70"
            height="70"
            alt="shopping-cart-icon"
            data-testid="shopping-cart-button"
          />
        </Link>
        <FilterList changeSelected={ this.changeSelected } />
        <div>
          {
            products
              .map((product) => <ProductCard key={ product.id } product={ product } />)
          }
        </div>
      </div>
    );
  }
}
export default home;
