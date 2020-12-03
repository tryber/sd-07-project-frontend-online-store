import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Forms from '../components/Forms';

class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.readCart = this.readCart.bind(this);

    this.state = {

    };
  }

  readCart() {
    const objectValues = JSON.parse(localStorage.getItem('items'));
    return objectValues;
  }

  render() {
    const objectValues = JSON.parse(localStorage.getItem('items'));
    const totalPrice = objectValues
      .map((product) => product.cost)
      .reduce((acc, nextValue) => acc + nextValue);

    return (
      <main className="container-fluid">
        <section ClassName="container-fluid">
          <header ClassName="page-header">
            <div className="item-inputsearch">Aqui vai uma logo</div>
            <div className="item-inputsearch">
              <h2>
                Finalização da Compra
              </h2>
            </div>
            <div className="item-inputsearch">
              <Link to="/pages/ShoppingCart">
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
              <p>Valor total:</p>
              <strong>{ totalPrice }</strong>
            </div>
          </header>

          {!localStorage.length ? ('Aproveite as ofertas para comprar o que deseja'
          ) : (this.readCart().map((key) => {
            const { sku, cost, name, image } = key;
            return (
              <table
                key={ sku }
                className="table table-striped table-bordered"
              >
                <tr>
                  <th className="text-center">Imagem</th>
                  <th className="text-center">Produto</th>
                  <th className="text-center">Preço Unitário</th>
                  <th className="text-center">Quantidade</th>
                </tr>
                <tr>
                  <td className="text-center">
                    <img
                      className="img-circle check-img"
                      src={ image }
                      alt="Imagem de produtos para checkout"
                    />
                  </td>
                  <td
                    data-testid="shopping-cart-product-name"
                    className="text-center"
                  >
                    { name }
                  </td>
                  <td
                    data-testid="shopping-cart-product-quantity"
                    className="text-center"
                  >
                    { cost }
                  </td>
                  <td className="text-center">1</td>
                </tr>
              </table>);
          }))}
        </section>
        <Forms />
      </main>

    );
  }
}

export default CheckoutPage;
