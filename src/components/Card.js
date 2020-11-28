import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { productAdd, produto } = this.props;
    const { title, price, thumbnail, id } = produto;
    const product = {
      id,
      price,
      qtd: 1,
      title,
      thumbnail,
    };
    productAdd(product);
  }

  render() {
    const { produto } = this.props;
    const { thumbnail, title, price, id, category_id: categoryId } = produto;
    return (
      <div className="produto" data-testid="product">
        <div className="proI">
          <h4>{title}</h4>
          <img src={ thumbnail } alt={ title } />
          <h2>{`R$: ${price}`}</h2>
          <div className="proinput">
            <input
              type="button"
              onClick={ this.addToCart }
              data-testid="product-add-to-cart"
              value="Adicionar ao Carrinho"
            />
          </div>
        </div>
        <div className="prolink">
          <Link
            className="prolin"
            data-testid="product-detail-link"
            to={ `product-details/${id}/${categoryId}` }
          >
            Detalhes do produto
          </Link>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  produto: PropTypes.objectOf(PropTypes.object).isRequired,
  productAdd: PropTypes.func.isRequired,
};

export default Card;
