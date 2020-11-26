import React from 'react';
import { Link } from 'react-router-dom';
import * as mlAPI from '../services/api';
import '../App.css';
import logo from '../images/logo.svg';
import shoppingCart from '../images/shopping-cart.png';
import Card from './Card';
import Categories from '../components/Categories'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayOfItemByInputedText: [],
      searchElement: '',
      categoryId: '',
    };
    this.changeStateValue = this.changeStateValue.bind(this);
    this.fetchApiByQuery = this.fetchApiByQuery.bind(this);
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
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value });
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
          <Link to="/cart" data-testid="shopping-cart-button">
            <img
              className="shopping-cart-icon"
              alt="Shopping cart icon"
              src={shoppingCart}
            />
          </Link>
          <button
            data-testid="query-button" onClick={this.fetchApiByQuery} >Buscar</button>
        </header>
        <div>
          <Categories handleChange={this.changeStateValue}/>
        </div>
        <div>
          {arrayOfItemByInputedText
            .map((item) => <Card key={item.id} products={item} />)}
        </div>
      </div>
    );
  }
}

export default SearchBar;



