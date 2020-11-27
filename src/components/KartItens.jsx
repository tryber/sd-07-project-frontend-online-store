import React from 'react';
import PropTypes from 'prop-types';
import Itens from './Itens';

class KartItens extends React.Component {
  render() {
    const { itensStorage } = this.props;
    const value = 2000;
    return (
      <div>
        {itensStorage.map((itens) => (
          <Itens key={ itens.id } itens={ itens } />
        ))}
        <h1>{`Valor Final da Compra: R$${value}`}</h1>
        <button type="button">Finalizar Compra</button>
      </div>
    );
  }
}

KartItens.defaultProps = {
  itensStorage: [],
};

KartItens.propTypes = {
  itensStorage: PropTypes.arrayOf(PropTypes.object),
};

export default KartItens;
