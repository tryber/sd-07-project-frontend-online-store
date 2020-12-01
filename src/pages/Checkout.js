import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

export default class Checkout extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.showCartProducts = this.showCartProducts.bind(this);
    this.treatingForm = this.treatingForm.bind(this);
    this.redirectHandle = this.redirectHandle.bind(this);
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phoneNumber: '',
      cep: '',
      address: '',
      isValid: false,
      redirect: false,
    };
  }

  treatingForm() {
    const array = Object.values(this.state);
    const none = 0;

    array.pop();
    const allEmptyInputs = array.filter((string) => string.length < 1);

    if (allEmptyInputs.length === none) {
      this.setState({
        isValid: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      this.treatingForm,
    );
  }

  showCartProducts() {
    const products = JSON.parse(localStorage.getItem('cart'));
    const ZERO = 0;
    let sum = ZERO;
    return (
      <div>
        {products.map(({ title, thumbnail, price, quantity, id }) => {
          sum += price * quantity;
          return (
            <div key={ id }>
              <p>{title}</p>
              <img src={ thumbnail } alt="thumb" />
              <p>{price}</p>
              <p>{quantity}</p>
            </div>
          );
        })}
        <h3>
          Valor:
          {sum}
        </h3>
      </div>
    );
  }

  redirectHandle() {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const {
      fullName,
      email,
      cpf,
      phoneNumber,
      cep,
      address,
      isValid,
      redirect,
    } = this.state;
    return (
      <div>
        {this.showCartProducts()}
        <CheckoutForm
          handleChange={ this.handleChange }
          fullName={ fullName }
          email={ email }
          cpf={ cpf }
          phoneNumber={ phoneNumber }
          cep={ cep }
          address={ address }
        />
        <button type="submit" disabled={ !isValid } onClick={ this.redirectHandle }>
          Finalizar Compra
        </button>
        {redirect && <Redirect to="./" />}
      </div>
    );
  }
}
