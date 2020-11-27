import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import ProductReview from '../components/productDetails/ProductReview';
import { Link } from 'react-router-dom';
import SumCart from '../components/home/SumCart'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      product: [],
    }
  }

  productNamePrice() {
    const { location: { details: { product: { title, price } } } } = this.props;
    return (
      <div className="product-details-name">
        <h1 data-testid="product-detail-name">{title}</h1>
        {/* <h2>{`R$ ${Number(price).toFixed(2)}`}</h2> */}
        <h2>{`R$ ${Number(price).toFixed()}`}</h2>
      </div>
    );
  }

  productPhoto() {
    const { location: { details: { product: { title, thumbnail } } } } = this.props;
    return (
      <div className="product-details-photo">
        <img src={thumbnail} alt={`Foto do ${title}`} />
      </div>
    );
  }

  handleClick({ id, title, price }) {
    const cartItem = { id, title, price };
    if (!localStorage.cartItems) {
      localStorage.setItem('cart', JSON.stringify([cartItem]));
    } else {
      const itemsInStorage = localStorage.getItem('cart');
      const parsedItems = JSON.parse(itemsInStorage);
      localStorage.setItem('cart', JSON.stringify(parsedItems.concat(cartItem)));
    }
  }

  render() {
    const { location: { details: { product: { id, title, price } } } } = this.props;
    return (
      <div className="product-detail-container">
        <Link to="/" className="product-details-homelink">Home</Link>
        <SumCart />
        <div>
          {this.productNamePrice()}
          <div className="product-details-contents">
            {this.productPhoto()}
            <div className="product-details-right">
              <h3>Especificações Técnicas</h3>
            </div>
          </div>
          <ProductReview />
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={this.handleClick({ id, title, price })}
          >Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    details: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
