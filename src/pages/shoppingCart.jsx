import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as localStorage from '../services/localStorage';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.cartProducts = this.cartProducts.bind(this);
    this.state = {
      products: localStorage.picksUpItemsFromTheCartInLocalStorage(),
    };
  }

  cartProducts() {
    const { products } = this.state;
    const max = 99;

    return (
      <div>
        {products.length ? (
          products
            // .reduce((acc, p) => {
            //   const { id, quantity, title, price } = p;
            //   let key = p[id];
            //   return {
            //     ...acc,
            //     [p.id]: id,
            //     [p.quantity]: acc,
            //     [p.title]: title,
            //     }
            //   }
            // ),{})
            .map((p) => (
              <div key={ p.id }>
                <div data-testid="shopping-cart-product-name">{p.title}</div>
                <div data-testid="shopping-cart-product-quantity">{p.quantity}</div>
                <div>{`${p.price * p.quantity}`}</div>
                <div>
                  <Button
                    variant="contained"
                    color="default"
                    data-testid="product-decrease-quantity"
                    type="submit"
                    onClick={ () => {
                      if (p.quantity < 1) {
                        return this.setState({ [p.quantity]: 0 });
                      }
                      this.setState({ [p.quantity]: (p.quantity -= 1) });
                    } }
                  >
                    -
                  </Button>
                  <div>
                    <h4>{[p.quantity]}</h4>
                  </div>
                  <Button
                    variant="contained"
                    color="default"
                    data-testid="product-increase-quantity"
                    type="submit"
                    onClick={ () => {
                      if (p.quantity > max) {
                        return this.setState({ [p.quantity]: 100 });
                      }
                      this.setState({ [p.quantity]: (p.quantity += 1) });
                    } }
                  >
                    +
                  </Button>
                </div>
              </div>
            ))
        ) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
        <Link data-testid="checkout-products" to="/checkout">
          Comprar
        </Link>
      </div>
    );
  }

  render() {
    return <div>{this.cartProducts()}</div>;
  }
}

export default ShoppingCart;
