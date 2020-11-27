import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.fetchCategories = this.fetchCategories.bind(this);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.setState(
      {
        loading: true,
      },
      () => {
        api.getCategories().then((response) => {
          this.setState({
            loading: false,
            categories: response,
          });
        });
      },
    );
  }

  render() {
    const { categories, loading } = this.state;
    const { onChange } = this.props;

    if (loading) return <div>Carregando...</div>;

    return (
      <div className="category-list">
        Categorias:
        {categories.map((element) => (
          <label htmlFor="idValue" key={ element.id }>
            <input
              name="idValue"
              value={ element.id }
              onChange={ onChange }
              type="radio"
              data-testid="category"
            />
            {element.name}
          </label>
        ))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CategoryList;
