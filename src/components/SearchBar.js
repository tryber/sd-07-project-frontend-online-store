import React from 'react';
import { Link } from 'react-router-dom';
import * as mlAPI from '../services/api';
import '../App.css';
import logo from '../images/logo.svg';
import Card from './Card';
import Categories from '../components/Categories'
import GetIcon from './Icons';

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
          <Link to="/cart" data-testid="shopping-cart-button">
            <GetIcon className="shopping-cart-icon" name="ShoppingCartIcon" />
          </Link>
        </header>
        <div className="container">
          <section className="categories-list">
            <Categories handleChange={this.changeStateValue}/>
          </section>
          <section className="product-list">
            {arrayOfItemByInputedText
              .map((item) => <Card key={item.id} products={item} />)}
          </section></div>
      </div>
    );
  }
}

export default SearchBar;
