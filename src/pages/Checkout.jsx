import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: JSON.parse(localStorage.getItem('cartItems')),
      totalGeral: 0,
    };
    this.sum = this.sum.bind(this);
  }

  componentDidMount() {
    this.sum();
  }

  sum() {
    const arrOfPrices = [];
    const { cartItems } = this.state;
    cartItems.map((product) => arrOfPrices.push(product.price * product.quantity));
    const initialValue = 0;
    const decimalPlaces = 2;
    const total = (arrOfPrices
      .reduce((a, b) => a + b, initialValue))
      .toFixed(decimalPlaces);
    this.setState({ totalGeral: total });
  }

  render() {
    const { cartItems, totalGeral } = this.state;
    const two = 2;
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <section>
          <h2>Revise seus produtos</h2>
          {cartItems.map((product) => (
            <div key={ product.id }>
              <div>
                { product.title }
              </div>
              <div>
                <p>Quantidade: </p>
                <p>{ product.quantity }</p>
                <p>Preço Unitário: </p>
                <p>{ product.price }</p>
                <p>Total do Item</p>
                <p>{ (product.quantity * product.price).toFixed(two) }</p>
              </div>
            </div>
          ))}
          <h2>
            Valor Total da Compra:
            { totalGeral }
          </h2>
        </section>
        <form>
          <input
            type="text"
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
          />
          <input
            type="text"
            data-testid="checkout-email"
            placeholder="e-mail"
          />
          <input
            type="text"
            name="cpf"
            data-testid="checkout-cpf"
            placeholder="CPF (ex.: XXX.XXX.XXX.-XX"
          />
          <input
            type="text"
            data-testid="checkout-phone"
            placeholder="Telefone"
          />
          <input
            type="text"
            data-testid="checkout-cep"
            placeholder="CEP"
          />
          <input
            type="text"
            data-testid="checkout-address"
            placeholder="Endereço"
          />

        </form>
      </div>
    );
  }
}

export default Checkout;

Checkout.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    }),
  ),
}.isRequired;
