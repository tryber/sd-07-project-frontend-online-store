import React from 'react';

class CheckoutForm extends React.Component {
  constructor() {
    super();
    this.state = {
      completeName: '',
      CPF: '',
      email: '',
      tel: '',
      CEP: '',
      endereco: '',
      complement: '',
      numberOfHouse: '',
      city: '',
      state: '',
      payment: 'billet',
    };
    this.updateState = this.updateState.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateState(event) {
    const { target } = event;
    this.setState({ [target.name]: target.value });
  }

  submit(event) {
    event.preventDefault();
  }

  render() {
    const {
      completeName,
      CPF,
      email,
      tel,
      CEP,
      endereco,
      complement,
      numberOfHouse,
      city,
      state,
      payment,
    } = this.state;
    return (
      <form action="">
        <label htmlFor="completeName-input">
          Nome Completo
          {' '}
          <input
            id="completeName-input"
            type="text"
            name="completeName"
            value={ completeName }
            onChange={ this.updateState }
            data-testid="checkout-fullname"
          />
        </label>
        <br />
        <label htmlFor="CPF-input">
          CPF
          {' '}
          <input
            id="CPF-input"
            type="text"
            name="CPF"
            onChange={ this.updateState }
            value={ CPF }
            data-testid="checkout-cpf"
          />
        </label>
        <br />
        <label htmlFor="email-input">
          Email
          {' '}
          <input
            id="email-input"
            type="text"
            name="email"
            onChange={ this.updateState }
            value={ email }
            data-testid="checkout-email"
          />
        </label>
        <br />
        <label htmlFor="tel-input">
          Telefone
          {' '}
          <input
            id="tel-input"
            type="text"
            name="tel"
            onChange={ this.updateState }
            value={ tel }
            data-testid="checkout-phone"
          />
        </label>
        <br />
        <label htmlFor="CEP-input">
          CEP
          {' '}
          <input
            id="CEP-input"
            type="text"
            name="CEP"
            onChange={ this.updateState }
            value={ CEP }
            data-testid="checkout-cep"
          />
        </label>
        <br />
        <label htmlFor="endereco-input">
          Endereço
          {' '}
          <input
            id="endereco-input"
            type="text"
            name="endereco"
            onChange={ this.updateState }
            value={ endereco }
            data-testid="checkout-address"
          />
        </label>
        <br />
        <label htmlFor="complement-input">
          Complemento
          {' '}
          <input
            id="complement-input"
            type="text"
            name="complement"
            onChange={ this.updateState }
            value={ complement }
          />
        </label>
        <br />
        <label htmlFor="numberOfHouse-input">
          Número
          {' '}
          <input
            id="numberOfHouse-input"
            type="text"
            name="numberOfHouse"
            onChange={ this.updateState }
            value={ numberOfHouse }
          />
        </label>
        <br />
        <label htmlFor="city-input">
          Cidade
          {' '}
          <input
            id="city-input"
            type="text"
            name="city"
            onChange={ this.updateState }
            value={ city }
          />
        </label>
        <br />
        <label htmlFor="state-input">
          Estado
          {' '}
          <input
            id="state-input"
            type="text"
            name="state"
            onChange={ this.updateState }
            value={ state }
          />
        </label>
        <br />
        <label htmlFor="payment-input">
          Forma de Pagamento
          <select
            style={{ marginLeft: 10 }}
            name="payment"
            onChange={ this.updateState }
            id="payment-input"
            value={ payment }
          >
            <option value="billet">Boleto</option>
            <option value="visa">Visa</option>
            <option value="masterCard">MasterCard</option>
            <option value="elo">Elo</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={ this.submit }>
          Finalizar compra
        </button>
      </form>
    );
  }
}

export default CheckoutForm;
