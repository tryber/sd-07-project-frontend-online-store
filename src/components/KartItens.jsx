import React from 'react';
import PropTypes from 'prop-types';
import Itens from './Itens';

class KartItens extends React.Component {
  render() {
    const { itensStorage } = this.props;
    return (
      <div>
        {itensStorage.map((itens) => (
          <Itens key={ itens.id } itens={ itens } />
        ))}
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
