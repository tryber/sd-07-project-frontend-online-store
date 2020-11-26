import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from './services/api';

class FilterList extends Component {
  constructor() {
    super();
    this.fetchCategories = this.fetchCategories.bind(this);
    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    console.log('entrou no fetch');
      const data = await API.getCategories();
      console.log(data);
      this.setState({ categoriesList: data });

  }

  render() {
    const { categoriesList } = this.state;
    const { changeSelected } = this.props;

    return (
      <div className="getCategories">
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
        </div>
      </div>
    );
  }
}
FilterList.propTypes = {
  changeSelected: PropTypes.func.isRequired,
};
export default FilterList;
