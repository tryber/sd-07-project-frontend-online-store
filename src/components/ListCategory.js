import React, { Component } from 'react';
import * as api from '../services/api'


class ListCategory extends Component {
  constructor() {
    super()
    this.fecthItems = this.fecthItems.bind(this)
  }
  async fecthItems() {
    const seachFecth = await api.getCategories()
    return seachFecth;
  }

  render() {

    const { id, name } = this.props
  
    return (
      <section className="main-category">
        <h1>Category</h1>

        {this.api.fecthItems().map((objItem) => <span>{objItem.name}</span>)} 

        <div key={id}>
          <label>
            <input type="radio" value="category1" name="Category" />
            category1
          </label><br />
          
        </div>

      </section>
    );
  }
};

export default ListCategory;