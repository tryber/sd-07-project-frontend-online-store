import React from 'react';
import * as FunctionsToCart from './FunctionsToCart';

class BotoesProduto extends React.Component {
  render() {
    const { handleTotalPrice, toDecreaseQuantity, handleDeleteClick, title, price, thumbnail, quantity, id } = this.props;
    return (
      <div>
      <button onClick={ () => {
        FunctionsToCart.updateQuantity(id, 'soma')
        handleTotalPrice()} }>+</button>
        <button onClick={ handleDeleteClick }>X</button>
        <button onClick={ () => {
        FunctionsToCart.updateQuantity(id, 'subtração')
        handleTotalPrice()} }>-</button>
      </div>
    )
  }
}

export default BotoesProduto;