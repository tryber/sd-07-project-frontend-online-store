import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BuyerInformation extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, cpf, phone, cep, address } = this.state;
    return (
      <div>
        <h2>Informações do comprador</h2>
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

          <h2>Método de Pagamento</h2>

          <label htmlFor="pays">
            Boleto
            <input
              type="radio"
              id="pays"
              name="pay"
              value="billet"
              onChange={ this.onChange }
            />
            {' '}
            <br />
            <br />

            Cartão de crédito
            <br />
            <span>
              Visa
              <input
                type="radio"
                id="pays"
                name="pay"
                value="visa"
                onChange={ this.onChange }
              />
            </span>

            <span>
              Master
              <input
                type="radio"
                id="pays"
                name="pay"
                value="master"
                onChange={ this.onChange }
              />
            </span>

            <span>
              Elo
              <input
                type="radio"
                id="pays"
                name="pay"
                value="elo"
                onChange={ this.onChange }
              />
            </span>
          </label>

          <Link to="/">
            <button type="submit">Comprar</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default BuyerInformation;
