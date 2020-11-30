import React from 'react';

class CheckoutForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Informações pessoais</h2>
          <form>
            <fieldset>
              <label htmlFor="fullname">
                Nome completo
                <input type="text" id="fullname" data-testid="checkout-fullname" />
              </label>
              <label htmlFor="email">
                Email
                <input type="text" id="email" data-testid="checkout-email" />
              </label>
              <label htmlFor="cpf">
                CPF
                <input type="string" id="cpf" data-testid="checkout-cpf" />
              </label>
              <label htmlFor="phone">
                Telefone
                <input type="string" id="fone" data-testid="checkout-phone" />
              </label>
              <label htmlFor="cep">
                CEP
                <input type="string" id="cep" data-testid="checkout-cep" />
              </label>
              <label htmlFor="address">
                Endereço
                <input type="text" id="address" data-testid="checkout-address" />
              </label>
            </fieldset>
          </form>
        </div>
        <div>
          <h2>Método de pagamento</h2>
          <form>
            <fieldset>
              <span>Boleto</span>
              <label htmlFor="bank-slip">
                <input
                  type="radio"
                  id="bank-slip"
                  name="payment-method"
                  value="bank-slip"
                />
                Boleto
              </label>
              <span>Cartão de crédito</span>
              <label htmlFor="visa">
                <input
                  type="radio"
                  id="visa"
                  name="payment-method"
                  value="visa"
                />
                Visa
              </label>
              <label htmlFor="mastercard">
                <input
                  type="radio"
                  id="mastercard"
                  name="payment-method"
                  value="mastercard"
                />
                Mastercard
              </label>
              <label htmlFor="elo">
                <input
                  type="radio"
                  id="elo"
                  name="payment-method"
                  value="elo"
                />
                Elo
              </label>
            </fieldset>
          </form>
        </div>
        <button type="button">Comprar</button>
      </div>
    );
  }
}

export default CheckoutForm;
