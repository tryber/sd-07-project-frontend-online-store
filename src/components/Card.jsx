import React from 'react';

class Card extends React.Component {
  render() {
    const { thumbnail, title, price } = this.props.produto
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={thumbnail} alt={title} />
        <h4>R$: {price}</h4>
      </div>
      
    );
  };
}

export default Card;