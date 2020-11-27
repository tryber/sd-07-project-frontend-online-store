import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import * as categoryAPI from '../services/api';
import Loading from '../components/Loading';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchProductDetails = this.fetchProductDetails.bind(this);

    this.state = {
      loading: true,
      productDetails: {},
    };
  }

  componentDidMount() {
    this.fetchProductDetails();
  }

  backPage() {
    window.history.back();
  }

  async fetchProductDetails() {
    console.log(this.props);
    const { id } = this.props;
    const productDet = await categoryAPI.getProductDetail(id);
    this.setState(() => ({
      productDetails: productDet,
      loading: false,
    }));
  }

  render() {
    const { loading, productDetails } = this.state;
    const { title, price, thumbnail } = productDetails;

    if (loading) return <Loading />;

    return (
      <div className="product">
        <div className="buttons-link">
          <button type="submit" onClick={ this.backPage }>Voltar</button>
          <Link data-testid="shopping-cart-button" to="/cart">
            <FontAwesomeIcon icon={ faShoppingCart } />
          </Link>
        </div>
        <div className="product-details">
          <img src={ thumbnail } alt="imagem do produto" />
          <div className="product-information">
            <h3 data-testid="product-detail-name">
              Item:
              {title}
            </h3>
            <h3>
              Preço: R$
              { price }
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = { id: PropTypes.string.isRequired };

export default ProductDetails;
