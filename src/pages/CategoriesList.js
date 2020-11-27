import React from 'react';
import propTypes from 'prop-types';

import * as api from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = { list: [{ id: 0, name: '' }] };
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
    const { list } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        Categorias de Produtos:
        {list.map(({ id, name }) => (
          <div key={ id }>
            <input
              onClick={ onClick }
              id={ id }
              type="radio"
              value={ name }
              name="categoryId"
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

CategoriesList.propTypes = {
  onClick: propTypes.func.isRequired,
};
