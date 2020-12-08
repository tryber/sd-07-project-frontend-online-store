import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  render() {
    const SumOfPrices = () => {
      const arrOfPrices = [];
      const { location } = this.props;
      const { products } = location.state;
      products.map((product) => {
        arrOfPrices.push(product.price);
        return product.price;
      });
      const initialValor = 0;
      const decimalPlaces = 2;
      return (arrOfPrices.reduce((a, b) => a + b, initialValor)).toFixed(decimalPlaces);
    };

    const { location } = this.props;
    const { products } = location.state;
    return (
      <div>
        <section>
          <h2>Revise seus produtos</h2>
          {products.map((product) => (
            <div key={ product.id }>
              <div>
                {product.title}
              </div>
              <div>
                {product.price}
              </div>
            </div>
          ))}
          <h2>
            Valor Total da Compra:
            {SumOfPrices()}
          </h2>
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
            type="text"
            name="cpf"
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

Checkout.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    }),
  ),
}.isRequired;
