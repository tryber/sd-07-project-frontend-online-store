import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import icon from '../shopping-cart.svg';
import iconSearch from '../search.svg';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Header extends React.Component {
  componentDidUpdate() {
    const { listProduct } = this.state;
    this.getProducts(listProduct);
  }

  async getProducts(key) {
    const input = document.getElementById('search-input');
    const response = await getProductsFromCategoryAndQuery(input);
    this.setState({ [key]: response });
  }

  render() {
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
             />
            <button 
            className="btn-search"
            type="submit" 
            onClick={ this.getProducts } 
            data-testid="query-button"
             >
              <img src={ iconSearch } alt="Search-icon" />
            </button>
          </div>
          <div className="cart-icon">
            <Link to="/cart" data-testid="shopping-cart-button">
              <img src={ icon } alt="cart-icon" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// Header.defaultProps = {
//   searchInput: '',
// };

// Header.propTypes = {
//   searchInput: PropTypes.string,
//   onInputSearchChange: PropTypes.func.isRequired,
//   buttonSearch: PropTypes.func.isRequired,
// };

export default Header;
