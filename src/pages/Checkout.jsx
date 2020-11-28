import React, { Component } from 'react';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      cpf: '',
      fullName: '',
      phone: '',
      cep: '',
      address: '',
      payment: '',
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { products } = this.props.location.state;
    const { email, cpf, fullName, phone, cep, address, payment } = this.state;
    return (
      <div>
        <div className="checkout-cart">
          <h3>Revise seus produtos</h3>
          {products.map((product) => (
            <div key={ product.id }>
              <img src={ product.thumbnail } alt="product" />
              <p>{product.title}</p>
              <p>{product.price * product.qtd}</p>
              <p>{product.qtd}</p>
            </div>
          ))}
          <p>
            Total:
            {products.reduce((a, b) => a.price + b.price)}
          </p>
        </div>
        <form className="checkout-user-info">
          <h3>Informações do comprador</h3>
          <input
            type="text"
            placeholder="Nome Completo"
            name="fullName"
            value={ fullName }
            onChange={ (event) => this.handleChange(event) }
            data-testid="checkout-fullname"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={ email }
            onChange={ (event) => this.handleChange(event) }
            data-testid="checkout-email"
          />
          <input
            type="text"
            placeholder="CPF"
            name="cpf"
            value={ cpf }
            onChange={ (event) => this.handleChange(event) }
            data-testid="checkout-cpf"
          />
          <input
            type="phone"
            placeholder="Telefone"
            name="phone"
            value={ phone }
            onChange={ (event) => this.handleChange(event) }
            data-testid="checkout-phone"
          />
          <input
            type="text"
            placeholder="CEP"
            name="cep"
            value={ cep }
            onChange={ (event) => this.handleChange(event) }
            data-testid="checkout-cep"
          />
          <input
            type="text"
            placeholder="Endereço"
            name="address"
            value={ address }
            onChange={ (event) => this.handleChange(event) }
            data-testid="checkout-address"
          />
        </form>
        <div className="checkout-payment-method">
          <h3>Método de pagamento</h3>
          <label htmlFor="boleto">
            Boleto
            <input
              type="radio"
              id="boleto"
              name="payment"
              value="boleto"
              onChange={ (event) => this.handleChange(event) }
            />
          </label>
          <label htmlFor="boleto">
            Visa
            <input
              type="radio"
              id="boleto"
              name="payment"
              value="visa"
              onChange={ (event) => this.handleChange(event) }
            />
          </label>
          <label htmlFor="boleto">
            Master Card
            <input
              type="radio"
              id="boleto"
              name="payment"
              value="masterCard"
              onChange={ (event) => this.handleChange(event) }
            />
          </label>
        </div>
      </div>
    );
  }
}

export default Checkout;
