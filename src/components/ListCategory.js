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
    this.setState(
      { loading: true },
      async () => {
        const seachFecth = await api.getCategories();
        this.setState({
          loading: false,
          products: seachFecth,
        });
      },
    );
  }

  render() {
    const { products, loading } = this.state;
    if (loading === true) return <Loading />;

    return (
      <section className="main-category">
        <h1>Category</h1>

        {products.map((objItem) => (
          <div key={ objItem.id } data-testid="category">
            <label htmlFor="category">
              <input type="radio" value={ objItem.name } name="Category" />
              {objItem.name}
            </label>
          </div>))}
      </section>
    );
  }
}

export default ListCategory;
