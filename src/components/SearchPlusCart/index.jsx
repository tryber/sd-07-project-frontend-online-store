import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchPlusCart = ({ srchProd, handSrch, req, totalQty }) => (
  <>
    <input type="text" data-testid="query-input" onChange={ handSrch } />
    <button type="button" data-testid="query-button" onClick={ srchProd }>
      Pesquisar
    </button>
    <Link data-testid="shopping-cart-button" to="/cart">
      <i className="fas fa-shopping-cart" data-testid="shopping-cart-size">
        {totalQty}
      </i>
    </Link>
    <p data-testid="home-initial-message" hidden={ req }>
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  </>
);

export default SearchPlusCart;

SearchPlusCart.defaultProps = { totalQty: null };

SearchPlusCart.propTypes = {
  srchProd: PropTypes.func.isRequired,
  handSrch: PropTypes.func.isRequired,
  req: PropTypes.bool.isRequired,
  totalQty: PropTypes.string,
};
