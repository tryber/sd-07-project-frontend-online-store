import React from 'react';

class Payment extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h4>Método de pagamento:</h4>
        <form>
          <div>
            <h5>Boleto:</h5>
            <input
              type="radio"
              name="name"
              onChange={ this.handleChange }
            />
            <img src="../icons/boleto.svg" alt="Boleto" />
          </div>

          <div>
            <h5>Cartão de crédito:</h5>
            <input
              type="radio"
              name="email"
              onChange={ this.handleChange }
            />
            <img src="../icons/visa.svg" alt="Visa" />

            <input
              type="radio"
              name="cpf"
              onChange={ this.handleChange }
            />
            <img src="../icons/mastercard.svg" alt="MasterCard" />

            <input
              type="radio"
              name="address"
              onChange={ this.handleChange }
            />
            <img src="../icons/paypal.svg" alt="PayPal" />
          </div>
        </form>
      </div>
    );
  }
}

export default Payment;
