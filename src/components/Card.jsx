import React from 'react';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const p = this.props;
    const { title, price, thumbnail, id } = p.produto;
    const { productAdd } = p;
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
    const p = this.props
    const { thumbnail, title, price, id, category_id } = p.produto;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <h4>
          R$: 
          {price}
        </h4>
        <div>
          <input
            type="button"
            onClick={ this.addToCart }
            data-testid="product-add-to-cart"
          >
            Adicionar ao Carrinho
          </input>
          <Link data-testid="product-detail-link"
            to={`product-details/${id}/${category_id}`}>Detalhes do produto
          </Link>
        </div>
      </div>   
    );
  };
}

export default Card;