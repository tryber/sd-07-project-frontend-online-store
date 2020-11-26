import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const { title, price } = this.props;
    let flag = true;
    const size = 0;

    if (products.length === size) {
      products.push({ title, price, qtd: 1 });
    } else {
      products.forEach((element, index, array) => {
        if (element.title === title) {
          element.qtd += 1;
          flag = false;
        } else if (index === array.length - 1 && flag) {
          products.push({ title, price, qtd: 1 });
        }
      });
    }

    localStorage.setItem('products', JSON.stringify(products));
  }

  // prettier-ignore
  render() {
    const { title, price, thumbnail, id, filterId } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <p>{title}</p>
        <img src={ thumbnail } alt="" />
        <p>
          R$
          {price}
        </p>
        <Link to={ `/${id}&${filterId}` } data-testid="product-detail-link">
          Mais detalhes
        </Link>
        <div>
          <button
            type="button"
            onClick={ this.addToCart }
            data-testid="product-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  filterId: PropTypes.string.isRequired,
};

export default Product;
