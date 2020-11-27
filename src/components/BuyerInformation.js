import React from 'react';

class BuyerInformation extends React.Component {
  render() {
    return (
      <div className="checkout-component">
        <h2>Informação do Comprador</h2>
        <div className="buyer-inputs">
          <input
            required
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
          />
          <input
            required
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
          />
          <input
            required
            data-testid="checkout-email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="buyer-inputs">
          <input
            required
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
          />
          <input
            required
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
          />
        </div>
        <div className="buyer-inputs">
          <input type="text" placeholder="Complemento" />
          <input
            required
            data-testid="checkout-phone"
            type="text"
            placeholder="Número"
          />
          <input type="text" placeholder="Cidade" />
        </div>
      </div>
    );
  }
}

export default BuyerInformation;
