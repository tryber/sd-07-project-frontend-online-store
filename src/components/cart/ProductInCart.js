import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductInCart.css';


class ProductInCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      totalQuantity: 1,
    };
    this.changeTotal = this.changeTotal.bind(this);
  }

  changeTotal(value) {
    this.setState((state) => ({ totalPrice: state.totalPrice + value }));
  }

  render() {
    const { products, handleClick } = this.props;
    const { totalPrice, totalQuantity } = this.state;

    return (
      <div>
        {products.map((product) => (
          <div className="product" key={ product.title }>
            <button type="button" onClick={ () => handleClick(product) }>X</button>
            <img src={ product.thumbnail } alt="Product" />
            <h3
              data-testid="shopping-cart-product-name"
              className="product-name"
            >
              {product.title}
            </h3>
            <p data-testid="shopping-cart-product-quantity">
              {totalQuantity}
            </p>
          </div>))}
        <p className="total-price">
          Valor Total da Compra: R$
          {/* {totalPrice.toFixed(2)} */}
          {totalPrice.toFixed()}
        </p>
        <Link to="/checkout" data-testid="checkout-products">
          <button type="button" onClick={ this.handleLocalStorage }>
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}

ProductInCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductInCart;
