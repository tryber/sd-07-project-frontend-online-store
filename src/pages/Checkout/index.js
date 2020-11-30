import React, { Component } from 'react';
import ShoppingCart from '../ShoppingCart';

class Checkout extends Component {
  constructor() {
    super();

  this.validateForm = this.validateForm.bind(this);
  }


  validateForm() {
    let x = document.forms["checkOutForm"]["nameInput"].value;
    if (x == "") {
      alert("O campo nome precisa ser preenchido");
      return false;
    }
  }

  render() {
    return(
      <section>
        <header>
          <h3>Revise seus Produtos</h3>
          <ShoppingCart />
        </header>
        <section>
          <h3>Informacoes do Comprador</h3>
          <form
            name="checkOutForm"
            action="/"
            onSubmit={ this.validateForm }
          >
            <label for="nameInput">Nome Completo</label>
            <input
              type="text"
              data-testid="checkout-fullname"
              id="nameInput"
              name="nameInput"
            /><br/>
            <label for="cpfInput">CPF</label>
            <input
              type="text"
              data-testid="checkout-cpf"
              id="cpfInput"
              name="cpfInput"
            /><br/>
            <label for="emailInput">Email</label>
            <input
              type="email"
              data-testid="checkout-email"
              id="emailInput"
              name="emailInput"
            /><br/>
            <label for="telInput">Telefone</label>
            <input
              type="tel"
              data-testid="checkout-phone"
              id="telInput"
              name="telInput"
            /><br/>
            <label for="cepInput">CEP</label>
            <input
              type="text"
              data-testid="checkout-cep"
              id="cepInput"
              name="cepInput"
            /><br/>
            <label for="addressInput">Endereco</label>
            <input
              type="text"
              data-testid="checkout-address"
              id="addressInput"
              name="addressInput"
            /><br/>
            <label for="complementInput">Complemento</label>
            <input
              type="text"
              id="complementInput"
              name="complementInput"
            /><br/>
            <label for="numberInput">Numero</label>
            <input
              type="number"
              id="numberInput"
              name="numberInput"
            /><br/>
            <label for="cityInput">Cidade</label>
            <input
              type="text"
              id="cityInput"
              name="cityInput"
            /><br/>
            <label for="stateInput">Estado</label>
            <input
              type="text"
              id="stateInput"
              name="stateInput"
            /><br/>
            <h3>Metodo de Pagamento</h3>
            <input
              type="radio"
              id="bankSlip"
              name="paymentMethod"
            />
            <label for="bankSlip">Boleto</label>
            <div>
              <h4>Cartao de Credito</h4>
              <input
                type="radio"
                id="visa"
                name="paymentMethod"
              />
              <label for="visa">Visa</label>
              <input
                type="radio"
                id="master"
                name="paymentMethod"
              />
              <label for="master">MasterCard</label>
              <input
                type="radio"
                id="elo"
                name="paymentMethod"
              />
              <label for="elo">Elo</label>
            </div>
            <input type="submit" value="Comprar" />
          </form>
        </section>
      </section>
    );
  }
}

export default Checkout;
