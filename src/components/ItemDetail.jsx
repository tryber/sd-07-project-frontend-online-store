import React from 'react';
import PropTypes from 'prop-types';
import ButtonShop from './ButtonShop';
import { addToCart } from '../services/cartAPI';

export default class ItemDetail extends React.Component {
  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      review: '',
    };
  }

  changeValue(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { location: { state: { title } } } = this.props;
    const { location: { state } } = this.props;
    const { review } = this.state;
    return (
      <div>
        <ButtonShop />
        <h1>Product Detail</h1>
        <div data-testid="product-detail-name">
          {title}
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addToCart(state) }
        >
          Adicionar ao carrinho
        </button>
        <h1>Avaliações</h1>
        <textarea
          data-testid="product-detail-evaluation"
          name="review"
          id="id"
          value={ review }
          onChange={ this.changeValue }
        />
      </div>
    );
  }
}

ItemDetail.propTypes = {
  id: PropTypes.string,
}.isRequired;
