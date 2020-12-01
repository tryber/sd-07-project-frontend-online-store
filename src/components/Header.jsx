import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import KartImg from '../img/kart.svg';
import LogoImg from '../img/Logo.svg';
import SearchInput from './SearchInput';
// import * as storageServices from '../services/storageServices';

class Header extends React.Component {
  // constructor() {
  //   super();
  //   this.getStorageItens = this.getStorageItens.bind(this);
  //   this.state = { qttItemsKart: 0 };
  // }

  // componentDidMount() {
  //   this.getStorageItens();
  // }

  // async getStorageItens() {
  //   const itensStorage = await storageServices.getProductsStorage();
  //   const zero = 0;
  //   const qttItemsKart = itensStorage.map((product) => product.qtt)
  //     .reduce((acc, valueActual) => acc + valueActual, zero);
  //   this.setState({ qttItemsKart });
  // }

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
          <img src={ KartImg } className="kart-icon" alt="Botão carrinho de compras" />
          <div
            className="qtt-items-kart"
            data-testid="shopping-cart-size"
          >
            { qttItemsKart }
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
