import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Rating from '../components/Rating';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const {
      detailsId,
      detailsTitle,
      detailsThumbnail,
      detailsPrice,
    } = props.location.state;
    this.state = {
      id: detailsId,
      title: detailsTitle,
      thumbnail: detailsThumbnail,
      price: detailsPrice,
    };
  }

  async addToCart() {
    const { title, price, thumbnail, id } = this.state;
    const objItem = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
    };
    const newState = [objItem];
    localStorage.setItem('cart', JSON.stringify(newState));
  }

  render() {
    const { id, title, thumbnail, price } = this.state;
    return (
      <div className="">
        <Link to="/carrinho" data-testid="shopping-cart-button">
          <img
            alt="carrinho"
            src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png"
            width="50"
            height="50"
          />
        </Link>
        <div key={ id } className="card-info-details">
          <img src={ thumbnail } alt={ title } />
          <div>
            <strong>
              <span data-testid="product-detail-name">{ title }</span>
            </strong>
            <span className="price-card">
              R$
              { price }
            </span>
            <button
              type="button"
              name={ id }
              className="details-link"
              data-testid="product-detail-add-to-cart"
              onClick={ () => this.addToCart(id) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
        <Rating />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      detailsId: PropTypes.string.isRequired,
      detailsTitle: PropTypes.string.isRequired,
      detailsThumbnail: PropTypes.string.isRequired,
      detailsPrice: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
