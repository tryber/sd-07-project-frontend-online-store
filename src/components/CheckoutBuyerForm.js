import React, { Component } from 'react';

class CheckoutBuyerForm extends Component {
  render() {
    return (
      <div>
        <h2>Informações do Comprador</h2>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" data-testid="checkout-fullname" />
        </label>
        <label htmlFor="name">
          Email:
          <input id="name" type="text" data-testid="checkout-email" />
        </label>
        <label htmlFor="name">
          CPF:
          <input id="name" type="text" data-testid="checkout-cpf" />
        </label>
        <label htmlFor="name">
          Phone:
          <input id="name" type="text" data-testid="checkout-phone" />
        </label>
        <label htmlFor="name">
          CEP:
          <input id="name" type="text" data-testid="checkout-cep" />
        </label>
        <label htmlFor="name">
          Address:
          <input id="name" type="text" data-testid="checkout-address" />
        </label>

      </div>
    );
  }
}

export default CheckoutBuyerForm;
