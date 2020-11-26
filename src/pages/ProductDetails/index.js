import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import CartButton from '../../components/CartButton';

class ProductDetails extends Component {
  constructor() {
    super();

    this.handleState = this.handleState.bind(this);
    this.state = {
      title: '',
      price: 0,
      thumbnail: '',
      availableQuantity: 0,
    };
  }

  async componentDidMount() {
    const { match: { params: { id, categoryID } } } = this.props;
    const { results } = await getProductsFromCategoryAndQuery(categoryID, undefined);
    const product = results.find(({ id: productID }) => productID === id);
    this.handleState(product);
  }

  handleState({ title, price, thumbnail, available_quantity: availableQuantity }) {
    this.setState({
      title,
      price,
      thumbnail,
      availableQuantity,
    });
  }

  render() {
    const { title, price, thumbnail, availableQuantity } = this.state;

    return (
      <article>
        <header>
          <h2 data-testid="product-detail-name">{title}</h2>
          <aside>
            <img alt="product thumbnail" src={ thumbnail } />
          </aside>
          <main>
            <div>
              {availableQuantity}
            </div>
          </main>
        </header>
        <div>{`R$ ${price}`}</div>
        <CartButton />
      </article>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      categoryID: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
