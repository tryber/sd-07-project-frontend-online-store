import React from 'react';

class PaymentMethods extends React.Component {
  render() {
    return (
      <div className="checkout-component">
        <h2>Métodos de Pagamento</h2>
        <input required type="radio" name="payment" value="boleto" />
        Boleto
        <div>
          <input type="radio" name="payment" value="cartao" />
          Visa
          <input type="radio" name="payment" value="cartao" />
          MasterCard
          <input type="radio" name="payment" value="cartao" />
          Elo
        </div>
      </div>
    );
  }
}

export default PaymentMethods;
