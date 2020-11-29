import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CheckoutForm extends Component {
  render() {
    const { handleChange, fullName, email, cpf, phoneNumber, cep, address } = this.props;
    return (
      <form>
        <label htmlFor="tex">
          Email
          <input
            data-testid="checkout-fullname"
            type="text"
            id="tex"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="tex2">
          Nome Completo
          <input
            data-testid="checkout-email"
            type="text"
            id="tex2"
            name="fullName"
            value={ fullName }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="tex3">
          CPF
          <input
            data-testid="checkout-cpf"
            type="text"
            id="tex3"
            name="cpf"
            value={ cpf }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="tex4">
          Numero Telefone
          <input
            data-testid="checkout-phone"
            type="text"
            id="tex4"
            name="phoneNumber"
            value={ phoneNumber }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="tex5">
          CEP
          <input
            data-testid="checkout-cep"
            type="text"
            id="tex5"
            name="cep"
            value={ cep }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="tex6">
          Endereço
          <input
            data-testid="checkout-address"
            type="text"
            id="tex6"
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
