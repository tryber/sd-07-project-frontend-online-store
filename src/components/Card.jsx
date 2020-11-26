import React from 'react';
import { Link } from 'react-router-dom';
class Card extends React.Component {
  render() {
    const { thumbnail, title, price } = this.props.produto
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
        <h4>R$: {price}</h4>
        <div>
          <Link to={`product-details/${title}`}>Detalhes do produto</Link>
        </div>
      </div>   
    );
  };
}

export default Card;