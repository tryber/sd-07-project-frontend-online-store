import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import CartButton from '../../components/CartButton';

import { addToCart } from '../../services/cartApi';

class ProductDetails extends Component {
  constructor() {
    super();

    this.handleState = this.handleState.bind(this);
    this.state = {
      product: {
        title: '',
        price: 0,
        thumbnail: '',
        availableQuantity: 0,
      },
    };
  }

  async componentDidMount() {
    const { match: { params: { id, categoryID, searchInput } } } = this.props;
    const query = (searchInput === 'false') ? undefined : searchInput;
    const { results } = await getProductsFromCategoryAndQuery(categoryID, query);
    const product = results.find(({ id: productID }) => productID === id);
    this.handleState(product);
  }

  handleState(product) {
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail, available_quantity: availableQuantity } = product;

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
        <button
          type="button"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </article>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      categoryID: PropTypes.string.isRequired,
      searchInput: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
