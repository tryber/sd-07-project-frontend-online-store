import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { searchTerms, handleSearchTerms } = this.props;

    return (
      <div>
        <form>
          <input
            type="text"
            data-testid="query-input"
            value={ searchTerms }
            onChange={ handleSearchTerms }
          />

          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.fetchAPI }
          >
            buscar
          </button>
        </form>

        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          ShoppingCart
        </Link>
      </div>
    );
  }
}

Header.propTypes = {
  searchTerms: PropTypes.string.isRequired,
  handleSearchTerms: PropTypes.func.isRequired,
};

export default Header;
