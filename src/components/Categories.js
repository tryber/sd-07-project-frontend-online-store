import React from 'react';
// import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categoriesRequi = await api.getCategories().then((result) => {
      this.setState({ categories: result });
    });
    console.log(categoriesRequi);
  }

  render() {
    const { categories } = this.state;
    if (categories.length < 1) {
      return <p>Carregando...</p>;
    }
    return (
      <div>
        <label name="categorias">Categorias:</label>
        <select name="categorias" id="categories">
          <option key="Todas" value="">Todas</option>
          {categories.map((category) => {
            return <option key={ category.id } value={ category.name }>{ category.name }</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Categories;
