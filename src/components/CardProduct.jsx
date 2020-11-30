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
      <div>
        <Link
          to={ { pathname: `/${title}`, product: { item } } }
          data-testid="product"
          className="item-card"
        >
          <div data-testid="product-detail-link">
            <img src={ thumbnail } alt={ title } className="card-image" />
            <h4>{title}</h4>
            <p>{`R$ ${price}`}</p>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToLocalStorage }
        >
          Adicionar ao carrinho
        </button>
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
