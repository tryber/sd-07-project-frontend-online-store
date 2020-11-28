import "./ProductDetails.css";
import React, { Component } from "react";
import * as API from "../services/api";
import { Link } from "react-router-dom";
import CartIcon from "../components/CartIcon";

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
      id: "",
      attributes: [],
      title: "",
      price: 0,
      thumbnail: "",
      quantityChanged: false,
    };
  }

  async searchQueryProducts() {
    const ListProducts = await API.getProductsFromCategoryAndQuery(
      this.props.match.params.id,
      undefined
    );
    const { results } = ListProducts;
    if (results !== undefined) {
      const { id, title, attributes, thumbnail, price } = results[0];
      return this.setState({ id, attributes, title, thumbnail, price });
    }
    const { id, attributes, title, thumbnail, price } = ListProducts;
    return this.setState({ id, attributes, title, thumbnail, price });
  }

  componentDidMount() {
    this.searchQueryProducts();
  }

  changeQuantityState() {
    const { quantityChanged } = this.state;
    if (quantityChanged === false) this.setState({ quantityChanged: true });
    this.setState({ quantityChanged: false });
  }

  removeLastItem(string) {
    let stringNumber = string;
    if (
      stringNumber[stringNumber.length - 1] === "0" ||
      stringNumber[stringNumber.length - 1] === "."
    ) {
      stringNumber = stringNumber.slice(0, stringNumber.length - 1);
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
    let stringNumber = string.toFixed(2);
    const number = this.removeZero(stringNumber);
    return number;
  }

  addItemToLocalStorage() {
    const id = this.state.id;
    const title = this.state.title;
    const price = this.state.price;
    const totalPrice = this.state.price;
    const imagePath = this.state.thumbnail;
    const number = 1;
    if (Storage) {
      const getItemSaved = JSON.parse(localStorage.getItem("cart"));
      const values = getItemSaved === null ? [] : getItemSaved;
      let repeatedProduct = false;
      values.forEach((item) => {
        if (item.id === id) {
          item.number += 1;
          item.totalPrice =
            parseFloat(item.totalPrice) + parseFloat(item.price);
          item.totalPrice = this.roundNumber(item.totalPrice);
          repeatedProduct = true;
        }
      });
      if (repeatedProduct) {
        localStorage.setItem("cart", JSON.stringify(values));
        return this.changeQuantityState();
      }
      values.push({ id, title, price, imagePath, number, totalPrice });
      localStorage.setItem("cart", JSON.stringify(values));
      this.changeQuantityState();
    }
  }

  render() {
    const { title, price, thumbnail } = this.state;

    return (
      <div className="container">
        <Link to="/">Retornar</Link>
        <br></br>
        <br></br>
        <div className="containerProduct">
          <h3 data-testid="product-detail-name">Descrição: {title}</h3>
          <div>R$ {price}</div>
          <img src={thumbnail} alt={title} />
        </div>
        <br></br>
        <br></br>
        <CartIcon cartItens={JSON.parse(localStorage.getItem("cart"))} />
        <br></br>
        <br></br>
        <div className="containerDetails">
          Especificações Técnicas
          <ul style={{listStyle: "none"}}>
            {this.state.attributes.map((element) => {
              return (
                <li key={element.id}>
                  {`${element.name} --- ${element.value_name}`};
                </li>
              );
            })}
          </ul>
        </div>
        <br></br>
        <br></br>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={this.addItemToLocalStorage}
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

export default ProductDetail;
