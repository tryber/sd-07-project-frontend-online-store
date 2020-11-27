import React from 'react';
import States from '../components/States';

class Payment extends React.Component {
  render() {
    return (
      <div>
        <section>
          <h3>Revise seus produtos</h3>
          <h3>Total:</h3>
        </section>
        <section>
          <h3>Informações do Comprador</h3>
          <form>
            <input placeholder="Nome Completo" type="text" />
            <input placeholder="CPF" type="text" />
            <input placeholder="Email" type="text" />
            <input placeholder="Telefone" type="text" />
            <input placeholder="CEP" type="text" />
            <input placeholder="Endereço" type="text" />
            <input placeholder="Complemento" type="text" />
            <input placeholder="Numero" type="text" />
            <input placeholder="Cidade" type="text" />
            <select>
              <States />
            </select>
          </form>
        </section>
        <section>
          <h3>Método de Pagamento</h3>
        </section>
        <input type="button" valeu="Comprar" />
      </div>
    );
  }
}

export default Payment;
