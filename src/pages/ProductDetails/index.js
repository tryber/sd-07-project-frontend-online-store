import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getProductFromId } from '../../services/api';
import CartButton from '../../components/CartButton';


class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: '',
    };
    this.getProductFromId = this.getProductFromId.bind(this);
  }

  async componentDidMount() {
    this.getProductFromId();
  }

  async getProductFromId() {
    const { match } = this.props;
    const { id } = match.params;
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    try {
      const data = await response.json();
      return this.setState({ product: data });
    } catch (error) {
      return {
        error,
      };
    }
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <article>
        <header>
          <h2 data-testid="product-detail-name">{title}</h2>
          <aside>
            <img alt="product thumbnail" src={ thumbnail } />
          </aside>
          <main>
            <div>
              Estoque: available_quantity
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
  match: PropTypes.shape().isRequired,
};

export default ProductDetails;
