import React, { Component } from "react";
import "./listagem.css";
import SearchBar from "../components/SearchBar";
import CategoryList from "../components/CategoryList";

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
