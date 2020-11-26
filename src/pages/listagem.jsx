import React, { Component } from "react";
import "./listagem.css";
import SearchBar from "../components/SearchBar";
import CategoryList from "../components/CategoryList";
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Listagem extends Component {
  render() {
    return (
      <div className="main">
        {/* <div className="CategoryList">
          <h3>Categorias</h3>
           </div> */}
          <div className="SearchBar">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Listagem;
