import React, { Component } from 'react';
import * as api from '../services/api';
import Loading from './Loading';

class ListCategory extends Component {
  constructor() {
    super();
    this.fecthItems = this.fecthItems.bind(this);

    this.state = {
      loading: true,
      products: {},
    };
  }

  componentDidMount() {
    this.fecthItems();
  }

  async fecthItems() {
    this.setState({ loading: true }, async () => {
      const seachFecth = await api.getCategories();
      this.setState({
        loading: false,
        products: seachFecth,
      });
    });
  }

  render() {
    const { products, loading } = this.state;
    if (loading === true) return <Loading />;

    return (
      <section className="main-category-content">
        <h1 className="main-category-title">Categorias</h1>

        {products.map((objItem) => (
          <div
            key={ objItem.id }
            data-testid="category"
            className="main-category-content-flex"
          >
            <label
              htmlFor={ objItem.name }
              className="main-category-content-flexItem"
            >
              <input
                type="radio"
                value={ objItem.name }
                name="Category"
                id={ objItem.name }
              />
              { objItem.name }
            </label>
          </div>
        ))}
      </section>
    );
  }
}

export default ListCategory;
