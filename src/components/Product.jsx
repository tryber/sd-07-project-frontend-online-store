import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {

  addItemToLocalStorage({ target }) {
    const id = target.name;
    const product = document.getElementById(`${id}`)
    const title = product.firstChild.innerHTML;
    const imagePath = product.firstChild.nextSibling.src;
    const price = product.firstChild.nextSibling.nextSibling.innerHTML;
    const number = 1;
    if (Storage) {
      const getItemSaved = JSON.parse(localStorage.getItem('cart'));
      const values = (getItemSaved === null ? [] : getItemSaved);
      let repeatedProduct = false;
      values.forEach(item => {
        if (item.id === id) {
          item.number += 1;
          // item.price = parseFloat(price) + parseFloat(price);
          repeatedProduct = true;
        } 
      })
      if (repeatedProduct) return localStorage.setItem('cart', JSON.stringify(values))
      values.push({id, title, price, imagePath, number});
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
        <Link data-testid="product-detail-link" to={`/ProductDetail/${id}`}>Detalhes do produto</Link>
      </div>
    );
  }
}

export default Product;
