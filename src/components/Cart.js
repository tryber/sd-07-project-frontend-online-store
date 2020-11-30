import React, { Component } from 'react';
import remove from './img/remove.png';
import add from './img/add-circle.png';
import removeitem from './img/remove-from-basket.png';

class Cart extends Component {
  constructor() {
    super();
    this.sumCart = this.sumCart.bind(this);
    this.addClick = this.addClick.bind(this);
    this.minClick = this.minClick.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.delet = this.delet.bind(this);
    this.state = {
      sumCart: 0,
      compras: [],
    };
  }

  componentDidMount() {
    this.sumCart();
    this.atualizar();
  }

  addClick(event) {
    const { name } = event.target;
    const cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
    const PA = cartItemsStorage.filter((item) => item.id === name);
    const item = PA[0];
    if (item.qtd < item.available) {
      item.qtd += 1;
      localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
      this.atualizar();
    }
  }

  delet(event) {
    const { name } = event.target;
    const cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
    const cart = cartItemsStorage.filter((cartItem) => cartItem.id !== name);
    localStorage.setItem('cartItems', JSON.stringify(cart));
    this.atualizar();
  }

  minClick(event) {
    const { name } = event.target;
    const cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
    const PA = cartItemsStorage.filter((item) => item.id === name);
    const item = PA[0];
    if (item.qtd > 1) {
      item.qtd -= 1;
      localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
      this.atualizar();
    }
  }

  atualizar() {
    const cartitems = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ compras: cartitems });
    this.sumCart();
  }

  sumCart() {
    const len = [];
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const summ = (sum, addValue) => sum + (addValue.qtd * addValue.price);
    const cartTotal = cartItems.reduce(summ, len.length);
    this.setState({ sumCart: cartTotal });
  }

  render() {
    const { compras, sumCart } = this.state;
    if (compras.length < 1) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <div className="ShoppingCart">
        {compras.map((item) => (
          <div key={ item.id }>
            <div className="carrinho">
              <button
                className="button"
                type="button"
                name={ item.id }
                onClick={ this.delet }
              >
                <img
                  name={ item.id }
                  className="imagem"
                  src={ removeitem }
                  alt="Remover item"
                />
              </button>
              <img src={ item.thumbnail } alt={ item.title } />
              <p data-testid="shopping-cart-product-name">{item.title}</p>
              <div className="ShoppingCart">
                <div className="barrapesquisa">
                  <button
                    className="button"
                    type="button"
                    data-testid="product-decrease-quantity"
                    name={ item.id }
                    onClick={ this.minClick }
                  >
                    <img
                      name={ item.id }
                      className="imagem"
                      src={ remove }
                      alt="retirar"
                    />
                  </button>
                  <p data-testid="shopping-cart-product-quantity">{item.qtd}</p>
                  <button
                    className="button"
                    type="button"
                    data-testid="product-increase-quantity"
                    name={ item.id }
                    onClick={ this.addClick }
                  >
                    <img
                      name={ item.id }
                      className="imagem"
                      src={ add }
                      alt="adicionar"
                    />
                  </button>
                </div>
                <p>{item.qtd * item.price}</p>
              </div>
            </div>
            <hr />
          </div>
        ))}
        <h3>
          {`Valor Total da Compra: ${sumCart}`}
        </h3>
      </div>
    );
  }
}

export default Cart;
