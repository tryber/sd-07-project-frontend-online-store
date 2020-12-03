import React from 'react';
import Button from '@material-ui/core/Button';
import * as localStorage from '../services/localStorage';

class ProductsInCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: localStorage.picksUpItemsFromTheCartInLocalStorage(),
    };

    this.cartProducts = this.cartProducts.bind(this);
  }

  cartProducts() {
    const { products } = this.state;
    const max = 99;

    return (
      <div>
        <h4>Produtos selecionados:</h4>
        {products.length ? (
          products.map((p) => (
            <div key={ p.id }>
              <h5>Produto(s):</h5>
              <div data-testid="shopping-cart-product-name">{ p.title }</div>
              <h5>Quantidade:</h5>
              <div data-testid="shopping-cart-product-quantity">
                { p.quantity }
              </div>
              <h5>Valor total:</h5>
              <div>{ `${p.price * p.quantity}` }</div>
              <h5>Alterar quantidade:</h5>
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
          <p data-testid="shopping-cart-empty-message">Carrinho vazio!</p>
        )}
      </div>
    );
  }

  render() {
    return <div>{this.cartProducts()}</div>;
  }
}

export default ProductsInCart;
