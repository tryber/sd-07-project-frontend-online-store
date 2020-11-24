import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductsList extends Component {
    constructor() {
        super();
        this.state = {
            productsToRender: []
        }
    }
    
    render() {
      return(<div>
        <label>
        <button>Botão de pesquisa</button>
        <input type="text"></input>
        </label>
        <Link to="/shoppingCart"><button>Carrinho de compras</button></Link>
        <ul data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria</ul>
        </div>)
    }
  }
  
  export default ProductsList;
