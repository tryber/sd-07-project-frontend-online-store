import React, { Component } from 'react';
import './listagem.css';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class Listagem extends Component {
  render() {
    return (
      <div className="main">
        <div className="SearchBar">
          <Link to="/carrinho" data-testid="shopping-cart-button"><img alt="carrinho" src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50" /></Link>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Listagem;
