import React from 'react';
import barCode from "./barcode.png";

class PaymentOption extends React.Component {
  render() {
    return (
    <div>
      <span>Método de Pagamento</span>
      <form>
        <span>Boleto</span>
        <input type="radio" id="boleto" />
        <img scr={ barCode } />
      </form>
    </div>
    )
  }
}

export default PaymentOption;
