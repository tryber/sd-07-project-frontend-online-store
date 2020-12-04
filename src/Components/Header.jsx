import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import icon from '../shopping-cart.svg';

class Header extends React.Component {
  render() {
    const { getProducts, searchBar } = this.props;
    return (
      <div className="container-header">
        <div className="inner-container">
          <div className="logo">
            <h1>Shopping</h1>
          </div>
          <div className="input-serch">
            <input
              type="text"
              placeholder="Buscar"
              className="input"
              id="search-input"
              data-testid="query-input"
              onChange={ searchBar }
            />
            <button
              className="btn-search"
              type="submit"
              onClick={ getProducts }
              data-testid="query-button"
            >
              Buscar
            </button>
          </div>
          <div className="cart-icon">
            <Link to="/cart/0" data-testid="shopping-cart-button">
              <img src={ icon } alt="cart-icon" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}


Header.propTypes = {
  getProducts: PropTypes.func.isRequired,
  searchBar: PropTypes.func.isRequired,
};

export default Header;
