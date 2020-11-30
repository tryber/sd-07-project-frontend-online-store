import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/api';
import CategoriesList from '../components/CategoriesList';
import Logo from '../shoppingCartImage.png';
import CartIcon from '../components/CartIcon';
import ShowProducts from '../components/ShowProducts';
import './ProductsList.css';

class ProductsList extends Component {
  constructor() {
    super();
    this.showMessage = this.showMessage.bind(this);
    this.searchQueryProducts = this.searchQueryProducts.bind(this);
    this.categoryChoice = this.categoryChoice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeQuantityState = this.changeQuantityState.bind(this);
    this.removeLastItem = this.removeLastItem.bind(this);
    this.removeZero = this.removeZero.bind(this);
    this.roundNumber = this.roundNumber.bind(this);
    this.addItemToLocalStorage = this.addItemToLocalStorage.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.orderItens = this.orderItens.bind(this);
    this.state = {
      category: undefined,
      categories: undefined,
      products: undefined,
      search: '',
      quantityChanged: false,
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  getTitle(string) {
    const index = string.indexOf(':');
    const number = 2;
    const parameter = index + number;
    const title = string.slice(parameter, string.length);
    return title;
  }

  getPrice(string) {
    const index = string.indexOf('$');
    const number = 2;
    const parameter = index + number;
    const price = string.slice(parameter, string.length);
    return price;
  }

  async requestCategories() {
    const categoriesList = await API.getCategories();
    this.setState({ categories: categoriesList });
  }

  async searchQueryProducts() {
    const { category, search } = this.state;
    const ListProducts = await API.getProductsFromCategoryAndQuery(category, search);
    if (ListProducts === '') return <span>Nenhum produto foi encontrado</span>;
    const { results } = ListProducts;
    return (this.setState({ products: results }));
  }

  showMessage() {
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
  }

  categoryChoice({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.searchQueryProducts();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
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

  addItemToLocalStorage({ target }) {
    const id = target.name;
    const product = document.getElementById(`${id}`).firstChild;
    product.className = 'item-selected';
    const title = this.getTitle(product.firstChild.innerText);
    const imagePath = product.firstChild.nextSibling
      .nextSibling.nextSibling.src;
    const price = this.getPrice(product.firstChild.nextSibling.nextSibling
      .nextSibling.nextSibling.nextSibling.innerHTML);
    const availableQuantity = product.firstChild.nextSibling.nextSibling
      .nextSibling.nextSibling.attributes.available_quantity.value;
    const totalPrice = price;
    const number = 1;
    if (Storage) {
      const getItemSaved = JSON.parse(localStorage.getItem('cart'));
      const values = (getItemSaved === null ? [] : getItemSaved);
      let repeatedProduct = false;
      values.forEach((item) => {
        if (item.id === id) {
          repeatedProduct = true;
          if (item.number < availableQuantity) {
            item.number += 1;
            item.totalPrice = parseFloat(item.totalPrice) + parseFloat(item.price);
            item.totalPrice = this.roundNumber(item.totalPrice);
          }
        }
      });
      if (repeatedProduct) {
        localStorage.setItem('cart', JSON.stringify(values));
        return this.changeQuantityState();
      }
      values.push({ id, title, price, imagePath, number, totalPrice, availableQuantity });
      localStorage.setItem('cart', JSON.stringify(values));
      this.changeQuantityState();
    }
  }

  orderItens() {
    const { products } = this.state;
    if (products !== undefined) {
      const input = document.getElementById('input-select');
      const { value } = input;
      if (value === 'lower-price') {
        products.sort(function (a, b) {
          if (a.price > b.price) {
            return 1;
          }
          return products;
        });
      }
      else if (value === 'higher-price') {
        products.sort(function (a, b) {
          if (a.price < b.price) {
            return 1;
          }
          return products;
        });
      }
      return this.setState({ products: [products] });
    }
  }

  render() {
    const { categories, products } = this.state;

    return (
      <div className="Container">
        <div className="categories">
          {categories ? categories.map((categorie) => (
            <CategoriesList
              key={ categorie.id }
              categorie={ categorie }
              onCategoryChoice={ this.categoryChoice }
            />)) : null }
        </div>
        <div className="otherElements">
          <input
            name="search"
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
          />
          <CartIcon cartItens={ JSON.parse(localStorage.getItem('cart')) } />
          <div>
            <select
              htmlFor="input-select"
              id="input-select"
              onChange={ this.orderItens }
            >
              <option value="">
                Ordenar por
              </option>
              <option value="lower-price">
                Menor preço
              </option>
              <option value="higher-price">
                Maior preço
              </option>
            </select>
          </div>
          <button
            className="btn"
            data-testid="query-button"
            type="button"
            onClick={ this.searchQueryProducts }
          >
            Pesquisar
          </button>
          {products === undefined ? this.showMessage()
            : <ShowProducts
              products={ products }
              actualizeCart={ this.addItemToLocalStorage }
            />}
          <Link data-testid="shopping-cart-button" to="/ShoppingCart">
            <img src={ Logo } alt="shoppingCart" />
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductsList;
