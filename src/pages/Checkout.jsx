import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem('cart')),
      name: '',
      email: '',
      cpf: 0,
      phone: 0,
      cep: 0,
      address: '',
      // radioButton: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.sucess = this.sucess.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  sucess() {
    return 'SUCESSO';
  }

  render() {
    const { products, name, email, cpf, phone, cep, address } = this.state;
    let totalSum = 0;
    return (
      <div>
        <Link to="/">Retornar</Link>
        <section>
          Revise seus produtos
          {products.map((product) => {
            totalSum += parseFloat(product.totalPrice);
            return (
              <CartItem
                key={ product.id }
                id={ product.id }
                title={ product.title }
                price={ product.totalPrice }
                image={ product.imagePath }
                number={ product.number }
              />
            );
          })}
          <div>
            Preço Total: 
            {totalSum}
          </div>
        </section>
        <section>
          Informações do Comprador
          <form>
            <input
              type="text"
              onChange={ this.handleChange }
              data-testid="checkout-fullname"
              name="name"
              value={ name }
              placeholder="Nome completo"
            />
            <input
              type="text"
              onChange={ this.handleChange }
              data-testid="checkout-email"
              name="email"
              value={ email }
              placeholder="Email"
            />
            <input
              type="text"
              onChange={ this.handleChange }
              data-testid="checkout-cpf"
              name="cpf"
              value={ cpf }
              placeholder="CPF"
              maxLength="12"
            />
            <input
              type="text"
              onChange={ this.handleChange }
              data-testid="checkout-phone"
              name="phone"
              value={ phone }
              placeholder="(xx) 99999-9999"
            />
            <input
              type="text"
              onChange={ this.handleChange }
              data-testid="checkout-cep"
              name="cep"
              value={ cep }
              placeholder="00000-000"
            />
            <input
              type="text"
              onChange={ this.handleChange }
              data-testid="checkout-address"
              name="address"
              value={ address }
              placeholder="Endereço"
            />
          </form>
        </section>
        <section>
          Método de Pagamento
          <div>
            <label htmlFor="radio-button-boleto">
              Boleto
              <input
                type="radio"
                onChange={ this.handleChange }
                name="radioButton"
                value="Boleto"
                id="radio-button-boleto"
              />
            </label>
            <label htmlFor="radio-button-card-visa">
              Cartão Visa
              <input
                type="radio"
                onChange={ this.handleChange }
                name="radioButton"
                value="Visa"
                id="radio-button-card-visa"
              />
            </label>
            <label htmlFor="radio-button-card-mastercard">
              Cartão MasterCard
              <input
                type="radio"
                onChange={ this.handleChange }
                name="radioButton"
                value="Mastercard"
                id="radio-button-card-mastercard"
              />
            </label>
            <label htmlFor="radio-button-card-elo">
              Cartão Elo
              <input
                type="radio"
                onChange={ this.handleChange }
                name="radioButton"
                value="Elo"
                id="radio-button-card-elo"
              />
            </label>
          </div>
        </section>
        <button type="submit" onSubmit={ this.sucess }>Comprar</button>
      </div>
    );
  }
}

export default Checkout;
