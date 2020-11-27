import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as categoryAPI from '../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Loading } from '../pages/index'


class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchProductDetails = this.fetchProductDetails.bind(this);

    this.state = {
      loading: true,
      productDetails: {},
    }
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
    const productDetails = await categoryAPI.getProductDetail(id);
    this.setState(() => ({productDetails: productDetails, loading: false}));
  }

  render() {
    const { loading } = this.state;
    const { title, price, thumbnail } = this.state.productDetails;

    if (loading) return <Loading />;

    return (
      <div className="product">
        <div className="buttons-link">
          <button onClick={this.backPage}>Voltar</button>
          <Link data-testid="shopping-cart-button" to="/cart">
            <FontAwesomeIcon icon={ faShoppingCart } />
          </Link>
        </div>
        <div className="product-details">
          <img src={thumbnail} alt="imagem do produto" />
          <div className="product-information">
            <p data-testid="product-detail-name">Item: {title}</p>
            <p>Preço: R$ {price}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
