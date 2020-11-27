import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BotAdd from './BotAdd';

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
    const { thumbnail, title, price, id, category_id: categortID } = produto;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <h4>{`R$: ${price}`}</h4>
        <div>
          <BotAdd onClick={ this.addToCart } />
          <Link
            data-testid="product-detail-link"
            to={ `product-details/${id}/${categortID}` }
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
