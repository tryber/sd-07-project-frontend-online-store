import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
// import * as api from '../services/api';
// import Loading from '../components/Loading';
// import ReviewList from '../components/ReviewList';
import AddSpecificProduct from '../components/AddSpecificProduct';
import {
  addProductInLocalStorage,
  recoveryProductsFromLocalStorage,
} from '../services/cartFunctions';
import {
  recoveryReviewsFromLocalStorage,
} from '../services/reviewsFunctions';
import Footer from '../components/Footer';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.addShoppingCartItems = this.addShoppingCartItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.state = {
      // loading: true,
      product: props.location.product,
      shoppingCartItems: [],
      quantity: 1,
    };
  }

  componentDidMount() {
    // this.APIquery();
    recoveryReviewsFromLocalStorage();
  }

  addItem() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  removeItem() {
    const { quantity } = this.state;
    if (quantity < 1) {
      this.setState({ quantity: 0 });
    } else {
      this.setState({ quantity: quantity - 1 });
    }
  }

  async addShoppingCartItems() {
    const oldList = recoveryProductsFromLocalStorage();
    this.setState({
      shoppingCartItems: oldList,
    });

    const { product } = this.state;

    await this.setState((previousState) => ({
      shoppingCartItems: [...previousState.shoppingCartItems, product],
    }));
    const { shoppingCartItems } = this.state;
    addProductInLocalStorage(shoppingCartItems);
  }

  render() {
    const { quantity } = this.state;
    const { location } = this.props;
    const { title, price, thumbnail, attributes } = location.product;

    // if (loading === true) return <Loading />;

    return (
      <div>
        <div className="product-detail">
          <div className="container-title-image">
            <h2 data-testid="product-detail-name">
              {title}
              {' '}
            </h2>
            <h2>
              R$
              {price}
            </h2>
            <img
              className="product-detail-image"
              // src={ pictures[0].url }
              src={ thumbnail }
              alt={ `imagem do produto ${title}` }
            />
          </div>
          <ul className="container-list">
            {attributes.map(({ name, value_name: valueName, id }) => (
              <li key={ id }>
                {name}
                :
                {' '}
                { valueName }
              </li>))}
          </ul>
        </div>
        <div>
          <button
            type="button"
            onClick={ this.addItem }
          >
            {' '}
            +
            {' '}
          </button>
          <div>{quantity}</div>
          <button
            type="button"
            onClick={ this.removeItem }
          >
            {' '}
            -
            {' '}
          </button>
        </div>
        <AddSpecificProduct addShoppingCartItems={ this.addShoppingCartItems } />
        {/* <ReviewList /> */}
        <Footer />
      </div>
    );
  }
}

ProductDetails.propTypes = { location: PropTypes.shape({
  product: PropTypes.shape({
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    attributes: PropTypes.arrayOf(object).isRequired,
  }).isRequired,
}).isRequired,
};

export default ProductDetails;
