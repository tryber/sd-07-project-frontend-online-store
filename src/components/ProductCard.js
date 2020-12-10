import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

class ProductCard extends Component {
  constructor() {
    super();
    this.state = {
      productsCart: [],
    };
    this.addProductState = this.addProductState.bind(this);
  }

  addProductState(objctProduct) {
    this.setState((state) => ({
      productsCart: [...state.productsCart, objctProduct],
    }));
  }

  render() {
    const { products } = this.props;
    const { productsCart } = this.state;
    return (
      <div>
        <Button productsCart={ productsCart } />
        {products.map((product) => {
          const { id, title, thumbnail, price } = product;
          return (
            <div
              key={ id }
              data-testid="product"
            >
              <h2>{ title }</h2>
              <Link
                to={ {
                  pathname: `./pages/productpage/${id}`,
                  state: product,
                } }
              >
                <img src={ thumbnail } alt="products" data-testid="product-detail-link" />
              </Link>
              <p>{ price }</p>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => this.addProductState(product) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProductCard;
