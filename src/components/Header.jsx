import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import KartImg from '../img/kart.svg';

class Header extends React.Component {
  render() {
    const { searchInput, onInputSearchChange, buttonSearch } = this.props;
    return (
      <header className="online-store-header">
        <input
          data-testid="query-input"
          type="text"
          name="inputSearch"
          value={ searchInput }
          onChange={ onInputSearchChange }
        />
        <button data-testid="query-button" type="submit" onClick={ buttonSearch }>
          Buscar
        </button>
        <Link data-testid="shopping-cart-button" to="/kart">
          <img src={ KartImg } className="kart-icon" alt="Botão carrinho de compras" />
        </Link>
      </header>
    );
  }
}

Header.defaultProps = {
  searchInput: '',
};

Header.propTypes = {
  searchInput: PropTypes.string,
  onInputSearchChange: PropTypes.func.isRequired,
  buttonSearch: PropTypes.func.isRequired,
};

export default Header;
