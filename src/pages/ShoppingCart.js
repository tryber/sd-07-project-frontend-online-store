import React from 'react';
import { Link } from 'react-router-dom';
import QuantifyProducts from '../components/QuantifyProducts';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.readCart = this.readCart.bind(this);
  }

  readCart() {
    const objectValues = JSON.parse(localStorage.getItem('items'));
    return objectValues;
  }

  render() {
    return (
      <div>
        {!localStorage.length ? (
          <div>
            <header className="item-inputsearch">
              <h2>Carrinho de Compras</h2>
              <div>
                <Link to="/">Voltar</Link>
              </div>
            </header>
            <main>
              <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            </main>
          </div>
        ) : (
          <div>
            <header className="item-inputsearch">
              <p>Aproveite as nossas ofertas e acrescente mais produtos</p>
              <div>
                <Link to="/">Voltar</Link>
              </div>
            </header>
            <main>
              {!localStorage.length ? ('Aproveite as ofertas para comprar o que deseja'
              ) : (this.readCart().map((key) => {
                const { sku, cost, name, image } = key;
                return (
                  <section key={ sku } data-testid="product">
                    <p>
                      {sku}
                    </p>
                    <div>
                      <img alt="Product inside cart" src={ image } />
                    </div>
                    <div className="info">
                      <div
                        data-testid="shopping-cart-product-quantity"
                      >
                        <QuantifyProducts />
                      </div>
                      <div
                        data-testid="shopping-cart-product-name"
                      >
                        {name}
                      </div>
                      <div>
                        {cost}
                      </div>
                    </div>
                  </section>);
              })
              )}
            </main>
          </div>
        )}

      </div>
    );
  }
}

export default ShoppingCart;
