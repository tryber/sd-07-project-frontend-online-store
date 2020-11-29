import React from 'react';
import { Link } from 'react-router-dom';
import CartItens from './CartItens';
import GetIcon from './Icons';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.ItemsFromStorage();
  }

  ItemsFromStorage() {
    const localStorageItens = localStorage.getItem('cartItems');
    const convertedArrayFromLocalStorage = JSON.parse(localStorageItens);
    this.setState({
      cartItems: convertedArrayFromLocalStorage,
    });
  }

  render() {
    const SumOfPrices = () => {
      const arrOfPrices = [];
      this.state.cartItems.map((product) => {
        arrOfPrices.push(product.price);
      })
      return (arrOfPrices.reduce((a, b) => a + b, 0)).toFixed(2);
    }
    const { cartItems } = this.state;
    if (!cartItems) {
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      );
    }

    return (
      <div>
        <Link to="/">
          <GetIcon name="ReturnArrowIcon" />
        </Link>
        <div className="shopping-cart-title" >
          <GetIcon name="ShoppingCartIcon" />
          <h2>Carrinho de Compras</h2>
        </div>
        <div>
          <div>
            {cartItems.map((item) => <CartItens key={ item.id } item={ item } />)}
          </div>
        </div>
        <h2>Valor Total da Compra: {SumOfPrices()}</h2>

        <Link
          to={{
            pathname:"/cart/checkout",
            state: {
              products: this.state.cartItems,
            },
          }}
          data-testid="checkout-products">
          <button onclick={ console.log('incrementar') }>Finalizar Compra</button>
        </Link>

      </div>
    );
  }
}

export default ShoppingCart;
