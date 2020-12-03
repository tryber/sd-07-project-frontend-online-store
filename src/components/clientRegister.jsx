import React from 'react';

class ClientRegister extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, email, cpf, phone, cep, address } = this.state;
    return (
      <div>
        <h4>Informações do comprador:</h4>
        <form>
          <input
            data-testid="checkout-fullname"
            type="text"
            name="name"
            value={ name }
            placeholder="Nome completo"
            onChange={ this.handleChange }
            required
          />

          <input
            data-testid="checkout-email"
            type="email"
            name="email"
            value={ email }
            placeholder="Digite seu email"
            onChange={ this.handleChange }
            required
          />

          <input
            data-testid="checkout-cpf"
            type="text"
            name="cpf"
            value={ cpf }
            placeholder="CPF"
            onChange={ this.handleChange }
            required
          />

          <input
            data-testid="checkout-phone"
            type="text"
            name="phone"
            value={ phone }
            placeholder="Telefone"
            onChange={ this.handleChange }
            required
          />

          <input
            data-testid="checkout-cep"
            type="text"
            name="cep"
            value={ cep }
            placeholder="CEP"
            onChange={ this.handleChange }
            required
          />

          <input
            data-testid="checkout-address"
            type="text"
            name="address"
            value={ address }
            placeholder="Endereço"
            onChange={ this.handleChange }
            required
          />

          <button
            type="submit"
            onClick={ this.saveRegister }
          >
            Cadastrar
          </button>
        </form>
      </div>
    );
  }
}

export default ClientRegister;
