import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Categories, SearchBar, ProductList } from './index';

class Home extends Component {
  constructor() {
    super();

    this.getHandle = this.getHandle.bind(this);

    this.state = {
      category: '',
      search: '',
    };
  }

  getHandle({ target }) {
    const { name } = target;
    let { value } = target;

    if (name === 'search') {
      value = target.previousElementSibling.value;
    }
    this.setState(() => ({ [name]: value }));
  }

  render() {
    const { search, category } = this.state;
    const message = 'Digite algum termo de pesquisa ou escolha uma categoria.';

    return (
      <div className="home">
        <div>
          <Categories callback={ this.getHandle } />
        </div>
        <div className="SearchBar-products">
          <div className="searchBar-car">
            <SearchBar onClick={ this.getHandle } />
            <Link data-testid="shopping-cart-button" to="/shoppingcart">
              <FontAwesomeIcon icon={ faShoppingCart } />
            </Link>
          </div>
          {(category !== '' || search !== '')
            ? <ProductList data={ this.state } />
            : <p data-testid="home-initial-message">{message}</p>}
        </div>
      </div>
    );
  }
}

export default Home;
