import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import * as API from '../services/api';
import CartIcon from '../components/CartIcon';
import "./ProductDetails.css";


class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.getId = this.getId.bind(this);
    this.searchQueryProducts = this.searchQueryProducts.bind(this);
    this.setInitialStateNumber = this.setInitialStateNumber.bind(this);
    this.changeQuantityState = this.changeQuantityState.bind(this);
    this.removeLastItem = this.removeLastItem.bind(this);
    this.removeZero = this.removeZero.bind(this);
    this.roundNumber = this.roundNumber.bind(this);
    this.addItemToLocalStorage = this.addItemToLocalStorage.bind(this);
    this.sumItem = this.sumItem.bind(this);
    this.subtractItem = this.subtractItem.bind(this);
    this.translateFreeShipping = this.translateFreeShipping.bind(this);
    this.state = {
      id: "",
      attributes: [],
      title: "",
      price: 0,
      freeShipping: false,
      thumbnail: '',
      availableQuantity: 0,
      number: 0,
      quantityChanged: false,
    };
  }

  componentDidMount() {
    this.searchQueryProducts();
  }

  getId() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    return id;
  }

  setInitialStateNumber(id) {
    const cartArray = JSON.parse(localStorage.getItem("cart"));
    if (cartArray === null) return this.setState({ number: 0 });
    const product = cartArray.find((item) => item.id === id);
    this.setState({ number: product.number });
  }

  async searchQueryProducts() {
    const productId = this.getId();
    const ListProducts = await API.getProductsFromCategoryAndQuery(productId);
    const { results } = ListProducts;
    if (results !== undefined) {
      const { id, title, attributes, thumbnail, price, shipping } = results[0];
      const availableQuantity = results[0].available_quantity;
      const freeShipping = shipping.free_shipping;
      this.setInitialStateNumber(id);
      return this.setState({
        id,
        attributes,
        title,
        thumbnail,
        price,
        freeShipping,
        availableQuantity,
      });
    }
    const { id, attributes, title, thumbnail, price, shipping } = ListProducts;
    const availableQuantity = ListProducts.available_quantity;
    const freeShipping = shipping.free_shipping;
    this.setInitialStateNumber(id);
    return this.setState({
      id,
      attributes,
      title,
      thumbnail,
      price,
      freeShipping,
      availableQuantity,
    });
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
      const index = 0;
      stringNumber = stringNumber.slice(index, (stringNumber.length - 1));
    }
    return stringNumber;
  }

  removeZero(string) {
    let stringNumber = string;
    if (stringNumber[0] === "0") {
      stringNumber = "0";
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
    const { id, title, price, thumbnail, availableQuantity } = this.state;
    const totalPrice = price;
    const imagePath = thumbnail;
    const number = 1;
    if (Storage) {
      const getItemSaved = JSON.parse(localStorage.getItem("cart"));
      const values = getItemSaved === null ? [] : getItemSaved;
      let repeatedProduct = false;
      values.forEach((item) => {
        if (item.id === id) {
          repeatedProduct = true;
          if (item.number < availableQuantity) {
            item.number += 1;
            item.totalPrice = parseFloat(item.totalPrice) + parseFloat(item.price);
            item.totalPrice = this.roundNumber(item.totalPrice);
            this.setState({ number: item.number });
          }
        }
      });
      if (repeatedProduct) {
        localStorage.setItem("cart", JSON.stringify(values));
        return this.changeQuantityState();
      }
      values.push({ id, title, price, imagePath, number, totalPrice, availableQuantity });
      localStorage.setItem('cart', JSON.stringify(values));
      this.changeQuantityState();
      this.setState({ number: number });
    }
  }

  sumItem({ target }) {
    const id = target.name;
    if (Storage) {
      const cartArray = JSON.parse(localStorage.getItem('cart'));
      if (cartArray === null) return this.addItemToLocalStorage();
      cartArray.forEach((item) => {
        if (item.id === id) {
          if (item.number < item.availableQuantity) {
            item.number += 1;
            item.totalPrice = parseFloat(item.totalPrice) + parseFloat(item.price);
            item.totalPrice = this.roundNumber(item.totalPrice);
            this.setState({ number: item.number });
          }
        }
      });
      localStorage.setItem('cart', JSON.stringify(cartArray));
    }
  }

  subtractItem({ target }) {
    const id = target.name;
    if (Storage) {
      const cartArray = JSON.parse(localStorage.getItem('cart'));
      cartArray.forEach((item) => {
        if (item.id === id) {
          const minimumNumber = 0;
          if (item.number > minimumNumber) {
            item.number -= 1;
            item.totalPrice = parseFloat(item.totalPrice) - parseFloat(item.price);
            item.totalPrice = this.roundNumber(item.totalPrice);
            this.setState({ number: item.number });
          }
        }
      });
      localStorage.setItem('cart', JSON.stringify(cartArray));
    }
  }

  translateFreeShipping() {
    const { freeShipping } = this.state;
    let translatedFreeShipping = ' Não';
    if (freeShipping === true) translatedFreeShipping = ' Sim';
    return translatedFreeShipping;
  }

  render() {
    const { id, title, price, thumbnail, attributes, number } = this.state;

    return (
      <div className="container">
        <Link to="/">Retornar</Link>
        <br></br>
        <br></br>
        <div className="containerProduct">
          <h3 data-testid="product-detail-name">Descrição: { title }</h3>
          <div>R$ { price }</div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <br></br>
        <br></br>
        <CartIcon cartItens={ JSON.parse(localStorage.getItem("cart")) } />
        <br></br>
        <br></br>
        <div className="containerDetails">
          Especificações Técnicas
          <ul style={{ listStyle: "none" }}>
            {attributes.map((element) => {
              return (
                <li key={ element.id }>
                  {`${element.name} --- ${element.value_name}`};
                </li>
              );
            })}
          </ul>
            <p data-testid="free-shipping">
              Frete grátis:
              { this.translateFreeShipping() }
            </p>
        </div>
        <br></br>
        <br></br>
        <button
            name={ id }
            onClick={ this.subtractItem }>-</button>
          <span> { number } </span>
          <button
            name={ id }
            onClick={ this.sumItem }>+</button>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.addItemToLocalStorage }
        >
          Adicionar
        </button>
        <br></br>
        <br></br>
        <Link data-testid="shopping-cart-button" to="/ShoppingCart">
          Ir para o carrinho
        </Link>
        <br></br>
        <br></br>
        <div className="containerForm">
          <form>
            Avaliar Produto:
            <div>
              <label htmlFor="input-email">
                <input type="text" id="input-email" placeholder="Email" />
              </label>
            </div>
            <div>
              <select htmlFor="input-select">
                <option value="1" id="input-select">
                  1
                </option>
                <option value="2" id="input-select">
                  2
                </option>
                <option value="3" id="input-select">
                  3
                </option>
                <option value="4" id="input-select">
                  4
                </option>
                <option value="5" id="input-select">
                  5
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="">
                <textarea
                  data-testid="product-detail-evaluation"
                  placeholder="Mensagem (opcional)"
                />
              </label>
            </div>
            <div>
              <button>Avaliar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetail;
