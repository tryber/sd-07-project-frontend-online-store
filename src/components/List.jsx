import React from 'react';
import Card from './Card';

class List extends React.Component {
  constructor() {
    super();
    this.updateCart = this.updateCart.bind(this);
    this.checkCartOnAdd = this.checkCartOnAdd.bind(this);
    this.state = {
      cart: {},
    }
  }

  updateCart(products) {
    const { id, title, price, thumbnail } = products;
    const qtd = 1;
    let cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
    if (this.checkCartOnAdd(id)) {
      cartItemsStorage.push({ id, title, price, thumbnail, qtd });
      localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
    }
    cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
  }

  checkCartOnAdd(idItem) {
    const cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
    for (let i = 0; i  < cartItemsStorage.length; i += 1 ) {
      if (cartItemsStorage[i].id === idItem) {
        cartItemsStorage[i].qtd += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
        return false;
      }
    }
    return true;
  }

  render() {
    const { lista } = this.props;
    if (Object.keys(lista).length >= 2) {
      return (lista.results.map((resultado) => <Card productAdd={this.updateCart} key={resultado.id} produto={resultado}/>));
    }
    return (<h3 data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </h3>);
  };
}

export default List;