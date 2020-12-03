import React from 'react';
import PropTypes, { array } from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  render() {
    const { quantity } = this.state;
    const { match } = this.props;
    const { id } = match.params;
    const {
      location: { state: product },
    } = this.props;
    console.log(id);
    console.log(product);
    const number = '0';
    return id !== number ? (
      <div className="container-cart">
        <div className="list-product">
          <div className="header-product-cart">
            <h4>Cart</h4>
            <h4>Itens</h4>
          </div>
          <table>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
            <tr>
              <td data-testid="shopping-cart-product-name">{product.title}</td>
              <td>{product.price}</td>
              <td data-testid="shopping-cart-product-quantity">{quantity}</td>
              <td>0</td>
            </tr>
          </table>
          <Link to="/" className="btn-back-shop">
            Continue comprando
          </Link>
        </div>
        <div className="order">
          <div className="header-order">
            <h4>Order</h4>
          </div>
          <div className="body-order">
            <table>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
              </tr>
              <tr>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            </table>
          </div>
          <div className="bottom-order">
            <div className="container-price">
              <span>Total</span>
              <span>R$0,00</span>
            </div>
            <button
              className="btn-chashout"
              type="submit"
              data-testid="shopping-cart-button"
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="container-cart">
        <h5 data-testid="shopping-cart-empty-message" className="empty-cart">
          Seu carrinho está vazio
        </h5>
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  match: PropTypes.arrayOf(array).isRequired,
};

export default Cart;
