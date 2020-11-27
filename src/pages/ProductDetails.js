import React from 'react';
import PropTypes from 'prop-types';

import ProductAttributes from '../components/ProductAttributes';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ id, title, price }) {
    const cartItem = { [id]: { title, price } };
    if (!localStorage.cartItems) {
      localStorage.setItem('cartItems', JSON.stringify(cartItem));
    } else {
      const itemsInStorage = localStorage.getItem('cartItems');
      const retrievedItems = JSON.parse(itemsInStorage);
      const newItemsList = { ...retrievedItems, ...cartItem };
      localStorage.setItem('cartItems', JSON.stringify(newItemsList));
    }
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
