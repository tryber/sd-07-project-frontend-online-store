import React from 'react';

class Carrinho extends React.Component {
  render() {
    return(
      <div>
       <img src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50" data-testid="shopping-cart-button"></img>
       <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
     </div>
      
    )
  }
}

export default Carrinho;
