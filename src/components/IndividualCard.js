import React, { Component } from 'react';

class IndividualCard extends Component {
  render() {
    const { key, price, image, title } = this.props
    return (
      <div key={ key } data-testid="product">
        <h4>{title}</h4>
        <img src={ image } alt="titulo" />
        <p>{price}</p>
        <button type="button">Ver detalhes</button>
        <br />
        <button type="button">Adicionar ao carrinho</button>
      </div>
    );
  }
}

export default IndividualCard;
