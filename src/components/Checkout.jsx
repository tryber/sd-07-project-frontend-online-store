import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <div>
        <section>
          item + valor
        </section>
        <form>
          <input
            type="text"
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
          />
          <input
            type="text"
            data-testid="checkout-email"
            placeholder="e-mail"
          />
          <input
            type="text" name="cpf"
            data-testid="checkout-cpf"
            placeholder="CPF (ex.: XXX.XXX.XXX.-XX"
          />
          <input
            type="text"
            data-testid="checkout-phone"
            placeholder="Telefone"
          />
          <input
            type="text"
            data-testid="checkout-cep"
            placeholder="CEP"
          />
          <input
            type="text"
            data-testid="checkout-address"
            placeholder="Endereço"
          />

        </form>
      </div>
    );
  }
}

export default Checkout;
