import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Itens from './Itens';

class KartItens extends React.Component {
  render() {
    const { itensStorage, getStorageItens } = this.props;
    const zero = 0;
    const digitDotAfter = 2;
    const value = itensStorage.map((product) => product.price * product.qtt)
      .reduce((acc, valueActual) => acc + valueActual, zero);
    return (
      <div>
        {itensStorage.map((item) => (
          <Itens key={ item.id } item={ item } getStorageItens={ getStorageItens } />
        ))}
        <h1>{`Valor Final da Compra: R$${value.toFixed(digitDotAfter)}`}</h1>
        <Link
          data-testid="checkout-products"
          className="button-link"
          to="/pay"
        >
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

KartItens.propTypes = {
  itensStorage: PropTypes.arrayOf(PropTypes.object).isRequired,
  getStorageItens: PropTypes.func.isRequired,
};

export default KartItens;
