import React from 'react';

class BuyerInformation extends React.Component {
  render() {
    const estados = [
      'Estado', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
      'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
      'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
    ];
    return (
      <div>
        <span>Dados do cliente</span>
        <form>
          <input
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
          />
          <input
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
          />
          <input
            type="email"
            placeholder="Email"
            data-testid="checkout-email"
          />
          <input
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
          />
          <input
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
          />
          <input
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
          />
          <input
            type="text"
            placeholder="Complemento"
          />
          <input
            type="number"
            placeholder="Número"
          />
          <input
            type="text"
            placeholder="Cidade"
          />
          <select>
            { estados.map((estado) => <option key={ estado } value={ estado }>{ estado }</option>) }
          </select>
        </form>
      </div>
    );
  }
}

export default BuyerInformation;
