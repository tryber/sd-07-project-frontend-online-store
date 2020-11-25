import React, { Component } from 'react';

class Listagem extends Component {
  render() {
    return(
      <div>
        <input type="text" id="list"></input>
        <label htmlFor="list" data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</label>
        <a href = "carrinho.jsx"><img src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50" data-testid="shopping-cart-button"></img></a>
     </div>
      
    )
  }
}

export default Listagem;
