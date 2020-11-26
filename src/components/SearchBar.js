import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import * as mlAPI from '../services/api';
import Categories from './Categories';
import Card from './Card'


class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayOfCategories: [],
      arrayOfItemByInputedText: [],
      searchElement: '',
      category: '',
      loading: true,
    }
    this.changeStateValue = this.changeStateValue.bind(this);
    this.fetchApiByQuery = this.fetchApiByQuery.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.fetchApiByQuery();
  }

  async fetchCategories() {
    this.setState(
      { loading: true },
      async () => {
        const categoriesFromApi = await mlAPI.getCategories();
        this.setState({
          loading: false,
          arrayOfCategories: categoriesFromApi,
        });
      });
  }

  async fetchApiByQuery() {
    this.setState(
      { loading: true },
      async () => {
        const segmentedItens = await mlAPI.getProductsFromCategoryAndQuery(this.state.category, this.state.searchElement);
        this.setState({
          loading: false,
          arrayOfItemByInputedText: [...segmentedItens.results],
        });
      });
  }

  changeStateValue(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { arrayOfCategories, loading, arrayOfItemByInputedText } = this.state;
    const loadingElement = <span>Carregando...</span>;
    return (
      <div>
        <header className="header-container">
          <img className="logo" src={logo} alt="logo-react" />
          <div className="search">
            <div className="search-bar-content">
              <img className="search-icon"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJTOvaCRMvUxPy8OR3W53CXP_eLOKV3QBaw&usqp=CAU"
                alt="search icon" />
              <input
                data-testid="query-input"
                className="search-bar"
                type="text"
                value={this.state.searchElement}
                name="searchElement"
                onChange={this.changeStateValue} />
            </div>
            <div className="home-initial-message" data-testid="home-initial-message">
              <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
            </div>
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
          <button data-testid="query-button" onClick={this.fetchApiByQuery} >Buscar</button>
        </header >
        <div>
          {loading ? loadingElement : arrayOfCategories.map((categorie) => <Categories key={categorie.id} categorie={categorie} />)}
        </div>
        <div>
          {arrayOfItemByInputedText.map((item) => <Card key={item.id} products={item} />)}
        </div>
      </div>
    );
  }
}

export default SearchBar;