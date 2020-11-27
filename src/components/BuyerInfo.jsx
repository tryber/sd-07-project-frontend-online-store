import React from 'react';

class BuyerInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      other: '',
      number: 0,
      city: '',
      stateCountry: '',
    };
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      name,
      cpf,
      email,
      phone,
      cep,
      address,
      other,
      number,
      city,
      stateCountry,
    } = this.state;
    return (
      <div className="form">
        <h2>Informações do Comprador</h2>
        <div className="form-group">
          <div>
            <input name="name" type="text" placeholder="Nome" value={name} />
          </div>
          <div>
            <input name="cpf" type="text" placeholder="CPF" value={cpf} />
          </div>
          <div>
            <input name="email" type="email" placeholder="Email" value={email} />
          </div>
          <div>
            <input name="telefone" type="text" placeholder="Telefone" value={phone} />
          </div>
        </div>
        <div className="form-group">
          <div>
            <input name="cep" type="text" placeholder="CEP" value={cep} />
          </div>
          <div>
            <input name="address" type="text" placeholder="Endereço" value={address} />
          </div>
        </div>
        <div className="form-group">
          <div>
            <input name="other" type="text" placeholder="Complemento" value={other} />
          </div>
          <div>
            <input name="number" type="text" placeholder="Número" value={number} />
          </div>
          <div>
            <input type="email" placeholder="Cidade" value={city} />
          </div>
          <div>
            <input type="select" placeholder="Estado" value={stateCountry} />
          </div>
        </div>
      </div>
    );
  }
}

export default BuyerInfo;
