import React from 'react';

class BuyerInfo extends React.Component {
  render() {
    return (
      <div className="form">
        <h2>Informações do Comprador</h2>
        <div className="form-group">
          <div>
            <input type="text" placeholder="Nome" />
          </div>
          <div>
            <input type="text" placeholder="CPF" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Telefone" />
          </div>
        </div>
        <div className="form-group">
          <div>
            <input type="text" placeholder="CEP" />
          </div>
          <div>
            <input type="text" placeholder="Endereço" />
          </div>
        </div>
        <div className="form-group">
          <div>
            <input type="text" placeholder="Complemento" />
          </div>
          <div>
            <input type="text" placeholder="Número" />
          </div>
          <div>
            <input type="email" placeholder="Cidade" />
          </div>
          <div>
            <input type="select" placeholder="Estado" />
          </div>
        </div>
      </div>
    );
  }
}

export default BuyerInfo;
