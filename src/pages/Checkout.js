import React from 'react';
import { Redirect } from 'react-router-dom';

import * as localStorage from '../services/localStorage';

export default class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: localStorage.readCart(),
      redirect: false,
    };
    this.updateState = this.updateState.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  updateState() {
    const cart = localStorage.readCart();
    this.setState({ cart });
  }

  productsAndForm(cart) {
    const { fullName, email, cpf, phone, cep, address } = this.state;
    return (
      <div className="products">
        { cart.map(({ amount, title, id }) => (
          <div className="product" key={ id }>
            <p
              className="product-title"
              data-testid="checkout-product-name"
            >
              { title }
            </p>
            <p
              className="product-qtd"
              data-testid="checkout-product-quantity"
            >
              { amount }
            </p>
          </div>
        ))}
        <form>
          <label htmlFor="checkout-fullname">
            Nome:
            <input
              name="fullName"
              type="text"
              data-testid="checkout-fullname"
              id="checkout-fullname"
              value={ fullName }
            />
          </label>
          <label htmlFor="checkout-email">
            E-mail:
            <input
              name="email"
              type="text"
              data-testid="checkout-email"
              id="checkout-email"
              value={ email }
            />
          </label>
          <label htmlFor="checkout-cpf">
            CPF:
            <input
              name="cpf"
              type="text"
              data-testid="checkout-cpf"
              id="checkout-cpf"
              maxLength="11"
              value={ cpf }
            />
          </label>
          <label htmlFor="checkout-phone">
            Telefone:
            <input
              name="phone"
              type="text"
              data-testid="checkout-phone"
              id="checkout-phone"
              value={ phone }
            />
          </label>
          <label htmlFor="checkout-cep">
            CEP:
            <input
              name="cep"
              type="text"
              data-testid="checkout-cep"
              id="checkout-cep"
              value={ cep }
            />
          </label>
          <label htmlFor="checkout-address">
            Endereço:
            <input
              name="address"
              type="text"
              data-testid="checkout-address"
              id="checkout-address"
              value={ address }
            />
          </label>
        </form>
      </div>
    );
  }

  render() {
    const { cart, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    if (!cart) {
      return (
        <p>Seu carrinho está vazio</p>
      );
    }
    return (this.productsAndForm(cart));
  }
}
