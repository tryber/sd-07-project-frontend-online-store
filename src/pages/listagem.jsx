import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Listagem extends Component {
  render() {
    return(
      <div>
        <input type="text" id="list"></input>
        <label htmlFor="list" data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</label>
        <Link to = "/carrinho" data-testid="shopping-cart-button"><img src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50"></img></Link>
     </div>
      
    )
  }
}

export default Listagem;
