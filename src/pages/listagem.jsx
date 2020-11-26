import React, { Component } from "react";
import "./listagem.css";
import SearchBar from "../components/SearchBar";
import CategoryList from "../components/CategoryList";
import * as api from '../services/api';
import Carrinho from './carrinho'
import { Link } from 'react-router-dom';

class Listagem extends Component {
  render() {
    return (
      <div className="main">
        {/* <div className="CategoryList">
          <h3>Categorias</h3>
           </div> */}
          <div className="SearchBar">
          <SearchBar />
       <Link to = "/carrinho" data-testid="shopping-cart-button"><img src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50"></img></Link>
        </div>
      </div>
    );
  }
}

export default Listagem;
