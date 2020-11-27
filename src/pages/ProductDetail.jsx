import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/api';
import CartIcon from '../components/CartIcon';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.searchQueryProducts = this.searchQueryProducts.bind(this);
    this.changeQuantityState = this.changeQuantityState.bind(this);
    this.removeLastItem = this.removeLastItem.bind(this);
    this.removeZero = this.removeZero.bind(this);
    this.roundNumber = this.roundNumber.bind(this);
    this.addItemToLocalStorage = this.addItemToLocalStorage.bind(this);
    this.state = {
      id: '',
      attributes: [],
      title: '',
      price: 0,
      thumbnail: '',
      quantityChanged: false,
    };
  }

  componentDidMount() {
    this.searchQueryProducts();
  }

  async searchQueryProducts() {
    const { params } = this.props.match;
    const ListProducts = await API.getProductsFromCategoryAndQuery(params.id);
    const { results } = ListProducts;
    if (results !== undefined) {
      const { id, title, attributes, thumbnail, price } = results[0];
      return this.setState({ id, attributes, title, thumbnail, price });
    }
    const { id, attributes, title, thumbnail, price } = ListProducts;
    return this.setState({ id, attributes, title, thumbnail, price });
  }

  changeQuantityState() {
    const { quantityChanged } = this.state;
    if (quantityChanged === false) this.setState({ quantityChanged: true });
    this.setState({ quantityChanged: false });
  }

  removeLastItem(string) {
    let stringNumber = string;
    if (stringNumber[stringNumber.length - 1] === '0'
    || stringNumber[stringNumber.length - 1] === '.') {
      const index = 0
      stringNumber = stringNumber.slice(index, (stringNumber.length - 1));
    }
    return stringNumber;
  }

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
  }

  roundNumber(string) {
    const roundNumber = 2;
    const stringNumber = string.toFixed(roundNumber);
    const number = this.removeZero(stringNumber);
    return number;
  }

  addItemToLocalStorage() {
    const { id, title, price, thumbnail } = this.state;
    const totalPrice = price;
    const imagePath = thumbnail;
    const number = 1;
    if (Storage) {
      const getItemSaved = JSON.parse(localStorage.getItem('cart'));
      const values = (getItemSaved === null ? [] : getItemSaved);
      let repeatedProduct = false;
      values.forEach((item) => {
        if (item.id === id) {
          item.number += 1;
          item.totalPrice = parseFloat(item.totalPrice) + parseFloat(item.price);
          item.totalPrice = this.roundNumber(item.totalPrice);
          repeatedProduct = true;
        }
      });
      if (repeatedProduct) {
        localStorage.setItem('cart', JSON.stringify(values));
        return this.changeQuantityState();
      }
      values.push({ id, title, price, imagePath, number, totalPrice });
      localStorage.setItem('cart', JSON.stringify(values));
      this.changeQuantityState();
    }
  }

  render() {
    const { title, price, thumbnail, attributes } = this.state;

    return (
      <div>
        <Link to="/">Retornar</Link>
        <div>
          <h3 data-testid="product-detail-name">{ title }</h3>
          <div>{ price }</div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <CartIcon cartItens={ JSON.parse(localStorage.getItem('cart')) } />
        <div>
          Especificações Técnicas
          <ul>
            {attributes.map((element) => {
              return (
                <li key={ element.id }>
                  {`${element.name} --- ${element.value_name}`}
                </li>
              );
            })}
          </ul>
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.addItemToLocalStorage }
        >
          Adicionar
        </button>
        <Link
          data-testid="shopping-cart-button"
          to="/ShoppingCart"
        >
          Ir para o carrinho
        </Link>
        <div>
          <form>
            <label htmlFor="input-email">
              <input type="text" id="input-email" placeholder="Email" />
            </label>
            <select htmlFor="input-select">
              <option value="1" id="input-select">1</option>
              <option value="2" id="input-select">2</option>
              <option value="3" id="input-select">3</option>
              <option value="4" id="input-select">4</option>
              <option value="5" id="input-select">5</option>
            </select>
            <label htmlFor="product-evaluation">
              <textarea
                data-testid="product-detail-evaluation"
                placeholder="Mensagem (opcional)"
              />
            </label>
            <button type="button">Avaliar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
