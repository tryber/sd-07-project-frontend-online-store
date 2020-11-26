import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import ProductList from './ProductList';
import * as api from '../services/api';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelected = this.handleSelected.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      inputValue: '',
      products: [],
      selected: 'Mais Categorias',
      selectedId: 'MLB1953',
      requested: false,
      cartProduct:''
    }
  }

  handleSearch({ target: { value } }) {
    this.setState({ inputValue: value });
  }

  handleSelected({ target: { value, id } }) {
    this.setState({ selected: value, selectedId: id });
    this.searchProducts(this.state.inputValue, id);
  }

  async searchProducts(query, category) {
    const response = await api.getProductsFromCategoryAndQuery(category, query);
    const products = response.results;

    return this.setState({ products, requested: true })
  }

  addToCart({ target }) {
    this.setState({ cartProduct: target.value });
  }

  productsList() {
    return this.state.products.map(({ title, id, thumbnail, price}) => (

      <ProductList key={id} title={title} image={thumbnail} price={price} id={id} buttonValue={this.addToCart} />
      
    ));
  }

  render() {
    const { inputValue, requested, selected, selectedId ,cartProduct } = this.state;

    return (
      <div>
        <input type="text" data-testid="query-input" onChange={this.handleSearch} />
        <button type="button" data-testid="query-button" onClick={() => this.searchProducts(inputValue, selectedId)}>Pesquisar</button>
        <Link data-testid="shopping-cart-button" to={{ pathname: "/cart", state: { cartProduct }}}>
            <i className="fas fa-shopping-cart" />
        </Link>
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <Category handleSelected={this.handleSelected} selected={selected} />
        { requested ? this.productsList() : '' } 
      </div>
    );
  }
}

export default Main;
