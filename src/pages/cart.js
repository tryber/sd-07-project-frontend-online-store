import React from 'react';
import box from '../images/box.png';
import '../App.css';
import ProductCartList from '../components/ProductCartList';


class Cart extends React.Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const { productsCart } = state;

    return (
      <div>
        <div>
          {
            productsCart.length
              ? <ProductCartList listProductCart={ productsCart } />
              : (
                <div>
                  <img
                    className="btBox"
                    src={ box }
                    alt="Caixa Vazia"
                  />
                  <p data-testid="shopping-cart-empty-message">
                    Seu carrinho está vazio
                  </p>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

export default Cart;
