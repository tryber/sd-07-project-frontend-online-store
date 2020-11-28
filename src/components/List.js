import React from 'react';
import PropTypes from 'prop-types';
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
      item.qtd += 1;
      localStorage.setItem('cartItems', JSON.stringify(cartItemsStorage));
      return false;
    }
    return true;
  }

  render() {
    const { lista } = this.props;
    const { results } = lista;
    if (Object.keys(lista).length >= 1) {
      return (
        <div className="lista">
          {results.map((resultado) => (
            <Card
              productAdd={ this.updateCart }
              key={ resultado.id }
              produto={ resultado }
            />
          ))}
        </div>
      );
    }
    return (
      <h3 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h3>
    );
  }
}

List.propTypes = {
  lista: PropTypes.objectOf(Object).isRequired,
};

export default List;
