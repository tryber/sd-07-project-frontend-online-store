import React from 'react';
import { Redirect } from 'react-router-dom';
import estados from './Estados';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.changeStateKeys = this.changeStateKeys.bind(this);
    this.consolidate = this.consolidate.bind(this);

    this.state = {
      name: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      adress: '',
      complement: '',
      number: '',
      city: '',
      state: '',
      redirect: false,
    };
  }

  consolidate() {
    const {
      name,
      cpf,
      email,
      phone,
      cep,
      adress,
      complement,
      number,
      state,
      city,
      redirect,

    } = this.state;

    const fullName = name.length ? name : 'empty';
    const fullCpf = cpf.length ? cpf : 'empty';
    const fullEmail = email.length ? email : 'empty';
    const fullPhone = phone.length ? phone : 'empty';
    const fullCep = cep.length ? cep : 'empty';
    const fullAdress = adress.length ? adress : 'empty';
    const fullState = state.length ? state : 'empty';
    const fullComplement = complement.length ? complement : 'empty';
    const fullCity = city.length ? city : 'empty';
    const fullNumber = number.length ? number : 'empty';
    const stateArray = [
      fullName,
      fullCpf,
      fullEmail,
      fullPhone,
      fullCep,
      fullAdress,
      fullComplement,
      fullNumber,
      fullCity,
      fullState,
      redirect,
    ];
    const consolidate = stateArray.some((item) => item === 'empty');

    if (!consolidate) {
      this.setState({
        name: '',
        cpf: '',
        email: '',
        phone: '',
        cep: '',
        adress: '',
        complement: '',
        number: '',
        city: '',
        state: '',
        redirect: true,
      });
    }
  }

  changeStateKeys(field, newValue) {
    this.setState({ [field]: newValue });
  }

  render() {
    const {
      name,
      cpf,
      email,
      phone,
      cep,
      adress,
      complement,
      number,
      city,
      state,
      redirect,
    } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <main className="container">
        <section className="form-section">
          <form className="row-section">
            <h3>Informações do comprador:</h3>
            <div className="row">
              <div className="col-xs-6 colsm-4">
                <input
                  data-testid="checkout-fullname"
                  className="form-control"
                  type="text"
                  value={ name }
                  id="name"
                  name="name"
                  placeholder="Seu nome aqui"
                  maxLength="40"
                  size="37"
                  onChange={ (event) => this.changeStateKeys('name', event.target.value) }
                />
              </div>
              <div className="col-xs-6 colsm-4">
                <input
                  data-testid="checkout-cpf"
                  className="form-control text-justify"
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={ cpf }
                  size="25"
                  Placeholder="Seu CPF aqui"
                  maxLength="11"
                  onChange={ (event) => this.changeStateKeys('cpf', event.target.value) }
                />
              </div>
              <div className="col-xs-6 colsm-4">
                <input
                  data-testid="checkout-email"
                  className="form-control"
                  type="text"
                  id="email"
                  name="email"
                  value={ email }
                  placeholder="E-mail"
                  maxLength="25"
                  size="25"
                  onChange={
                    (event) => this.changeStateKeys('email', event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  data-testid="checkout-phone"
                  className="form-control"
                  type="text"
                  id="phone"
                  name="phone"
                  value={ phone }
                  placeholder="Telefone"
                  maxLength="11"
                  size="25"
                  onChange={
                    (event) => this.changeStateKeys('phone', event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  data-testid="checkout-cep"
                  className="form-control"
                  type="text"
                  id="cep"
                  name="cep"
                  value={ cep }
                  placeholder="CEP"
                  maxLength="11"
                  size="25"
                  onChange={ (event) => this.changeStateKeys('cep', event.target.value) }
                />
              </div>
              <div className="form-group">
                <input
                  data-testid="checkout-address"
                  className="form-control"
                  type="text"
                  name="adress"
                  value={ adress }
                  id="adress"
                  placeholder="Endereço"
                  size="60"
                  onChange={
                    (event) => this.changeStateKeys('adress', event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="complement"
                  name="complement"
                  value={ complement }
                  placeholder="Complemento"
                  maxLength="35"
                  size="22"
                  onChange={
                    (event) => this.changeStateKeys('complement', event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  id="number"
                  type="text"
                  name="number"
                  value={ number }
                  placeholder="Número"
                  size="25"
                  onChange={
                    (event) => this.changeStateKeys('number', event.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  id="city"
                  name="city"
                  value={ city }
                  placeholder="Cidade"
                  maxLength="28"
                  size="25"
                  onChange={ (event) => this.changeStateKeys('city', event.target.value) }
                />
              </div>
              <div className="form-group">
                <select
                  className="form-control"
                  name="state"
                  value={ state }
                  id="state"
                  onChange={
                    (event) => this.changeStateKeys('state', event.target.value)
                  }
                >
                  {estados.map((item) => <option key={ item }>{item}</option>)}
                </select>
              </div>
              <br />
              <fieldset className="payment-chek">
                <p>Formas de pagamento:</p>
                <div className="row row-chek">
                  <div className="col-md-1">
                    <input
                      name="payment"
                      value="visa"
                      type="radio"
                      onChange={
                        (event) => this.changeStateKeys('payment', event.target.value)
                      }
                    />
                  </div>
                  <div className="icon col-md-1">
                    <i
                      className="fab fa-cc-visa"
                    >
                      Visa
                    </i>
                  </div>
                  <div className="col-md-1">
                    <input
                      name="payment"
                      value="amexp"
                      type="radio"
                      onChange={
                        (event) => this.changeStateKeys('payment', event.target.value)
                      }
                    />
                  </div>
                  <div className="icon col-md-1">
                    <i
                      className="fab fa-cc-amex"
                    >
                      Express
                    </i>
                  </div>
                  <div className="col-md-1">
                    <input
                      name="payment"
                      value="creditcard"
                      type="radio"
                      onChange={
                        (event) => this.changeStateKeys('payment', event.target.value)
                      }
                    />
                  </div>
                  <div className="icon col-md-1">
                    <i
                      className="far fa-credit-card"
                    >
                      Outros Cartões
                    </i>
                  </div>
                  <div className="col-md-1">
                    <input
                      name="payment"
                      value="mastercard"
                      type="radio"
                      onChange={
                        (event) => this.changeStateKeys('payment', event.target.value)
                      }
                    />
                  </div>
                  <div className="icon col-md-1">
                    <i
                      className="fab fa-cc-mastercard"
                    >
                      Mastercard
                    </i>
                  </div>
                  <div className="col-md-1">
                    <input
                      name="payment"
                      value="paypal"
                      type="radio"
                      onChange={
                        (event) => this.changeStateKeys('payment', event.target.value)
                      }
                    />
                  </div>
                  <div className="icon col-md-1">
                    <i
                      className="fab fa-cc-paypal"
                    >
                      Paypal
                    </i>
                  </div>
                  <div className="col-md-1">
                    <input
                      name="payment"
                      value="boleto"
                      type="radio"
                      onChange={
                        (event) => this.changeStateKeys('payment', event.target.value)
                      }
                    />
                  </div>
                  <div className="icon col-md-1">
                    <i
                      className="fas fa-barcode"
                    >
                      Boleto
                    </i>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-success text-justify"
                      onClick={ this.consolidate }
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>
        </section>
      </main>
    );
  }
}

export default Forms;
