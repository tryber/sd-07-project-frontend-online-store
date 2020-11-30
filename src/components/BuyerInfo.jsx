import React from 'react';
import { Redirect } from 'react-router-dom';

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
      // payment: '',
    };
  }

  validInput() {
    const { state } = this;
    const arrayState = Object.entries(state);
    const numberZero = 0;

    arrayState.forEach((element) => {
      if (element[0] !== 'payment') {
        if (element[1] === '' || element[1] === numberZero) {
          const inputValid = document.getElementById(element[0]);
          inputValid.style.borderColor = 'red';
        }
      }
    });

    const divForm = document.getElementsByClassName('form')[0];
    const message = document.createElement('p');
    message.innerHTML = 'Campo de preenchimento obrigatório';
    divForm.appendChild(message);
    return <Redirect to="/" />;
  }

  changeHandler({ target: { name, value } }) {
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
        <form>
          <div className="form-group">
            <label htmlFor="fullname">
              <input
                name="name"
                id="name"
                type="text"
                data-testid="checkout-fullname"
                placeholder="Nome Completo"
                value={ name }
                onChange={ this.changeHandler }
              />
            </label>
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
        </form>
      </div>
    );
  }
}

export default BuyerInfo;
