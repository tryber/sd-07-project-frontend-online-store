import React from 'react';
import { Link } from 'react-router-dom';
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
            <input
              data-testid="checkout-fullname"
              required
              placeholder="Nome
              Completo"
              type="text"
            />
            <input
              data-testid="checkout-cpf"
              required
              maxLength="11"
              placeholder="CPF"
              type="text"
            />
            <input
              data-testid="checkout-email"
              required
              placeholder="Email"
              type="text"
            />
            <input
              data-testid="checkout-phone"
              required
              placeholder="Telefone"
              type="text"
            />
            <input
              data-testid="checkout-cep"
              required
              placeholder="CEP"
              type="text"
            />
            <input
              data-testid="checkout-address"
              required
              placeholder="Endereço"
              type="text"
            />
            <input placeholder="Complemento" type="text" />
            <input placeholder="Numero" type="text" />
            <input placeholder="Cidade" type="text" />
            <select>
              <option value="">Estado</option>
              <States />
            </select>
            <section>
              <h3>Método de Pagamento</h3>
            </section>
            <input type="radio" value="Finalizar" />
            <input type="radio" value="Finalizar" />
            <input type="radio" value="Finalizar" />
            <input type="radio" value="Finalizar" />
            <br />
            <button type="submit"><Link to="/">Comprar</Link></button>
          </form>
        </section>
      </div>
    );
  }
}

export default Payment;
