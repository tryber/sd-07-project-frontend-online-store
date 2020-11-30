import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

class CardProduct extends React.Component {
  constructor() {
    super();
    this.addToLocalStorage = this.addToLocalStorage.bind(this);
    this.createLocalStorage = this.createLocalStorage.bind(this);
    this.readLocalStorage = this.readLocalStorage.bind(this);
  }

  componentDidMount() {
    this.createLocalStorage();
  }

  createLocalStorage() {
    if (!localStorage.getItem('cartItems')) {
      localStorage.setItem('cartItems', JSON.stringify([]));
    }
  }

  readLocalStorage() {
    return JSON.parse(localStorage.getItem('cartItems'));
  }

  addToLocalStorage() {
    const { item } = this.props;
    const cartItems = this.readLocalStorage();
    const addItem = [...cartItems, item];
    localStorage.setItem('cartItems', JSON.stringify(addItem));
    console.log(this.readLocalStorage());
  }


  render() {
    const { item } = this.props;
    const { title, price, thumbnail } = item;
    return (
      <div className="product-card">
        <Link
          to={ { pathname: `/${title}`, product: { item } } }
          data-testid="product"
        >
          <img src={ thumbnail } alt={ title } />
        </Link>
        <div className="product-info">
          <Link
            to={ { pathname: `/${title}`, product: { item } } }
            data-testid="product"
            className="product-link"
          >
            <div data-testid="product-detail-link">
              <h4>{ title }</h4>
            </div>
          </Link>
          <p>{`R$ ${price}`}</p>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.addToLocalStorage }
            className="add-to-cart-button"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

CardProduct.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default CardProduct;
