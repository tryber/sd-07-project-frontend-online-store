import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// import { getProductDetail } from '../services/api'
import Loading from '../components/Loading';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.fetchProductDetails = this.fetchProductDetails.bind(this);

    this.state = {
      loading: true,
      productDetail: {},
    };
  }

  componentDidMount() {
    this.fetchProductDetails();
  }

  backPage() {
    window.history.back();
  }

  fetchProductDetails() {
    this.setState({ loading: true },
      async () => {
        const { id } = this.props;
        const productDet = await fetch(`https://api.mercadolibre.com/items/${id}`);
        this.setState(() => ({
          productDetail: productDet,
          loading: false,
        }));
      });
  }

  render() {
    const { loading, productDetail } = this.state;

    if (loading) return <Loading />;

    const { title, price, thumbnail } = productDetail;

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
