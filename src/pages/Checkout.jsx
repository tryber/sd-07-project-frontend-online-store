import React, { Component } from "react";
import CartItem from '../components/CartItem';


class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("cart")),
      name: "",
      email: "",
      cpf: 0,
      phone: 0,
      cep: 0,
      address: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.sucess = this.sucess.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  sucess() {
    return "SUCESSO";
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <section>
          Revise seus produtos
          {products.map((product) => <CartItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.totalPrice}
            image={product.imagePath}
          />)}
        
        </section>
        <section>
          Informações do Comprador
          <form>
            <input
              type='text'
              onChange={this.handleChange}
              data-test-id='checkout-fullname'
              name='name'
              value={this.state.name}
              placeholder='Nome completo'
            />
            <input
              type='text'
              onChange={this.handleChange}
              data-test-id='checkout-email'
              name='email'
              value={this.state.email}
              placeholder='Email'
            />
            <input
              type='text'
              onChange={this.handleChange}
              data-test-id='checkout-cpf'
              name='cpf'
              value={this.state.cpf}
              placeholder='CPF'
              maxLength='12'
            />
            <input
              type='number'
              onChange={this.handleChange}
              data-test-id='checkout-phone'
              name='phone'
              value={this.state.phone}
              placeholder='(xx) 99999-9999'
            />
            <input
              type='number'
              onChange={this.handleChange}
              data-test-id='checkout-cep'
              name='cep'
              value={this.state.cep}
              placeholder='00000-000'
            />
            <input
              type='text'
              onChange={this.handleChange}
              data-test-id='checkout-address'
              name='address'
              value={this.state.address}
              placeholder='Endereço'
            />
          </form>
        </section>
        <section>Método de Pagamento</section>
        <button onSubmit={this.sucess}>Comprar</button>
      </div>
    );
  }
}

export default Checkout;
