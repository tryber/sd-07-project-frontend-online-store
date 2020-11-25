import React from 'react';
import logo from '../logo.svg';
import * as mlAPI from '../services/api';
import Categories from './Categories';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayOfCategories: [],
      loading: true,
    }
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

  componentDidMount() {
    this.fetchCategories();
  }
  render() {
    const { arrayOfCategories, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;
    return (
      <div className="header-container">
        <Router>
          <Link to="/">
            <img className="logo" src={logo} alt="logo-react" />
          </Link>
        </Router>
        <div className="search">
          <div className="search-bar-content">
            <img className="search-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJTOvaCRMvUxPy8OR3W53CXP_eLOKV3QBaw&usqp=CAU" alt="search icon" />
            <input className="search-bar" type="text" />
          </div>
          <div className="home-initial-message" data-testid="home-initial-message">
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </div>
          <div>
            {loading ? loadingElement : arrayOfCategories.map((categorie) => <Categories key={categorie.id} categorie={categorie} />)}
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        </div>
        <Router>
          <Link to="/cart">Cart</Link>
        </Router>
      </div >
    );
  }
}

export default SearchBar;
