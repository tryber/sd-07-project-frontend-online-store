import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  addItemToLocalStorage = () => {
    const id = this.state.id;
    const title = this.state.title;
    const price = this.state.price;
    const thumbnail = this.state.thumbnail;
    const number = 1;
    if (Storage) {
      const getItemSaved = JSON.parse(localStorage.getItem('cart'));
      const values = (getItemSaved === null ? [] : getItemSaved);
      let repeatedProduct = false;
      values.forEach(value => {
        if (value.id === id) {
          value.number += 1;
          value.price += price;
          repeatedProduct = true;
        } 
      })
      if (repeatedProduct) return localStorage.setItem('cart', JSON.stringify(values))
      values.push({id, title, price, thumbnail, number});
      localStorage.setItem('cart', JSON.stringify(values));
    }
  }

  render() {
    const { id, title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <span>{title}</span>
        <img src={thumbnail} alt={title} />
        <span>{price}</span>
        <button>Adicionar ao carrinho</button>
        <Link data-testid="product-detail-link" to={`/ProductDetail/${id}`}>Detalhes do produto</Link>
      </div>
    );
  }
}

export default Product;
