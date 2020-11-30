import React, { Component } from 'react';
import * as css from './style';
import * as cp from '../../components';
import * as api from '../../services/api';

class SideBar extends Component {
  constructor() {
    super();

    this.handlerClick = this.handlerClick.bind(this);

    this.state = {
      catergories: [],
      isLoading: false,
      categoryId: '',
    };
  }

  componentDidMount() {
    this.fetchCategoriesApi();
  }

  async handlerClick({ target: { name, value } }) {
   const { callback } = this.props;
   await this.setState({ [name]: value });
    callback(this.state.categoryId);
  }

  fetchCategoriesApi() {
    this.setState({ isLoading: true }, async () => {
      const object = await api.getCategories();
      this.setState({ catergories: object, isLoading: false });
    });
  }

  render() {
    const { catergories, isLoading } = this.state;

    return (
      <css.ctnSideBar>
        {isLoading ? (
          <cp.Loading />

        ) : (

          catergories.map((categorie, index) => { return (

            <div key={ index } className="div-category">
              <input
                data-testid="category"
                name="categoryId"
                type="radio"
                value={ categorie.id }
                onClick={ this.handlerClick }
              />
              <label htmlFor={ categorie.id }>{ categorie.name }</label>
            </div>
          );
          })
        )}
      </css.ctnSideBar>
    );
  }
}

export default SideBar;
