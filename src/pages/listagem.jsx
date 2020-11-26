import React, { Component } from 'react';
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
        <div>
          {this.state.category.map(categoria => <li data-testid="category" key={categoria.id}>{categoria.name}</li>)}
        </div>
      </div>
    )
  }
}

export default Listagem;
