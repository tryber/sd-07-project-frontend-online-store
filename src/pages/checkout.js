import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Cart from './cart';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      city: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  makeListProductsCart(arrayProducts) {
    return arrayProducts.map(({ id, title, quantity, price, thumbnail }) => (
      <div key={ id }>
        <img src={ thumbnail } alt="Produtos" />
        <span data-testid="shopping-cart-product-name">{ title }</span>
        <br />
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        <br />
        <span>{ price }</span>
        <br />
        <br />
      </div>
    ));
  }

  render() {
    const { location } = this.props;
    const { productsCart } = location;
    const { name, email, cpf, phone, cep, address, complement, city } = this.state;
    return (
      <div>
        <div>
          <h3>Revise seus Produtos</h3>
          {
            productsCart.length ? this.makeListProductsCart(productsCart) : <Cart />
          }
        </div>

        <div>
          <h3>Informações do comprador</h3>
          <form>
            <label htmlFor="name">
              Nome completo
              <input
                data-testid="checkout-fullname"
                type="text"
                name="name"
                value={ name }
                id="name"
                onChange={ this.onChange }
                required
              />
            </label>

            <label htmlFor="email">
              Email
              <input
                data-testid="checkout-email"
                type="email"
                name="email"
                value={ email }
                id="email"
                onChange={ this.onChange }
                required
              />
            </label>

            <label htmlFor="cpf">
              CPF
              <input
                data-testid="checkout-cpf"
                type="text"
                name="cpf"
                value={ cpf }
                id="cpf"
                onChange={ this.onChange }
                required
              />
            </label>
            <br />

            <label htmlFor="phone">
              Telefone
              <input
                data-testid="checkout-phone"
                type="text"
                id="phone"
                value={ phone }
                name="phone"
                onChange={ this.onChange }
                required
              />
            </label>

            <label htmlFor="cep">
              CEP
              <input
                data-testid="checkout-cep"
                type="text"
                id="cep"
                value={ cep }
                name="cep"
                onChange={ this.onChange }
                required
              />
            </label>

            <label htmlFor="address">
              Endereço
              <input
                data-testid="checkout-address"
                type="text"
                id="address"
                value={ address }
                name="address"
                onChange={ this.onChange }
                required
              />
            </label>
            <br />

            <label htmlFor="complement">
              Complemento
              <input
                type="text"
                id="complement"
                value={ complement }
                name="complement"
                onChange={ this.onChange }
                required
              />
            </label>

            <label htmlFor="city">
              Cidade
              <input
                type="text"
                id="city"
                value={ city }
                name="city"
                onChange={ this.onChange }
                required
              />
            </label>

            <br />
            <Link to="/">
              <button type="submit">Comprar</button>
            </Link>
          </form>
        </div>

      </div>
    );
  }
}
Checkout.propTypes = {
  location: PropTypes.shape({
    productsCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Checkout;
