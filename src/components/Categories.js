import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Loading from './Loading';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: true,
    };
    this.requestApiCategories = this.requestApiCategories.bind(this);
  }

  componentDidMount() {
    this.requestApiCategories();
  }

  async requestApiCategories() {
    this.setState({
      loading: false,
      categories: await api.getCategories(),
    });
  }

  render() {
    const { categories, loading } = this.state;
    const { handleCatChange } = this.props;
    return (
      <div className="radioCategorie">
        { loading ? <Loading /> : '' }
        {categories.map((category) => {
          console.log('');
          return (
            <div key={ category.id }>
              <input
                data-testid="category"
                type="radio"
                id={ category.id }
                name="gender"
                value={ category.name }
                onChange={ handleCatChange }
              />
              {category.name}
              <br />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;

Categories.propTypes = {
  handleCatChange: PropTypes.func.isRequired,
};

Categories.defaultProps = {};
