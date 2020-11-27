import React from 'react';


class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
     product: []
    };        
  }

  render() {
    const { products } = this.props;
    //console.log(products);
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <img className="box-empty" src="https://image.flaticon.com/icons/png/512/15/15457.png" alt="caixa fazia" />
        
       

      </div>
    );
  }
}

export default Cart;
