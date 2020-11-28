import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Loading from '../components/Loading';
import ReviewList from '../components/ReviewList';
import AddSpecificProduct from '../components/AddSpecificProduct';
import {
  addProductInLocalStorage,
  recoveryProductsFromLocalStorage,
} from '../services/cartFunctions';
import {
  recoveryReviewsFromLocalStorage,
} from '../services/reviewsFunctions';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.addShoppingCartItems = this.addShoppingCartItems.bind(this);

    this.state = {
      loading: true,
      product: {},
      shoppingCartItems: [],
    };
  }

  componentDidMount() {
    this.APIquery();
    recoveryReviewsFromLocalStorage();
  }

  async APIquery() {
    const { match } = this.props;
    const { params } = match;
    this.setState(
      { loading: true },
      async () => {
        const { id } = params;
        const productID = await api.fetchAPIByID(id);
        // console.log(productID);
        this.setState({
          loading: false,
          product: productID,
        });
      },
    );
  }

  async addShoppingCartItems(event) {
    const oldList = recoveryProductsFromLocalStorage();
    this.setState({
      shoppingCartItems: oldList,
    });
    const { target } = event;
    const { id } = target;
    const { product } = this.state;

    await this.setState((previousState) => ({
      shoppingCartItems: [...previousState.shoppingCartItems, product],
    }));
    const { shoppingCartItems } = this.state;
    addProductInLocalStorage(shoppingCartItems);
  }

  render() {
    const { product, loading } = this.state;
    const { title, price, pictures, attributes } = product;

    // console.log(product);

    if (loading === true) return <Loading />;

    return (
      <div>
        <div className="product-detail">
          <div className="container-title-image">
            <h2 data-testid="product-detail-name">
              {title}
              {' '}
              - R$
              {price}
            </h2>
            <img
              className="product-detail-image"
              src={ pictures[0].url }
              alt={ `imagem do produto ${title}` }
            />
          </div>
          <ul className="container-list">
            {attributes.map(({ name, value_name, id }) => (
              <li key={ id }>
                {name}
                :
                {' '}
                { value_name }
              </li>))}
          </ul>

        </div>
        <AddSpecificProduct addShoppingCartItems={ this.addShoppingCartItems } />
        <ReviewList />
      </div>
    );
  }
}

ProductDetails.propTypes = { match: PropTypes.func.isRequired };


export default ProductDetails;
