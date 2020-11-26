import React from 'react';
import Card from './Card';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.updateCart = this.updateCart.bind(this);
    this.state = {
      cart: {},
    }
  }

  updateCart(product) {
    const { id, title, price, qtd } = product;
    let cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'));
    cartItemsStorage.forEach((cartitemId) => {
      if (cartitemId.id === id ) {
      } else {
        cartItemsStorage.push({ id, title, price, qtd });
        localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
      }
    });
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