import React from 'react';
import * as api from '../services/api';

export default class CategorieFilter extends React.Component {
  constructor() {
    super();

    this.FetchCategories = this.FetchCategories.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.state = {
      categories: [],
      categoryId: '',
      searchText: '',
    };
  }

  componentDidMount() {
    this.FetchCategories();    
  }

  async findProduct() {
    let products = await api.getProductsFromCategoryAndQuery(
      this.state.categoryId,
      this.state.searchText
    );
    products = products.results
    console.log(products)
  }

  updateValue(event) {
    const { value } = event.target;
    this.setState({ categoryId: value , products: this.findProduct() });
  }
  
  async FetchCategories() {
    const result = await api.getCategories();
    this.setState({ categories: result });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((categorie) => (
          <div key={categorie.id}>
            <label htmlFor={categorie.id}>{categorie.name}</label>
            <input
              type="radio"
              data-testid="category"
              name={categorie.name}
              value={categorie.id}
              onClick={this.updateValue}
            />
          </div>
        ))}
      </div>
    );
  }
}
