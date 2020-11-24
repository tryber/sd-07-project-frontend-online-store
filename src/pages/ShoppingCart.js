import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
    render() {
      return (
          <div>
            <Link to="/"><button>Página inicial</button></Link>
            <div><h2>Carrinho de compras</h2></div>
            <ul><h3>Seu carrinho está vazio</h3></ul>
          </div>
      );
    }
  }
  
  export default ShoppingCart;