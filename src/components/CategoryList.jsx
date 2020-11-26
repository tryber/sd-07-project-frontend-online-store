import React from 'react';
import CategoryItem from './CategoryItem';
import Item from './Item';
import * as api from '../services/api';

export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.setCategories = this.setCategories.bind(this);
    this.onLoadProducts = this.onLoadProducts.bind(this);
  }

  componentDidMount() {
    this.setCategories();
  }

  async setCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories: categories,
    });
  }

  async onLoadProducts(products = []) {
      console.log(products, this.props);
     if (this.props.onLoadProducts) {
        this.props.onLoadProducts(products);
     }
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="category-list">
        <div>
          <h1>Categorias</h1>
          {categories.map((category) => 
             <CategoryItem
                key={category.id} id={category.id} category={category.name} onLoadProducts={this.onLoadProducts} />)}
          {/* {this.state.products
            .map((product) => 
              <Item key={product.id} {...product} />)} */}
        </div>
      </div>
    );
  }
}
