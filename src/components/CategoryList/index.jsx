import React from 'react';
import PropTypes from 'prop-types';
import * as Api from '../../services/api';
import Category from '../Category';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const categories = await Api.getCategories();
    this.setState({ categories });
  }

  eachCategory() {
    const { categories } = this.state;
    const { selected: slc, handleSelected: handS } = this.props;

    return categories.map(({ name, id }) => (
      <Category id={ id } name={ name } selected={ slc } handSec={ handS } key={ id } />
    ));
  }

  render() {
    const { categories } = this.state;
    if (!categories[0]) return <div />;

    return (
      <div>
        { this.eachCategory() }
      </div>
    );
  }
}

export default CategoryList;

CategoryList.propTypes = {
  selected: PropTypes.string.isRequired,
  handleSelected: PropTypes.func.isRequired,
};
