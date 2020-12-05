import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';
import AvaliationList from '../components/AvaliationList';
import AvaliationForm from '../components/AvaliationForm';

export default class ProductDetails extends Component {
  constructor() {
    super();

    this.getProduct = this.getProduct.bind(this);
    this.getStorage = this.getStorage.bind(this);
    this.setStorage = this.setStorage.bind(this);
    this.saveItemsFromDetail = this.saveItemsFromDetail.bind(this);
    this.addCartQuantity = this.addCartQuantity.bind(this);

    this.state = {
      name: '',
      thumbnail: '',
      avaliations: [],
      cartQuantity: localStorage.getItem('items_cart'),
    };
  }

  componentDidMount() {
    this.getProduct();
    this.getStorage();
  }

  getProduct() {
    const { location: { state: { item } } } = this.props;
    this.setState({
      name: item.title,
      thumbnail: item.thumbnail,
    });
  }

  getStorage() {
    const { name } = this.state;

    if (localStorage.getItem(`${name}`)) {
      this.setState({ avaliations: JSON.parse(localStorage.getItem(`${name}`)) });
    }
  }

  setStorage(avaliations) {
    const { name } = this.state;

    const arrayOfAvaliations = localStorage.getItem(`${name}`)
      ? JSON.parse(localStorage.getItem(`${name}`))
      : [];
    arrayOfAvaliations.push(avaliations);
    localStorage.setItem(`${name}`, JSON.stringify(arrayOfAvaliations));
    this.setState({ avaliations: JSON.parse(localStorage.getItem(`${name}`)) });
  }

  addCartQuantity() {
    this.setState((prevState) => ({
      cartQuantity: Number(prevState.cartQuantity) + 1,
    }));
  }

  saveItemsFromDetail(item) {
    this.addCartQuantity();
    if (!localStorage.length) {
      localStorage.setItem('items',
        JSON.stringify([{
          sku: item.id,
          name: item.title,
          cost: item.price,
          quantity: item.available_quantity,
          image: item.thumbnail,
        }]));
      localStorage.setItem('items_cart', 1);
      return;
    }
    const objectValues = JSON.parse(localStorage.getItem('items'));
    localStorage.setItem('items',
      JSON.stringify([...objectValues, {
        sku: item.id,
        name: item.title,
        cost: item.price,
        quantity: item.available_quantity,
        image: item.thumbnail,
      }]));
    const cartQuantity = Number(localStorage.getItem('items_cart')) + 1;
    localStorage.setItem('items_cart', cartQuantity);
  }

  render() {
    const { location: { state: { item } } } = this.props;
    const { name, thumbnail, avaliations, cartQuantity } = this.state;
    return (
      <div>
        <header className="page-header">
          <Link to="/">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4
              4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707
              8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Link>
          <ShoppingCartButton cartQuantity={ cartQuantity } />
        </header>

        <div data-testid="product-detail-name">
          { name }
        </div>

        <img src={ thumbnail } alt={ name } />
        <p>
          Especificações do produto...
        </p>

        <AvaliationForm form={ this.setStorage } />
        <AvaliationList avaliations={ avaliations } />

        <button
          type="button"
          onClick={ () => this.saveItemsFromDetail(item) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
