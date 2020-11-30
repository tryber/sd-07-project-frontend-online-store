import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CartIcon from '../images/CartIcon.png';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.eventAddCart = this.eventAddCart.bind(this);
    this.state = {
      product: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fecthProducts();
  }

  async fecthProducts() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const result = await getProductsFromCategoryAndQuery(
      undefined,
      undefined,
      id,
    );
    await this.setState({
      product: result[0] ? result[0].body : result.results[0],
      loading: false,
    });
  }

  async eventAddCart() {
    const { product } = this.state;
    const object = {
      product,
      quantity: 1,
    };
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify([object]));
    } else {
      const arrayProducts = JSON.parse(localStorage.getItem('cart'));
      arrayProducts.push(object);
      localStorage.setItem('cart', JSON.stringify(arrayProducts));
    }
  }


  render() {
    const { loading, product } = this.state;

    if (loading) {
      return <h1>Carregando</h1>;
    }
    return (
      <div>
        <div data-testid="product" className="product">
          <img alt="Products" src={ product.thumbnail } />
          <div>
            <h4 data-testid="product-detail-name">
              {product.title}
            </h4>
            <h5>{product.price}</h5>
          </div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.eventAddCart }
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <Link to="/shoppingCart">
          <img
            src={ CartIcon }
            width="50"
            height="50"
            alt="shopping-cart-icon"
            data-testid="shopping-cart-button"
          />
        </Link>
      </div>
    );
  }
}

export default ProductDetail;

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
