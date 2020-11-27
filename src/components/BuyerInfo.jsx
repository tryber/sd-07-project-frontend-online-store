import React from 'react';

class BuyerInfo extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.validInput = this.validInput.bind(this);
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
      payment: '',
      emptyField: [],
    };
  }

  validInput() {
    const { emptyField } = this.state;
    if (emptyField) {
      emptyField.forEach((element) => {
        console.log(element);
        const inputValid = document.getElementById(element);
        console.log(inputValid);
        inputValid.style.border = 'red';
      });
    }
  }

  changeHandler({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    if (value === '' || value === 0) {
      this.setState((previousState) => ({
        emptyField: [...previousState, name],
      }));
    }
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
            <input
              name="name"
              id="name"
              type="text"
              data-testid="checkout-fullname"
              placeholder="Nome"
              value={ name }
              onChange={ this.changeHandler }
            />
          </div>
          <div>
            <input
              name="cpf"
              id="cpf"
              type="text"
              data-testid="checkout-email"
              placeholder="CPF"
              value={ cpf }
              onChange={ this.changeHandler }
            />
          </div>
          <div>
            <input
              name="email"
              id="email"
              type="email"
              data-testid="checkout-cpf"
              placeholder="Email"
              value={ email }
              onChange={ this.changeHandler }
            />
          </div>
          <div>
            <input
              name="phone"
              id="phone"
              type="text"
              data-testid="checkout-phone"
              placeholder="Telefone"
              value={ phone }
              onChange={ this.changeHandler }
            />
          </div>
        </div>
        <div className="form-group">
          <div>
            <input
              name="cep"
              id="cep"
              type="text"
              data-testid="checkout-cep"
              placeholder="CEP"
              value={ cep }
              onChange={ this.changeHandler }
            />
          </div>
          <div>
            <input
              name="address"
              id="address"
              type="text"
              data-testid="checkout-address"
              placeholder="Endereço"
              value={ address }
              onChange={ this.changeHandler }
            />
          </div>
        </div>
        <div className="form-group">
          <div>
            <input
              name="other"
              id="other"
              type="text"
              data-testid="checkout-fullname"
              placeholder="Complemento"
              value={ other }
              onChange={ this.changeHandler }
            />
          </div>
          <div>
            <input
              name="number"
              id="number"
              type="text"
              data-testid="checkout-fullname"
              placeholder="Número"
              value={ number }
              onChange={ this.changeHandler }
            />
          </div>
          <div>
            <input
              name="city"
              id="city"
              type="email"
              data-testid="checkout-fullname"
              placeholder="Cidade"
              value={ city }
              onChange={ this.changeHandler }
            />
          </div>
          <div>
            <input
              name="stateCountry"
              id="stateCountry"
              type="select"
              data-testid="checkout-fullname"
              placeholder="Estado"
              value={ stateCountry }
              onChange={ this.changeHandler }
            />
          </div>
        </div>
        <div>
          <label htmlFor="billet">
            Boleto
            <input
              name="payment"
              type="radio"
              id="billet"
              value="billet"
              onChange={ this.changeHandler }
            />
          </label>
          <label htmlFor="visa">
            Visa
            <input
              name="payment"
              type="radio"
              id="visa"
              value="visa"
              onChange={ this.changeHandler }
            />
          </label>
          <label htmlFor="masterCard">
            MasterCard
            <input
              name="payment"
              type="radio"
              id="masterCard"
              value="masterCard"
              onChange={ this.changeHandler }
            />
          </label>
          <label htmlFor="elo">
            Elo
            <input
              name="payment"
              type="radio"
              id="elo"
              value="elo"
              onChange={ this.changeHandler }
            />
          </label>
        </div>
        <button
          type="button"
          onClick={ this.validInput }
        >
          Finalizar Compra
        </button>
      </div>
    );
  }
}

export default BuyerInfo;
