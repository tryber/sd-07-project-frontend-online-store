import React from 'react';

class PaymentMethod extends React.Component {
  render() {
    return (
      <div>
        <h2>Payment Method</h2>
        <span>Boleto</span>
        <label htmlFor="boleto">
          <input type="radio" name="paymentMethod" id="boleto" />
          ImagemBoleto
        </label>

        <span>Cartão de Crédito</span>
        <label htmlFor="Visa">
          <input type="radio" name="paymentMethod" id="Visa" />
          ImagemVisa
        </label>
        <label htmlFor="MasterCard">
          <input type="radio" name="paymentMethod" id="MasterCard" />
          ImagemMastercard
        </label>
        <label htmlFor="Elo">
          <input type="radio" name="paymentMethod" id="Elo" />
          ImagemElo
        </label>
      </div>
    );
  }
}

export default PaymentMethod;
