/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { getProductsFromQuery } from  '../src/services/api';
import ProductCard from '../src/components/ProductCard';


class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
        status: false,
        products: [],
        demand: '',
    }

    this.fecthProducts = this.fecthProducts.bind(this);
    this.change = this.change.bind(this);
}

async fecthProducts() {
    const { demand } = this.state
    const resultRequest = await getProductsFromQuery(demand);
    console.log(resultRequest);
    if(resultRequest === "") return <div>Nenhum produto foi encontrado</div>
    this.setState({
        status: true,
        products: resultRequest.results,
    });
    
} 

change({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
}




  render() {
    const { status, products } = this.state;
    return (
      <div>
        {(status) ? <ProductCard  products={products} /> : false}


        
          <div>
            <label htmlFor="inputHome">
              <div>
                <input 
                  data-testid="query-input"
                  name="demand"
                  className="inputHome"
                  type="text"
                  onChange={this.change}
                  
                />
                <button data-testid="query-button" onClick={this.fecthProducts}>PESQUISAR</button>
                <span data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </span>
              </div>
            </label>
            
          </div>
    
      </div>
    );
  }
}


export default ProductsList;