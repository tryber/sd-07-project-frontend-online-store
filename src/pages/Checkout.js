import React from 'react';
import { Redirect } from 'react-router-dom';

import * as localStorage from '../services/localStorage';

export default class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: localStorage.readCart(),
      redirect: false,
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.updateState = this.updateState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.concludeBuy = this.concludeBuy.bind(this);
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

  concludeBuy() {
    const { fullName, email, cpf, phone, cep, address } = this.state;
    if (fullName && email && cpf && phone && cep && address) {
      if (Number(cpf) && Number(phone) && Number(cep)) {
        this.setState({ redirect: true });
      }
    }
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
        <form className="formGroup">
          <input
            placeholder="Nome"
            name="fullName"
            type="text"
            data-testid="checkout-fullname"
            id="checkout-fullname"
            value={ fullName }
            onChange={ this.onChange }
            required
          />
          <input
            placeholder="Email"
            name="email"
            type="text"
            data-testid="checkout-email"
            id="checkout-email"
            value={ email }
            onChange={ this.onChange }
            required
          />
          <input
            placeholder="CPF"
            name="cpf"
            type="text"
            data-testid="checkout-cpf"
            id="checkout-cpf"
            maxLength="11"
            value={ cpf }
            onChange={ this.onChange }
            required
          />
          <input
            placeholder="Telefone"
            name="phone"
            type="text"
            data-testid="checkout-phone"
            id="checkout-phone"
            value={ phone }
            onChange={ this.onChange }
            required
          />
          <input
            placeholder="CEP"
            name="cep"
            type="text"
            data-testid="checkout-cep"
            id="checkout-cep"
            value={ cep }
            onChange={ this.onChange }
            required
          />
          <input
            placeholder="Endereço"
            name="address"
            type="text"
            data-testid="checkout-address"
            id="checkout-address"
            value={ address }
            onChange={ this.onChange }
            required
          />
          <input type="button" value="Finalizar compra" onClick={ this.concludeBuy } />
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
