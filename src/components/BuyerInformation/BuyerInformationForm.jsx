import React, { Component } from 'react';
import './BuyerInformationForm.css';
import states from '../../data';

class BuyerInformationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      state: '',
      city: '',
      address: '',
      payment: '',
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.check = this.check.bind(this);
  }

  handlerChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  check() {
    this.setState(this.getInitialState);
  }

  render() {
    const {
      fullname,
      email,
      cpf,
      phone,
      cep,
      state,
      city,
      address,
      payment,
    } = this.state;

    return (
      <div>
        <h3>Informações do Comprador</h3>
        <form className="form-information">
          <div>
            <input
              onChange={ this.handlerChange }
              value={ fullname }
              name="fullname"
              placeholder="Nome Completo"
              data-testid="checkout-fullname"
              id="name"
              required="required"
              type="text"
            />

            <input
              onChange={ this.handlerChange }
              value={ email }
              name="email"
              placeholder="Email"
              data-testid="checkout-email"
              id="email"
              required="required"
              type="email"
            />

            <input
              onChange={ this.handlerChange }
              value={ cpf }
              name="cpf"
              placeholder="CPF"
              data-testid="checkout-cpf"
              type="text"
              id="cpf"
              required="required"
              maxLength="11"
            />

            <input
              onChange={ this.handlerChange }
              value={ phone }
              name="phone"
              placeholder="Telefone"
              data-testid="checkout-phone"
              type="text"
              required="required"
              id="phone"
            />
          </div>
          <div>
            <input
              onChange={ this.handlerChange }
              value={ cep }
              name="cep"
              placeholder="CEP"
              data-testid="checkout-cep"
              type="text"
              id="cep"
              required="required"
            />

            <select
              name="state"
              id="state"
              value={ state }
              onChange={ this.handlerChange }
            >
              <option value="">Estado</option>
              {states.sort().map((item) => (
                <option key={ item } value={ item }>
                  { item }
                </option>
              ))}
            </select>
            <input
              name="city"
              placeholder="Cidade"
              type="text"
              id="city"
              required="required"
              value={ city }
              onChange={ this.handlerChange }
            />
            <input
              name="address"
              data-testid="checkout-address"
              placeholder="Endereço"
              type="text"
              size="40"
              id="address"
              required="required"
              value={ address }
              onChange={ this.handlerChange }
            />
          </div>
          <div className="payment">
            <p>Método de pagamento</p>
            <div className="method-payment">
              <label htmlFor="billet">
                <input
                  onChange={ this.handlerChange }
                  required="required"
                  name="payment"
                  id="billet"
                  type="radio"
                  value="Boleto"
                />
                Boleto
              </label>
              <p>Cartão de Cŕedito</p>
              <label htmlFor="visa">
                <input
                  required="required"
                  type="radio"
                  name="payment"
                  id="visa"
                  onChange={ this.handlerChange }
                  value="Visa"
                />
                Visa
              </label>
            </div>
            <div className="method-payment">
              <label htmlFor="mastercard">
                <input
                  required="required"
                  onChange={ this.handlerChange }
                  type="radio"
                  name="payment"
                  id="mastercard"
                  value="MasterCard"
                />
                MasterCard
              </label>
            </div>
            <div className="method-payment">
              <label htmlFor="elo">
                <input
                  required="required"
                  type="radio"
                  name="payment"
                  id="elo"
                  onChange={ this.handlerChange }
                  value="Elo"
                />
                Elo
              </label>
            </div>
          </div>

          <button onClick={ this.check } type="submit">
            Pagar com
            {' '}
            { payment }
          </button>
        </form>
      </div>
    );
  }
}

export default BuyerInformationForm;
