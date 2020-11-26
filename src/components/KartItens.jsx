import React from 'react';
import PropTypes from 'prop-types';

class KartItens extends React.Component {
  render() {
    const { itensStorage } = this.props;
    return (
      <div>
        {itensStorage.map(({ title, thumbnail, price, id, qtt }) => (
          <div key={ id }>
            <h1 data-testid="shopping-cart-product-name">{title}</h1>
            <img src={ thumbnail } alt={ title } />
            <span data-testid="shopping-cart-product-quantity">
              {`Quantidade: ${qtt}`}
            </span>
            <span>{price}</span>
          </div>
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
