import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from './services/api';

class FilterList extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.setState({ loading: true }, async () => {
      const data = await API.getCategories();
      this.setState({ categoriesList: data, loading: false });
    });
  }

  render() {
    const { categoriesList, loading } = this.state;
    const { changeSelected } = this.props;
    let option;
    if (loading) {
      option = <p>Carregando...</p>;
    } else {
      option = (
        <div>
          <h3>Filtre por categoria:</h3>
          {categoriesList.map(({ id, name }) => (
            <div key={ id } data-testid="category">
              <input
                type="radio"
                id={ id }
                name="category"
                value={ id }
                onChange={ () => changeSelected(id) }

              />
              <label htmlFor={ id }>{ name }</label>
              <br />
            </div>
          ))}
        </div>);
    }
    return (
      <div className="getCategories">
        {option}
      </div>
    );
  }
}
FilterList.propTypes = {
  changeSelected: PropTypes.func.isRequired,
};
export default FilterList;
