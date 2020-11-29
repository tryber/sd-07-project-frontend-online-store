import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckoutForm extends Component {
  render() {
    const { handleChange, fullName, email, cpf, phoneNumber, cep, address } = this.props;
    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            data-testid="checkout-fullname"
            type="text"
            id="email"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="fullName">
          Nome Completo
          <input
            data-testid="checkout-email"
            type="text"
            id="fullName"
            name="fullName"
            value={ fullName }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="cpf">
          CPF
          <input
            data-testid="checkout-cpf"
            type="text"
            id="cpf"
            name="cpf"
            value={ cpf }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="phoneNumber">
          Numero Telefone
          <input
            data-testid="checkout-phone"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={ phoneNumber }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="cep">
          CEP
          <input
            data-testid="checkout-cep"
            type="text"
            id="cep"
            name="cep"
            value={ cep }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="address">
          Endereço
          <input
            data-testid="checkout-address"
            type="text"
            id="address"
            name="address"
            value={ address }
            onChange={ handleChange }
          />
        </label>
      </form>
    );
  }
}

CheckoutForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
