import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ShoppingCartButton, Buy, Evalue, Assessments, GoBack } from '../components/index';

class Details extends Component {
  constructor() {
    super();
    this.getSubmit = this.getSubmit.bind(this);
    this.state = {
      storage: [],
    };
  }

  componentDidMount() { this.getStorage(); }

  componentDidUpdate(prevState) { this.updateStorage(prevState); }

  getStorage() {
    const { location: { id } } = this.props;
    if (localStorage.getItem(id)) {
      this.setState({ storage: JSON.parse(localStorage.getItem(id)) });
    }
  }

  getSubmit(storageAdd) {
    this.setState(({ storage }) => ({ storage: [storageAdd, ...storage] }));
  }

  updateStorage(prevState) {
    const { location: { id } } = this.props;
    const { storage } = this.state;
    if (prevState.storage !== storage) {
      localStorage.setItem(id, JSON.stringify(storage));
    }
  }

  render() {
    const {
      location: { id, title, thumbnail, price }, shoppingCard, addToCard,
    } = this.props;
    const { storage } = this.state;
    return (
      <div>
        <div>
          <GoBack />
        </div>
        <div>
          <ShoppingCartButton productsInShoppingCart={ shoppingCard } />
        </div>
        <h2 data-testid="product-detail-name">
          {`Produto ${title} - R$ ${price}`}
        </h2>
        <div>
          <img alt={ title } src={ thumbnail } />
        </div>
        <Buy
          dataTestId="product-detail-add-to-cart"
          id={ id }
          title={ title }
          price={ price }
          thumbnail={ thumbnail }
          addToCard={ addToCard }
        />
        <h4>Especificações técnicas</h4>
        <ul>
          <li>{ title }</li>
          <li>{ price }</li>
        </ul>
        <Evalue getSubmit={ this.getSubmit } />
        <Assessments storage={ storage } />
      </div>
    );
  }
}
Details.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    addToCard: PropTypes.func.isRequired,
  }).isRequired,
  shoppingCard: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCard: PropTypes.func.isRequired,
};

export default Details;
