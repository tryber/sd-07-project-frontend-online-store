import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ShoppingCartButton,
  Buy,
  Evalue,
  Assessments,
  GoBack,
} from '../components/index';

class Details extends Component {
  constructor() {
    super();
    this.getSubmit = this.getSubmit.bind(this);
    this.state = {
      storage: [],
    };
  }

  componentDidMount() {
    this.getStorage();
  }

  componentDidUpdate(prevState) {
    this.updateStorage(prevState);
  }

  getStorage() {
    const {
      location: { id },
    } = this.props;
    if (localStorage.getItem(id)) {
      this.setState({ storage: JSON.parse(localStorage.getItem(id)) });
    }
  }

  getSubmit(storageAdd) {
    this.setState(({ storage }) => ({ storage: [storageAdd, ...storage] }));
  }

  updateStorage(prevState) {
    const {
      location: { id },
    } = this.props;
    const { storage } = this.state;
    if (prevState.storage !== storage) {
      localStorage.setItem(id, JSON.stringify(storage));
    }
  }

  render() {
    const {
      location: { id, title, thumbnail, price, availableQuantity },
      shoppingCard,
      addToCard,
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
          { `Produto ${title} - R$ ${price}` }
        </h2>
        <div>
          <img alt={ title } src={ thumbnail } />
        </div>
        <Buy
          dataTestId="product-detail-add-to-cart"
          id={ id }
          title={ title }
          price={ price }
          availableQuantity={ availableQuantity }
          thumbnail={ thumbnail }
          addToCard={ addToCard }
        />
        <h4>Especificações técnicas</h4>
        <ul>
          <li>{title}</li>
          <li>{price}</li>
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
    availableQuantity: PropTypes.number.isRequired,
    addToCard: PropTypes.func.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }),
  shoppingCard: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCard: PropTypes.func.isRequired,
};

Details.defaultProps = {
  location: { shipping: undefined },
};

export default Details;
