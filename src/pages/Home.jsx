import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories /* getProductsFromCategoryAndQuery */ } from '../services/api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      // categoryId: '',
      // query: '',
      // result: '',
      // search: false,
    };
    this.upCategoryId = this.upCategoryId.bind(this);
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({ categories }));
  }

  // upCategoryId(search) {
  //   this.setState({ categoryId: search }, () => {
  //     const { categoryId, query } = this.state;
  //     getProductsFromCategoryAndQuery(categoryId, query)
  //      .then(result => { this.setState({ result, search: true, }) });
  //   });
  // }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor={ name }>
              <input
                data-testid="category"
                type="radio"
                name="categories"
                onChange={ () => this.upCategoryId(id) }
              />
              { name }
            </label>
          </div>
        ))}
        <input type="text" />
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
