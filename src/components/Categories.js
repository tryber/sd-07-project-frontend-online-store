import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';


class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      myCategories: [],
    };
    this.getProductCategory = this.getProductCategory.bind(this);
  }


  componentDidMount() {
    api.getCategories().then((categories) => this.setState({ myCategories: categories }));
  }

  getProductCategory(id) {
    const { fecthProductsCategoryId } = this.props;
    fecthProductsCategoryId(id);
  }

  makeList(list) {
    return list.map(({ id, name }) => (
      <p key={ id }>
        <label htmlFor={ id }>
          <input
            id={ id }
            onClick={ () => this.getProductCategory(id) }
            name="productId"
            type="radio"
            data-testid="category"
            value={ id }
          />
          { name }
        </label>
      </p>
    ));
  }

  render() {
    const { myCategories } = this.state;
    return (
      <div>
        {this.makeList(myCategories)}

      </div>
    );
  }
}

Categories.propTypes = {
  fecthProductsCategoryId: PropTypes.func.isRequired,
};


export default Categories;
