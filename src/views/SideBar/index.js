import React, { Component } from 'react';
import * as css from './style';
import * as cp from '../../components';
import * as api from '../../services/api';

class SideBar extends Component {
  constructor() {
    super();

    this.state = {
      catergories: [],
      isLoading: false,
    };
  }

  fetchCategoriesApi() {
    this.setState({ isLoading: true }, async () => {
      const obj = await api.getCategories();
      this.setState({ catergories: obj, isLoading: false });
    });
  }

  componentDidMount() {
    this.fetchCategoriesApi();
  }

  render() {
    const { catergories, isLoading } = this.state;

    return (
      <css.ctnSideBar>
        {isLoading ? (
          <cp.Loading />
        ) : (
          catergories.map((categorie, index) => {
            return (
              <div key={index} className="div-category">
                <input
                  data-testid="category"
                  name="category"
                  type="radio"
                  id={categorie.id}
                  value={categorie.id}
                />
                <label htmlFor={categorie.id}>{categorie.name}</label>
              </div>
            );
          })
        )}
      </css.ctnSideBar>
    );
  }
}

export default SideBar;
