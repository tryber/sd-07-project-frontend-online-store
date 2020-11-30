import React from 'react';
import '../App.css';

class Informations extends React.Component {
  render(){
    const { product: { id, title, price, quantity, thumbnail } } = this.props;
    return(
      <div className="card-cart">
        <div>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
          <p>Valor: R$ {price}</p>
          <p data-testid="shopping-cart-product-quantity">Quantidade:{quantity}</p>
          </div>
          <img className="card-cart-image" src={thumbnail} alt="imagem do produto" />
      </div>
    )
  }
}

export default Informations;
