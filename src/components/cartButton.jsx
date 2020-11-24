import React from 'react';

class cartButton extends React.Component {
  render() {
    return (
      <form>
        <label data-testid='shopping-cart-empty-message'>
          <input  type='text'/>
          <br />
          <div data-testid='shopping-cart-button' >Seu carrinho está vazio</div>
        </label>
      </form>
    );
  }
}

export default cartButton;
