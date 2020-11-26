import React from 'react';
import * as api from '../services/api';
import Categoria from './Categoria'

class ListaDeCategorias extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    api.getCategories().then(response => {
      this.setState({
        categories: response,
      })
    });
  
  }
  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map((category) =>
          <Categoria
            key={category.name}
            category={category}
          />
        )}
      </ul>
    )
  }
}

export default ListaDeCategorias;