import React from 'react';
import barCode from './barcode.png';
import creditCard from './creditcard.png';
import './PaymentOption.css';

class PaymentOption extends React.Component {
  render() {
    return (
      <div>
        <span>Método de Pagamento</span>
        <form>
          <div className="payment-container">
            <div className="boleto-payment">
              <span>Boleto</span>
              <input type="radio" id="boleto" name="payment" value="boleto" />
              <img src={ barCode } alt="Icone de código de barras" />
            </div>
            <div className="credtcard-payment">
              <span>Cartão de Crédito</span>
              <label htmlFor="visa">
                Visa
                <input type="radio" id="visa" name="payment" value="visa" />
              </label>
              <img src={ creditCard } alt="Icone de cartão de crédito" />
              <label htmlFor="master">
                MasterCard
                <input type="radio" id="master" name="payment" value="master" />
              </label>
              <img src={ creditCard } alt="Icone de cartão de crédito" />
              <label htmlFor="elo">
                Elo
                <input type="radio" id="elo" name="payment" value="elo" />
              </label>
              <img src={ creditCard } alt="Icone de cartão de crédito" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PaymentOption;
