import React from 'react';
import PropTypes from 'prop-types';

class ItemCart extends React.Component {
  render() {
    const { name, price, qtde } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{name}</h3>
        <p>
          Valor Unitário:
          {price}
        </p>
        <p data-testid="shopping-cart-product-quantity">{qtde}</p>
        <p>
          Total:
          {parseFloat(price) * qtde}
        </p>
      </div>
    );
  }
}

export default ItemCart;

ItemCart.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  qtde: PropTypes.number,
};
ItemCart.defaultProps = {
  name: PropTypes.string,
  price: PropTypes.string,
  qtde: PropTypes.number,
};
