import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import KartImg from '../img/kart.svg';
import LogoImg from '../img/Logo.svg';
import SearchInput from './SearchInput';

class Header extends React.Component {
  render() {
    const { searchInput, onInputSearchChange, buttonSearch, qttItemsKart } = this.props;
    return (
      <header className="online-store-header">
        <Link to="/">
          <img src={ LogoImg } alt="Imagem da Logo" />
        </Link>
        <SearchInput
          searchInput={ searchInput }
          onInputSearchChange={ onInputSearchChange }
          buttonSearch={ buttonSearch }
        />
        <Link data-testid="shopping-cart-button" to="/kart">
          <div className="qtt-items-kart">
            <img src={ KartImg } className="kart-icon" alt="Botão carrinho de compras" />
            <div
              className="qtt-items-kart"
              data-testid="shopping-cart-size"
            >
              { qttItemsKart }
            </div>
          </div>
        </Link>
      </header>
    );
  }
}

Header.defaultProps = {
  searchInput: '',
  onInputSearchChange: () => {},
  buttonSearch: () => {},
  qttItemsKart: 0,
};

Header.propTypes = {
  searchInput: PropTypes.string,
  onInputSearchChange: PropTypes.func,
  buttonSearch: PropTypes.func,
  qttItemsKart: PropTypes.number,
};

export default Header;
