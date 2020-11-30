import React from 'react';

class Informations extends React.Component {
  render(){
    const { product: { id, title, price, quantity, thumbnail } } = this.props;
    return(
      <div>
          <p>{id}</p>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>{price}</p>
          <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          <img src={thumbnail} alt="imagem do produto" />
      </div>
    )
  }
}

export default Informations;