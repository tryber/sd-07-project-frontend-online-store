import React from 'react';
import { Link } from 'react-router-dom';
import { Quantity } from '../../components';
import { getFromLocalStorage } from '../../services/localStorageService';
import './style.css';

class ShoppingCart extends React.Component {
  render() {
    document.addEventListener('click', this.cartItemClickListener);
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
        ) : (getFromLocalStorage().map((item) => {
          const { sku, cost, name, image, quantity, cartQuantity } = item;
          return (
            <section key={ sku } data-testid="product">
              <table className="table table-bordered table-striped table-hover">
                <tr>
                  <td>
                    <i>{ sku }</i>
                  </td>
                  <td>
                    <img
                      className="img-responsive img-circle text-center"
                      src={ image }
                      alt={ name }
                    />
                  </td>
                  <td
                    className="text-center"
                    data-testid="shopping-cart-product-name"
                  >
                    { name }
                  </td>
                  <td className="text-center">
                    R$
                    { cost }
                  </td>
                  <td className="text-center">{ quantity }</td>
                  <td
                    className="text-center"
                    data-testid="shopping-cart-product-quantity"
                  >
                    <Quantity id={ sku } cartQuantity={cartQuantity} availableQuantity={ quantity } />
                  </td>
                </tr>
              </table>
            </section>);
        })
        )}
        <div className="text-right">
          <Link
            data-testid="checkout-products"
            className="btn btn-success text-right"
            to="/pages/CheckoutPage"
          >
            Finalizar Compra!
          </Link>
        </div>
      </main>
    );
  }
}

export default ShoppingCart;
