import React from 'react';
import PropTypes from 'prop-types';
import { addCartItem } from '../services/localStorageHandler';
import * as ratingAPI from '../services/ratingAPI';
import ProductAttributes from '../components/ProductAttributes';
import ShoppingCartButton from '../components/ShoppingCartButton';
import RatingForm from '../components/RatingForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ id, title, price }) {
    const cartItem = { id, title, price };
    addCartItem(cartItem);
  }


  handleSubmit(newRating) {
    const { location: { state: { product: { id } } } } = this.props;
    newRating.id = id;
    ratingAPI.addRating(newRating);
  }

  render() {
    // const { id } = this.props.location.state.product;
    // console.log(id);
    const { location: { state: {
      product: { id, title, price, thumbnail, attributes },
    } } } = this.props;

    const { history: { goBack } } = this.props;

    return (
      <div>
        <button type="button" onClick={ goBack }>ImagemVoltar</button>
        <ShoppingCartButton />
        <h3 data-testid="product-detail-name">{`${title} R$${price}`}</h3>
        <img alt="Imagem do Poduto" src={ thumbnail } />
        <div>
          <h6>Especifições Técnicas</h6>
          {attributes.map(
            (attribute) => (
              <ProductAttributes
                key={ attribute.id }
                attribute={ attribute }
              />
            ),
          )}
          <button
            type="button"
            name="productId"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handleClick({ id, title, price }) }
          >
            Adicionar ao carrinho
          </button>
        </div>
        <h3>Avaliações</h3>
        <RatingForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        attributes: PropTypes.arrayOf.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};


export default ProductDetails;
