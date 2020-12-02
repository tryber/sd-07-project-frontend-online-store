import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { categoryId } = this.state;
    await this.setState({ [name]: value });
    callback(categoryId);
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
          <div className="ctn-loading">
            <cp.Loading />
          </div>
        ) : (

          <>
            {/*   <h1 className="subTitle">Categorias</h1>
            <div className="div-category">
              <input
                name="categoryId"
                type="radio"
                id="all"
                value={categoryAll}
                onClick={this.handlerClick}
                data-testid="category"
              />
              <label className="labelText" htmlFor="all">
                All
              </label>
            </div> */}
            {catergories.map((categorie, index) => (

              <div key={ `${index + 1}` } className="div-category">
                <input
                  name="categoryId"
                  type="radio"
                  value={ categorie.id }
                  onClick={ this.handlerClick }
                  id={ categorie.id }
                  data-testid="category"
                />
                <label className="labelText" htmlFor={ categorie.id }>
                  {categorie.name}
                </label>
              </div>
            ))}
          </>

        )}
      </css.ctnSideBar>
    );
  }
}

SideBar.propTypes = {
  callback: PropTypes.func,
};

SideBar.defaultProps = {
  callback: () => {},
};

export default SideBar;
