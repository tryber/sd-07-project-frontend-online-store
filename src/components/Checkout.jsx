import React from 'react';

class Checkout extends React.Component {
  render() {
    const SumOfPrices = () => {
      const arrOfPrices = [];
      const { products } = this.props.location.state;
      products.map((product) => {
        arrOfPrices.push(product.price);
      });
      return (arrOfPrices.reduce((a, b) => a + b, 0)).toFixed(2);
    };

    const { products } = this.props.location.state;
    return (
      <div>
        <section>
          <h2>Revise seus produtos</h2>
          {products.map((product) => {
            return (
              <div>
                <div>
                  {product.title}
                </div>
                <div>
                  {product.price}
                </div>
              </div>
            );
          })}
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
