import React from 'react';

class BuyerInformation extends React.Component {
  renderInput(dataTestid, placeHolder) {
    return (
      <input
        required
        data-testid={ dataTestid }
        type="text"
        placeholder={ placeHolder }
      />
    );
  }

  render() {
    return (
      <div className="checkout-component">
        <h2>Informação do Comprador</h2>
        <div className="buyer-inputs">
          {this.renderInput('checkout-fullname', 'Nome Completo')}
          {this.renderInput('checkout-cpf', 'CPF')}
          {this.renderInput('checkout-email', 'Email')}
          {this.renderInput('checkout-cep', 'CEP')}
          {this.renderInput('checkout-address', 'Endereço')}
          {this.renderInput('', 'Complemento')}
          {this.renderInput('checkout-phone', 'Número')}
          {this.renderInput('', 'Cidade')}
        </div>
      </div>
    );
  }
}

export default BuyerInformation;
