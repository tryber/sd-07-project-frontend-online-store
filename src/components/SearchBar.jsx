import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as api from '../services/api';
import ProductCard from '../components/ProductCard.jsx'
import '../App.css'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.hendleSubmit = this.hendleSubmit.bind(this);
    this.state = {
      searchItems: '',
      itemsFindOut: [],
      loading: false,
    }
  }



  hendleSubmit() {
    api.getProductsFromCategoryAndQuery(this.state.searchItems)
    .then(products => this.setState({ itemsFindOut: products, loading:true }))
    .catch(error => console.log(error))
    if (this.state.loading === false) { return <Redirect to="/pages/ProductNotFound.jsx" /> }
    
  }
  render() {
    const { itemsFindOut } = this.state;
    return (
    <main>
      <div className="item-inputsearch">
        <input
          data-testid = "query-input"
          type="text"
          name="input-text"
          id="input-text"
          onChange={(event) => this.setState({ searchItems: event.target.value })}
        />
        <hr />
        <label htmlFor="input-text" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button
          data-testid="query-button"
          type="button" 
          onClick={this.hendleSubmit}
        >
        Pesquisar
        </button>
      </div>
      <div className="grid">
         <div className="item">
            {this.state.loading ? itemsFindOut.results.map((item) => {
              const { id } = item;
              return <ProductCard key={id} item={item} />
            }) : ''}
          </div>
        <div>
      </div>
    </div>
  </main>
    );
  }
}
