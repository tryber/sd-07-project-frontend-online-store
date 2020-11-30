import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

class ListCardsProduts extends React.Component {
  constructor() {
    super();
    this.addInCart = this.addInCart.bind(this);
  }

  addInCart() {
    const { product } = this.props;
    const { id, title, price, thumbnail } = product;
    const quantity = 1;
    let productRepet = false;
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    const valor = (carrinho === null ? [] : carrinho);
    valor.forEach((item) => {
      if (item.id === id) {
        item.quantity += 1;
        productRepet = true;
      }
    });
    if (productRepet) {
      return localStorage.setItem('carrinho', JSON.stringify(valor));
    }
    valor.push({ id, title, thumbnail, price, quantity });
    localStorage.setItem('carrinho', JSON.stringify(valor));
  }

  render() {
    const {
      termo,
      product: { id, title, thumbnail, price, category_id: category },
    } = this.props;
    const parametros = `${category}-${termo}-${id}`;

    return (
      <div data-testid="product" className="product-card">
        <Link
          className="link-card"
          data-testid="product-detail-link"
          to={ `/product/${parametros}` }
        >
          <h3 className="title">{title}</h3>
          <img src={ thumbnail } alt={ `${title} sprite` } />
        </Link>
        <h4 className="price">
          R$
          { price }
        </h4>
        <button
          data-testid="product-add-to-cart"
          className="button-product"
          type="button"
          onClick={ this.addInCart }
        >
          ADICIONAR NO CARRINHO
        </button>
      </div>
    );
  }
}


ListCardsProduts.propTypes = {
  product: PropTypes.objectOf.isRequired,
  termo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ListCardsProduts;
