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
      category: '',
      query: '',
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async changeSelected(id) {
    await this.setState({ category: id });
    this.fetchProducts();
  }

  async fetchProducts() {
    const { category, query } = this.state;
    const response = await getProductsFromCategoryAndQuery(category, query);
    this.setState({ products: response?.results || [] });
  }

  async inputEvent(value) {
    await this.setState({ query: value });
    this.fetchProducts();
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <section className="cabecalho">
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
          <SearchBar query={ this.inputEvent } fetchProducts={this.fetchProducts} />
          <Link to="/shoppingCart">
            <img
              src={ CartIcon }
              width="50"
              height="50"
              alt="shopping-cart-icon"
              data-testid="shopping-cart-button"
            />
          </Link>
        </section>

        <section className="productSection">
          <FilterList changeSelected={ this.changeSelected } />
          <div className="productList">
            {
              products
                .map((product) => <ProductCard key={ product.id } product={ product } />)
            }
          </div>
        </section>


      </div>
    );
  }
}
export default home;
