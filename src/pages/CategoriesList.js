import React from 'react';

import * as api from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = { list: [] };
    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }


  async fetchCategories() {
    const list = await api.getCategories();
    this.setState({ list });
  }

  render() {
    const list = this.state.list;
    return (
      <div>
        Categorias de Produtos:
        {list.map(({ id, name }) => (
          <div key={ id }>
            <input
              id={ id }
              type="radio"
              value={ name }
              name="category"
              data-testid="category"
            />
            <label htmlFor={ id }>{ name }</label>
          </div>
        ))}
      </div>
    );
  }
}

export default CategoriesList;
