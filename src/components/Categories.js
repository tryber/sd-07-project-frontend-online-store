import React from 'react';
// import { Link } from 'react-router-dom';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.getApi = this.getApi.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

  async getApi() {
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
        <select name="categorias" id="categories">
          <option key="Todas" value="">
            Todas
          </option>
          {categories.map((category) => {
            const { id, name } = category;
            return (
              <option key={ id } value={ name }>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Categories;
