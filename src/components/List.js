import React from 'react';
import Card from './Card';

class List extends React.Component {
  constructor() {
    super();
    this.updateCart = this.updateCart.bind(this);
    this.checkCartOnAdd = this.checkCartOnAdd.bind(this);
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
    const PA = cartItemsStorage.filter((item) => item.id === idItem);
    if (PA.length === 1) {
      const item = PA[0];
      item.qtd += 1
      localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { lista } = this.props;
    if (Object.keys(lista).length >= 1) {
      return (
        lista.results.map((resultado) => 
          <Card
            productAdd={this.updateCart}
            key={resultado.id}
            produto={resultado}
          />
        )
      );
    };
    
    return (
      <h3 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>
    );
  }
}

export default List;
