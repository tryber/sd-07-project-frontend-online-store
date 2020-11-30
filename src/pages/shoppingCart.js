import React, { Component } from 'react';

class shoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingList: JSON.parse(localStorage.getItem('cart')),
    };
  }

  listItems(item) {
    console.log('entrou na listItems');
    const { title, thumbnail, price } = item;
    return (
      <div>
        <img src={ thumbnail } alt="imagem do produto" />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
      </div>
    );
  }

  increase(idItem) {
    const { shoppingList } = this.state;
    const list = shoppingList;
    list.find((item) => idItem === item.product.id).quantity += 1;
    console.log(list);
    localStorage.setItem('cart', JSON.stringify(list));
    this.setState({
      shoppingList: list,
    });
  }

  decrease(idItem) {
    const { shoppingList } = this.state;
    const list = shoppingList;
    const um = 1;
    const zero = 0;
    list.find((item) => idItem === item.product.id).quantity -= um;
    const counter = list.find((item) => idItem === item.product.id).quantity;
    if (counter < zero) {
      list.find((item) => idItem === item.product.id).quantity = 0;
    }
    localStorage.setItem('cart', JSON.stringify(list));
    this.setState({
      shoppingList: list,
    });
  }

  remove(idItem) {
    const { shoppingList } = this.state;
    const list = shoppingList;
    const clickedItem = list.find((item) => idItem === item.product.id);
    const index = list.indexOf(clickedItem);
    list.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(list));
    this.setState({
      shoppingList: list,
    });
    console.log(this.state);
  }

  render() {
    const { shoppingList } = this.state;
    const list = shoppingList;
    const zero = 0;

    if (list === null || list === [] || list.length === zero) {
      return (
        <div>
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        </div>
      );
    }
    return (
      list.map((item) => {
        const { product, quantity } = item;
        const { title, thumbnail, price, id } = product;
        return (
          <div key={ id } className="cartItem">
            <img src={ thumbnail } alt="imagem do produto" />
            <p data-testid="shopping-cart-product-name">{title}</p>
            <p>{price}</p>
            <p data-testid="shopping-cart-product-quantity">{quantity}</p>
            <button
              onClick={ () => this.increase(id) }
              data-testid="product-increase-quantity"
              type="button"
            >
              +
            </button>
            <button
              onClick={ () => this.decrease(id) }
              data-testid="product-decrease-quantity"
              type="button"
            >
              -
            </button>
            <button
              onClick={ () => this.remove(id) }
              type="button"
            >
              X
            </button>
          </div>
        );
      })
    );
  }
}

export default shoppingCart;
