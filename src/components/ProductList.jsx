import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.addToCart(this.props.product)
  }

  render() {
    const { items } = this.props;
    const { title, price, thumbnail } = items;
    return (
      <div className="product" data-testid="product">
        <h2>{title}</h2>
        <img src={ thumbnail } alt="item" width="300px" />
        <p>
          R$
          { price }
        </p>
        <Link
          to={ { pathname: '/shopping-cart', state: { items } } }
        >
          <button data-testid="product-add-to-cart" type="button">Adicionar ao Carrinho</button>
        </Link>
      </div>
    );
  }
}

export default ProductList;
