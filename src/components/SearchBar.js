import React from 'react';
import { Link } from 'react-router-dom';
import * as mlAPI from '../services/api';
import '../App.css';
import logo from '../images/logo.svg';
import Card from './Card';
import Categories from '../components/Categories';
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
      counter: this.updateCounter(),
    };
  }

  componentDidMount() {
    this.fetchApiByQuery();
  }

  async fetchApiByQuery() {
    this.setState(
      async () => {
        const segmentedItens = await mlAPI
          .getProductsFromCategoryAndQuery(this.state.categoryId, this.state.searchElement);
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
      return {...state, counter: newState};
    }
    const productList = JSON.parse(localStorage.getItem('cartItems'));
    return productList != null ? productList.length : 0;
  }
  productsCounter() {
    const productList = JSON.parse(localStorage.getItem('cartItems'));
    const newState = productList != null ? productList.reduce((acc, cur) => acc + cur.quantity,0) : 0;
    this.setState(this.updateCounter(this.state, true, newState));
  }

  render() {
    const { arrayOfItemByInputedText } = this.state;
    return (
      <div>
        <header className="header-container">
          <Link to="/">
            <img className="logo" src={logo} alt="logo-react" />
          </Link>
          <div className="search">
            <div className="search-bar-content">
              <button
                className="search-button"
                data-testid="query-button"
                onClick={this.fetchApiByQuery}
              >
                <GetIcon className="search-button-icon" name="SearchIcon" />
              </button>
              <input
                data-testid="query-input"
                className="search-bar"
                type="text"
                value={this.state.searchElement}
                name="searchElement"
                onChange={this.changeStateValue}
              />
            </div>
            <div className="home-initial-message" data-testid="home-initial-message">
              <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
            </div>
          </div>
          <Link to="/cart" className="shopping-cart-button" data-testid="shopping-cart-button">
            <GetIcon className="shopping-cart-icon" name="ShoppingCartIcon" />
          </Link>
          <ProductsCartCounter counter={this.state.counter} />
        </header>
        <div className="container">
          <section className="categories-list">
            <Categories handleChange={this.changeStateValue}/>
          </section>
          <section className="product-list">
            {arrayOfItemByInputedText
              .map((item) => <Card
                key={item.id} 
                products={item} 
                onAdd={this.productsCounter}
                counter={this.state.counter}
              />)}
          </section></div>
      </div>
    );
  }
}

export default SearchBar;
