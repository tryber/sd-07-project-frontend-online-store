import React, { Component } from 'react';

import './style.css';
class Categorias extends Component {
  render() {
    const { data, filterCategory } = this.props;

    return (
      <>
        <h1>Categorias</h1>
        <div className="category-list-items" onChange={filterCategory}>
          {data.map((categoria) => {
            return (
              <div key={categoria.id} className="item-category">
                <input
                  id={categoria.id}
                  className="checkbox"
                  onClick={this.props.onSetCategories}
                  type="radio"
                  name="checkCategory"
                  value={categoria.id}
                />
                <label
                  className="text-category"
                  data-testid="category"
                  htmlFor={categoria.id}
                >
                  {categoria.name}
                </label>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Categorias;
