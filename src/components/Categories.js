import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategory: '',
      loading: true,
    };

    this.selectCategory = this.selectCategory.bind(this);
  }

  componentDidMount() {
    api.getCategories()
      .then((categories) => this.setState({
        loading: false,
        categories,
      }));
  }

  selectCategory({ target: { key } }) {
    const { filterCategory } = this.props;
    this.setState({ selectedCategory: key });
    filterCategory(key);
  }

  render() {
    const { loading, categories, selectedCategory } = this.state;
    if (loading) {
      return (<aside>Carregando...</aside>);
    }
    return (
      <aside>
        <ol>
          {categories.map(({ id, name }) => {
            if (selectedCategory === id) {
              return (
                <li
                  className="selected"
                  data-testid="category"
                  key={ id }
                >
                  {name}
                </li>);
            }
            return (
              <li
                key={ id }
              >
                <button
                  type="button"
                  data-testid="category"
                  onClick={ this.selectCategory }
                  key={ id }
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ol>
      </aside>);
  }
}

Categories.propTypes = ({
  filterCategory: PropTypes.func,
}).isRequired;

export default Categories;
