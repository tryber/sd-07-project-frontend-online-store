import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import addToCart from '../services/addToCart';

class Product extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { title, thumbnail, price, id, category, searchKey } = this.props;
    addToCart({ title, thumbnail, price, id, category, searchKey });
  }

  render() {
    const { title, thumbnail, price, id, category, searchKey } = this.props;
    return (
      <div data-testid="product">
        <img src={thumbnail} alt="thumb" />
        <button type="button" data-testid="product-add-to-cart" onClick={this.addToCarts}>
          Adicionar ao carrinho
        </button>
        <div className="div-texts">
          <p className="p-price">
            R$
            {price}
          </p>
          <h2>{title}</h2>
          <Link
            data-testid="product-detail-link"
            to={`./details/${category || null}/${searchKey || null}/${id}`}
          >
            Detalhes
          </Link>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string,
  searchKey: PropTypes.string.isRequired,
};

Product.defaultProps = {
  category: undefined,
};

export default Product;
