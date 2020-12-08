import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Categorias extends Component {
  render() {
    const { data, filterCategory } = this.props;

    return (
      <>
        <h1>Categorias</h1>
        <div className="category-list-items" onChange={ filterCategory }>
          {
            data.map((categoria) => (
              <div key={ categoria.id } className="item-category">
                <input
                  id={ categoria.id }
                  className="checkbox"
                  type="radio"
                  name="checkCategory"
                  value={ categoria.id }
                />
                <label
                  className="text-category"
                  data-testid="category"
                  htmlFor={ categoria.id }
                >
                  {categoria.name}
                </label>
              </div>
            ))
          }
        </div>
      </>
    );
  }
}

Categorias.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterCategory: PropTypes.func.isRequired,
};

export default Categorias;
