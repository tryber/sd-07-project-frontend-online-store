import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ItemCard extends React.Component {
  constructor() {
    super();
    this.handleCart = this.handleCart.bind(this);
  }

  handleCart() {
    const { title, price } = this.props;
    let addLocalStorage = JSON.parse(localStorage.getItem('cart'));
    if (addLocalStorage !== null) {
      addLocalStorage.push(`${title} $${price}`);
    } else {
      addLocalStorage = [];
      addLocalStorage.push(`${title} $${price}`);
    }
    localStorage.setItem('cart', JSON.stringify(addLocalStorage));
  }

  render() {
    const { id, product, title, image, price, freeShipping } = this.props;
    let temFrete = '';
    let elementPropertie =''
    if (freeShipping === true) {
      temFrete = 'Frete Grátis';
      elementPropertie = 'free-shipping';
    }
    return (
      <div className="card-product" data-testid="product">
        <span className="card-title">{ title }</span>
        <img src={ image } alt="foto-produto" className="card-image" />
        <span className="card-price">
          R$
          { price }
        </span>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleCart }
        >
          Adicionar ao carrinho!
        </button>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `detailsProduct/${id}`, state: { product } } }
          className="card-price"
        >
          Detalhes
        </Link>
        <p
        data-testid={elementPropertie}
        >
          {temFrete}
        </p>
      </div>
    );
  }
}

export default ItemCard;

ItemCard.propTypes = {
  id: PropTypes.string,
  product: PropTypes.shape({}),
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

ItemCard.defaultProps = {
  id: PropTypes.string,
  product: PropTypes.shape({}),
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};
