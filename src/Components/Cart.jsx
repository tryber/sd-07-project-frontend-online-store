import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div className="container-cart">
        <div className="list-product">
          <div className="header-product">
            <h4>Cart</h4>
            <h4>Itens</h4>
          </div>
          <h5 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h5>
        </div>
        <div className="order">
          <div className="header-order">
            <h4>Order</h4>
          </div>
          <div className="body-order">
            <p>Vazio</p>
          </div>
          <div className="bottom-order">
            <div className="container-price">
              <span>Total</span>
              <span>R$0,00</span>
            </div>
            <button className="btn-chashout" type="submit">
              Pagar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
