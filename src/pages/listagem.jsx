import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Listagem extends Component {
  constructor(){
    super();
    this.listOfCategory = this.listOfCategory.bind(this);
    this.state = {
      category: [],
    }
  }

  componentDidMount() {
    this.listOfCategory();
  }

  async listOfCategory() {
    const Fetch = await api.getCategories();
    this.setState({
      category: Fetch,
    })
  }
  render() {
    return(
      <div>
        <input type="text" id="list"></input>
        <label htmlFor="list" data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</label>
        <Link to = "/carrinho" data-testid="shopping-cart-button"><img src="https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png" width="50" height="50"></img></Link>
        {this.state.category.map(categoria => <li data-testid="category" key={categoria.id}>{categoria.name}</li>)}
        </div>
    )
  }
}

export default Listagem;
