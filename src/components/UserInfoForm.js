import React from 'react';
import PropTypes from 'prop-types';

import estadosBrasileiros from '../data/estadosBrasileiros';

class UserInfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);

    this.state = {
      name: '',
      cpf: '',
      email: '',
      phoneNumber: '',
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      city: '',
      state: '',
    };
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateInput(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderNamelInput() {
    const { name } = this.state;
    return (
      <div>
        <input
          data-testid="checkout-fullname"
          placeholder="Nome Completo"
          type="text"
          value={ name }
          onChange={ (event) => this.updateInput('name', event.target.value) }
        />
      </div>
    );
  }

  renderCPFInput() {
    const { cpf } = this.state;
    return (
      <div>
        <input
          data-testid="checkout-cpf"
          placeholder="CPF"
          type="text"
          value={ cpf }
          onChange={ (event) => this.updateInput('cpf', event.target.value) }
        />
      </div>
    );
  }

  renderEmailInput() {
    const { email } = this.state;
    return (
      <div>
        <input
          data-testid="checkout-email"
          placeholder="Email."
          type="text"
          value={ email }
          onChange={ (event) => this.updateInput('email', event.target.value) }
        />
      </div>
    );
  }

  renderPhoneNumberInput() {
    const { phoneNumber } = this.state;
    return (
      <div>
        <input
          data-testid="checkout-phone"
          placeholder="Telefone"
          type="text"
          value={ phoneNumber }
          onChange={ (event) => this.updateInput('phoneNumber', event.target.value) }
        />
      </div>
    );
  }


  renderZipCodeInput() {
    const { zipCode } = this.state;
    return (
      <div>
        <input
          data-testid="checkout-cep"
          placeholder="CEP"
          type="text"
          value={ zipCode }
          onChange={ (event) => this.updateInput('zipCode', event.target.value) }
        />
      </div>
    );
  }

  renderStreetInput() {
    const { street } = this.state;
    return (
      <div>
        <input
          data-testid="checkout-address"
          placeholder="Endereço"
          type="text"
          value={ street }
          onChange={ (event) => this.updateInput('street', event.target.value) }
        />
      </div>
    );
  }

  renderNumberInput() {
    const { number } = this.state;
    return (
      <div>
        <input
          placeholder="Número"
          type="text"
          value={ number }
          onChange={ (event) => this.updateInput('number', event.target.value) }
        />
      </div>
    );
  }

  renderComplementInput() {
    const { complement } = this.state;
    return (
      <div>
        <input
          placeholder="Complemento"
          type="text"
          value={ complement }
          onChange={ (event) => this.updateInput('complement', event.target.value) }
        />
      </div>
    );
  }

  renderCityInput() {
    const { city } = this.state;
    return (
      <div>
        <input
          placeholder="Cidade"
          type="text"
          value={ city }
          onChange={ (event) => this.updateInput('city', event.target.value) }
        />
      </div>
    );
  }

  renderStateSelect() {
    const { state } = this.state;
    return (
      <select
        value={ state }
        onChange={ (event) => this.updateInput('state', event.target.value) }
      >
        {/* <option selected value="Estado">Estado</option> */}
        { estadosBrasileiros.map(
          (estado) => (
            <option
              key={ estado.value }
              value={ estado.value }
            >
              { estado.label }
            </option>
          ),
        )}
      </select>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          { this.renderNamelInput() }
          { this.renderCPFInput() }
          { this.renderEmailInput() }
          { this.renderPhoneNumberInput() }
          { this.renderZipCodeInput() }
          { this.renderStreetInput() }
          { this.renderNumberInput() }
          { this.renderComplementInput() }
          { this.renderCityInput() }
          { this.renderStateSelect() }
          { this.renderSubmitButton() }
        </form>
      </div>

    );
  }
}

UserInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserInfoForm;
