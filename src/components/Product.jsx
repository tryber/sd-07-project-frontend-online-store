import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {

  addItemToLocalStorage({ target }) {
    const { name } = target;
    const product = document.getElementById(`${name}`)
    const title = product.firstChild.innerText;
    const imagePath = product.firstChild.nextSibling.src;
    const price = product.firstChild.nextSibling.nextSibling.innerText;
    const number = 1;
    if (Storage) {
      const getItemSaved = JSON.parse(localStorage.getItem('cart'));
      const values = (getItemSaved === null ? [] : getItemSaved);
      let repeatedProduct = false;
      values.forEach(value => {
        if (value.id === name) {
          value.number += 1;
          value.price += price;
          repeatedProduct = true;
        } 
      })
      if (repeatedProduct) return localStorage.setItem('cart', JSON.stringify(values))
      values.push({name, title, price, imagePath, number});
      localStorage.setItem('cart', JSON.stringify(values));
    }
  }

  render() {
    const { id, title, price, thumbnail } = this.props;
    return (
      <div data-testid="product" id={id}>
        <span>{title}</span>
        <img src={thumbnail} alt={title} />
        <span>{price}</span>
        <button
          data-testid="product-add-to-cart"
          name={id}
          onClick={this.addItemToLocalStorage}>Adicionar ao carrinho</button>
        <Link data-testid="product-detail-link" to={`/ProductDetail/${id}`} />
      </div>
    );
  }
}

export default Product;
