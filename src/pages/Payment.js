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
            <input required placeholder="Nome Completo" type="text" />
            <input required maxLength="11" placeholder="CPF" type="text" />
            <input required placeholder="Email" type="text" />
            <input required placeholder="Telefone" type="text" />
            <input required placeholder="CEP" type="text" />
            <input required placeholder="Endereço" type="text" />
            <input required placeholder="Complemento" type="text" />
            <input required placeholder="Numero" type="text" />
            <input required placeholder="Cidade" type="text" />
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
