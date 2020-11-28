import "./Product.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    const { id, title, price, thumbnail, actualizeCart } = this.props;
    return (
      <div className="container" data-testid="product" id={id}>
        <div className="item">
          <span><strong>Descrição: {title}</strong></span>
          <br></br>
          <br></br>
          <img src={thumbnail} alt={title} />
          <h5>R$ {price}</h5>
          <button
            data-testid="product-add-to-cart"
            name={id}
            onClick={actualizeCart}
          >
            Adicionar ao carrinho
          </button>
          <br></br>
          <br></br>
          <Link data-testid="product-detail-link" to={`/ProductDetail/${id}`}>
            Detalhes do produto
          </Link>
        </div>
      </div>
    );
  }
}

export default Product;
