import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/productList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.addCart = this.addCart.bind(this);

    this.state = {
      productItem: {},
    };
  }

  addCart() {
    const { productItem } = this.state;
    // const { id, title, thumbnail, price } = productItem;
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;

    // console.log(product);
    this.setState({ productItem: product });
    localStorage.setItem('key', id);
  }

  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;

    return (
      <div>
        <div>
          <Link to={ `/${id}` } data-testid="product-detail-link">
            <div data-testid="product">
              <h4>{title}</h4>
              <img src={ thumbnail } alt="Produto listado" />
              <p>{price}</p>
            </div>
          </Link>
        </div>
        <div>
          <button
            type="submit"
            name="button"
            onClick={ this.addCart }
          >
            Clique Aqui
          </button>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ProductList;
