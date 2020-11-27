import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  /*constructor(props) {
    super(props);
    this.removeLastItem = this.removeLastItem.bind(this);
    this.removeZero = this.removeZero.bind(this);
    this.roundNumber = this.roundNumber.bind(this);
    this.addItemToLocalStorage = this.addItemToLocalStorage.bind(this);
  }

  removeLastItem(string) {
    let stringNumber = string;
    if (stringNumber[stringNumber.length - 1] === '0' || stringNumber[stringNumber.length - 1] === '.') {
      stringNumber = stringNumber.slice(0, (stringNumber.length - 1));
    }
    return stringNumber;
  };

  removeZero(string) {
    let stringNumber = string;
    if (stringNumber[0] === '0') {
      stringNumber = '0';
      return stringNumber;
    }
    stringNumber = this.removeLastItem(stringNumber);
    stringNumber = this.removeLastItem(stringNumber);
    stringNumber = this.removeLastItem(stringNumber);
    return stringNumber;
  };

  roundNumber(string) {
    let stringNumber = string.toFixed(2);
    const number = this.removeZero(stringNumber);
    return number;
  };

  addItemToLocalStorage({ target }) {
    const id = target.name;
    const product = document.getElementById(`${id}`)
    const title = product.firstChild.innerHTML;
    const imagePath = product.firstChild.nextSibling.src;
    const price = product.firstChild.nextSibling.nextSibling.innerHTML;
    const totalPrice = price;
    const number = 1;
    if (Storage) {
      const getItemSaved = JSON.parse(localStorage.getItem('cart'));
      const values = (getItemSaved === null ? [] : getItemSaved);
      let repeatedProduct = false;
      values.forEach(item => {
        if (item.id === id) {
          item.number += 1;
          item.totalPrice = parseFloat(item.totalPrice) + parseFloat(item.price);
          item.totalPrice = this.roundNumber(item.totalPrice);
          repeatedProduct = true;
        } 
      })
      if (repeatedProduct) return localStorage.setItem('cart', JSON.stringify(values));
      values.push({id, title, price, imagePath, number, totalPrice});
      localStorage.setItem('cart', JSON.stringify(values));
    }
  } */

  render() {
    const { id, title, price, thumbnail, actualizeCart } = this.props;
    return (
      <div data-testid="product" id={id}>
        <span>{title}</span>
        <img src={thumbnail} alt={title} />
        <span>{price}</span>
        <button
          data-testid="product-add-to-cart"
          name={id}
          onClick={actualizeCart}>Adicionar ao carrinho</button>
        <Link data-testid="product-detail-link" to={`/ProductDetail/${id}`}>Detalhes do produto</Link>
      </div>
    );
  }
}

export default Product;
