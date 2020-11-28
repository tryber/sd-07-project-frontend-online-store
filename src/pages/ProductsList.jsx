import './ProductsList.css'
import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as API from "../services/api";
import CategoriesList from "../components/CategoriesList";
import Logo from "../shoppingCartImage.png";
import CartIcon from "../components/CartIcon";
import ShowProducts from "../components/ShowProducts";

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
    this.state = {
      category: undefined,
      categories: undefined,
      products: undefined,
      search: "",
      quantityChanged: false,
      };
    }
  

  componentDidMount() {
    this.requestCategories();
  }

  async requestCategories() {
    const categoriesList = await API.getCategories();
    this.setState({ categories: categoriesList });
  }

  async searchQueryProducts() {
    const ListProducts = await API.getProductsFromCategoryAndQuery(this.state.category, this.state.search);
    if (ListProducts === "") return <span>Nenhum produto foi encontrado</span>;
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
    this.setState({ quantityChanged: false })
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
      if (repeatedProduct) {
        localStorage.setItem('cart', JSON.stringify(values));
        return this.changeQuantityState();
      }
      values.push({id, title, price, imagePath, number, totalPrice});
      localStorage.setItem('cart', JSON.stringify(values));
      this.changeQuantityState();
    }
  }
  
  render() {
    const { categories, products } = this.state;

    return (
      <div className="Container">
        <div className="categories">
          {categories ? categories.map((categorie) => <CategoriesList
            key={categorie.id}
            categorie={categorie}
            onCategoryChoice={this.categoryChoice} />
          ) : null }
        </div>
        <div className="otherElements">
          <input
            name="search"
            type="text"
            data-testid="query-input"
            onChange={this.handleChange}
          />
          <CartIcon cartItens={JSON.parse(localStorage.getItem('cart'))} />
          <button className="btn" data-testid='query-button' onClick={this.searchQueryProducts}>Pesquisar</button>
          {products === undefined ? this.showMessage() : <ShowProducts products={products} actualizeCart={this.addItemToLocalStorage} />}
          <Link data-testid="shopping-cart-button" to="/ShoppingCart">
            <img className="shoppingCart" src={Logo} alt="shoppingCart" />
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductsList;
