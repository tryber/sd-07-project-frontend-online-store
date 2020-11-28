import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.addInCart = this.addInCart.bind(this);
  }

  addInCart(title) {
    if (localStorage.getItem(title)) {
      const amount = JSON.parse(localStorage.getItem(title)) + 1;
      localStorage.setItem(title, amount);
    } else {
      localStorage.setItem(title, 1);
    }
  }

  render() {
    const { location } = this.props;
    const { title, thumbnail, price, attributes } = location.product;

    return (
      <div>
        <div>
          <h1 data-testid="product-detail-name">
            { title }
            <span>{ price }</span>
          </h1>
          <img src={ thumbnail } alt="Ilustração produto" />
        </div>
        <div>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={() => this.addInCart(title)}
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <ul>
          <h2>Especificações Técnicas</h2>
          {attributes
            .map((attribute) => (
              <li key={ attribute.id }>
                { attribute.name }
                { attribute.value_name }
              </li>))}
        </ul>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      attributes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
