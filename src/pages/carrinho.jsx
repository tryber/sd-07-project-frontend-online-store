import React from 'react';
import { Link } from 'react-router-dom';

class Carrinho extends React.Component {
  render() {
    return(
      <div>
       <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
       <Link to = "/carrinho" data-testid="shopping-cart-button"><img src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50"></img></Link>

     </div>
      
    )
  }
}

export default Carrinho;
