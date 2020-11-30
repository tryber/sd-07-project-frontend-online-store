import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.readCart = this.readCart.bind(this);

    this.state = {
      quantitySameItems: 1,
    };
  }

  readCart() {
    const objectValues = JSON.parse(localStorage.getItem('items'));
    return objectValues;
  }

  render() {
    const { quantitySameItems } = this.state;
    return (
      <main>
        <header>
          <div className="item-inputsearch">
            {!localStorage.length ? (
              <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            ) : (
              <p>Aproveite as nossas ofertas e acrescente mais produtos</p>
            )}
          </div>
          <div className="item-inputsearch">
            <h2>Carrinho de Compras</h2>
          </div>
          <div className="item-inputsearch">
            <Link to="/">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-arrow-left"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4
              4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0
              0 15 8z"
                />
              </svg>
            </Link>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-cart3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5
                0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5
                0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5
                0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1
                0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1
                0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </div>
        </header>
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
                  { quantitySameItems }
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
    );
  }
}

export default ShoppingCart;
