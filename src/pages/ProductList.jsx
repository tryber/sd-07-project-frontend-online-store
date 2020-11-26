import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    const { title, image, price, id ,buttonValue } = this.props;
    
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ image } alt="" />
        <p>{price}</p>
        <Link to={{ pathname: `/details/${id}`, state: { title } }} data-testid="product-detail-link">Detalhes</Link>
        <button data-testid="product-add-to-cart" value={title} onClick={buttonValue}>Adicionar ao carrinho</button>
      </div>
    );
  }
}

export default ProductList;
