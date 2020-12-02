import React from 'react';
import { Link } from 'react-router-dom';
import * as mlAPI from '../services/api';
import '../App.css';
import logo from '../images/logo.svg';
import Card from './Card';
import Categories from './Categories';
import GetIcon from './Icons';
import ProductsCartCounter from './ProductsCartCounter';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.changeStateValue = this.changeStateValue.bind(this);
    this.fetchApiByQuery = this.fetchApiByQuery.bind(this);
    this.productsCounter = this.productsCounter.bind(this);
    this.updateCounter = this.updateCounter.bind(this);

    this.state = {
      arrayOfItemByInputedText: [],
      searchElement: '',
      categoryId: '',
      counter: 0,
    };
  }

  componentDidMount() {
    this.fetchApiByQuery();
  }

  async fetchApiByQuery() {
    this.setState(
      async () => {
        const { categoryId, searchElement } = this.state;
        const segmentedItens = await mlAPI
          .getProductsFromCategoryAndQuery(
            categoryId, searchElement,
          );
        this.setState({
          arrayOfItemByInputedText: [...segmentedItens.results],
        });
      },
    );
  }

  changeStateValue(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateCounter(state, update, newState) {
    if (update) {
      return { ...state, counter: newState };
    }
    const products = JSON.parse(localStorage.getItem('cartItems'));
    const zero = 0;
    return products != null ? products.length : zero;
  }

  productsCounter() {
    // Requisito 13 não funciona
    // const prod = JSON.parse(localStorage.getItem('cartItems'));
    // const zero = 0;
    // const nSt = prod != null ? prod.reduce((acc, cur) => acc + cur.quantity, zero) : zero;
    // this.setState(this.updateCounter(this.state, true, nSt));
    this.setState((estadoAnterior) => ({ counter: estadoAnterior.counter + 1 }));
  }

  render() {
    const { arrayOfItemByInputedText, searchElement, counter } = this.state;
    return (
      <div>
        <header className="header-container">
          <Link to="/">
            <img className="logo" src={ logo } alt="logo-react" />
          </Link>
          <div className="search">
            <div className="search-bar-content">
              <input
                data-testid="query-input"
                className="search-bar"
                type="text"
                value={ searchElement }
                name="searchElement"
                onChange={ this.changeStateValue }
              />
              <button
                type="button"
                className="search-button"
                data-testid="query-button"
                onClick={ this.fetchApiByQuery }
              >
                <GetIcon className="search-button-icon" name="SearchIcon" />
              </button>
            </div>
            <div className="home-initial-message" data-testid="home-initial-message">
              <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
            </div>
          </div>
          <Link to="/cart" className="shopping-btn" data-testid="shopping-cart-button">
            <GetIcon className="shopping-cart-icon" name="ShoppingCartIcon" />
          </Link>
          <ProductsCartCounter counter={ counter } />
        </header>
        <div className="container">
          <section className="categories-list">
            <Categories handleChange={ this.changeStateValue } />
          </section>
          <section className="product-list">
            {arrayOfItemByInputedText
              .map((item) => (<Card
                key={ item.id }
                products={ item }
                onAdd={ this.productsCounter }
                counter={ counter }
              />))}
          </section>
        </div>
      </div>
    );
  }
}

export default SearchBar;
