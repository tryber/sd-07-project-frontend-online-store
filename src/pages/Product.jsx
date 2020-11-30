import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import goBackArrow from '../img/back-arrow.png';
import CartButton from './CartButton';
import shoppingCartIcon from '../img/shopping-cart.png';
<<<<<<< HEAD
import StarRow from '../components/StarRow';

import {
  handleAddItemToCart,
  saveRateOnStore,
  readSavedFormsOnStore,
} from '../services/utils';


export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
      rating: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRatingOnChange = this.handleRatingOnChange.bind(this);
  }


  handleRatingOnChange(value) {
    this.setState({ rating: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, message, rating } = this.state;
    const form = {
      email,
      message,
      rating,
    };
    this.setState(form);
    const res = saveRateOnStore(form);
    if (res) {
      console.log('asdasd');
    } else {
      console.log('não deu certo');
    }
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { message, email, rating } = this.state;
    const rates = readSavedFormsOnStore();

=======

export default class Product extends Component {
  render() {
    const { location: { state: { productName, productImg, productPrice } } } = this.props;
>>>>>>> 09a5c6ca758e272420dba9b836615dcaa619cbc5
    return (
      <div>
        <div>
          <Link to="/">
            <img src={ goBackArrow } className="go-back-arrow-icon" alt="goBackArrow" />
          </Link>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            <img
              src={ shoppingCartIcon }
<<<<<<< HEAD
              className="icons shopping-cart-icon"
=======
              className="shopping-cart-icon"
>>>>>>> 09a5c6ca758e272420dba9b836615dcaa619cbc5
              alt="shoppingCartImg"
            />
          </Link>
        </div>
        <div>
<<<<<<< HEAD
          <h1 data-testid="product-detail-name">{ product.title }</h1>
          <img src={ product.thumbnail } alt="productImg" />
          <p>{ product.price }</p>
          <CartButton
            datatestid="product-detail-add-to-cart"
            addItemToCart={ handleAddItemToCart }
            product={ product }
          />
        </div>
        <div className="wrapper">
          <form className="form-rate-product" onSubmit={ this.handleSubmit }>
            <div className="display-flex">
              <input
                className="form-rate-input"
                type="email"
                value={ email }
                name="email"
                id="user-email"
                onChange={ this.handleInputChange }
                placeholder="E-mail"
              />
              <div className="rating-wrapper">
                <StarRow
                  rating={ rating }
                  ratingChange={ this.handleRatingOnChange }
                  max={ 5 }
                />
              </div>
            </div>
            <textarea
              type="email"
              value={ message }
              data-testid="product-detail-evaluation"
              name="message"
              className="form-rate-input"
              id="user-message"
              onChange={ this.handleInputChange }
              placeholder="Mensagem"
            />
            <button type="submit">Avaliar</button>
          </form>

        </div>
        <div className="wrapper">
          { rates ? (
            rates.map((rate) => (
              <div key={ rate.email } className="rates-wrapper">
                <div className="rating-header">
                  <p className="display-flex rating-paragraph">{ rate.email }</p>
                  <StarRow rating={ rate.rating } max={ 5 } />
                </div>
                <p className="display-flex">{ rate.message }</p>
              </div>))
          ) : (
            <p>Esse item não possui comentários ainda</p>
          ) }
        </div>
=======
          <h1 data-testid="product-detail-name">{ productName }</h1>
          <img src={ productImg } alt="productImg" />
          <p>{ productPrice }</p>
          <CartButton
            datatestid="product-detail-add-to-cart"
            productName={ productName }
          />
        </div>
>>>>>>> 09a5c6ca758e272420dba9b836615dcaa619cbc5
      </div>
    );
  }
}

Product.propTypes = {
<<<<<<< HEAD
  location: PropTypes.func.isRequired,
=======
  location: PropTypes.shape({
    state: PropTypes.shape({
      productName: PropTypes.string.isRequired,
      productImg: PropTypes.string.isRequired,
      productPrice: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
>>>>>>> 09a5c6ca758e272420dba9b836615dcaa619cbc5
};
