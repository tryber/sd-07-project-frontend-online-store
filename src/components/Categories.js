import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loading: true,
    };

    this.selectCategory = this.selectCategory.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => this.setState(
      { loading: false, categories },
    ));
  }

  selectCategory(event) {
    const { filterCategory } = this.props;
    const { value } = event.target;
    filterCategory(value);
  }

  render() {
    const { loading, categories } = this.state;
    if (loading) {
      return <aside>Carregando...</aside>;
    }
    return (
      <aside>
        <form onChange={ this.selectCategory }>
          {categories.map(({ id, name }) => (
            <div key={ id }>
              <input type="radio" id={ name } name="category" value={ id } />
              <label data-testid="category" htmlFor={ name }>{name}</label>
            </div>
          ))}
        </form>
      </aside>
    );
  }
}


Categories.propTypes = {
  filterCategory: PropTypes.func,
}.isRequired;

export default Categories;
