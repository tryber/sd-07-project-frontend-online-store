import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import * as mlAPI from '../services/api';
import Categories from './Categories';


class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayOfCategories: [],
      loading: true,
      parameterSearch: '',
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

  getInputString(){
    this.setState({
      parameterSearch: valeu
    })
  }

  async getApiInfo() {
    // https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}.json();
    // onClick query == input
  }

  componentDidMount() {
    this.fetchCategories();
  }

  componentDidUpdate() {
    this.getApiInfo()
  }

  render() {
    const { arrayOfCategories, loading } = this.state;
    const loadingElement = <span>Carregando...</span>;
    
    return (
      <div className="header-container">
        <img className="logo" src={logo} alt="logo-react" />
        <div className="search">
            <div>
              <input type="text"></input>
              <div data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</div>
            </div>
          <div className="search-bar-content">
            <img className="search-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJTOvaCRMvUxPy8OR3W53CXP_eLOKV3QBaw&usqp=CAU" alt="search icon" />
            <input onChange={getInputString()} data-testid="query-input" className="search-bar" type="text" />
          </div>
          <div className="home-initial-message" data-testid="home-initial-message">
            <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          </div>
          <div>
            {loading ? loadingElement : arrayOfCategories.map((categorie) => <Categories key={categorie.id} categorie={categorie} />)}
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        </div>
        <button data-testid="query-button" onClick={()=>{this.getApiInfo()}} >Buscar</button>
      </div >
    );
  }
}

SearchBar.prototype = {}

export default SearchBar;
