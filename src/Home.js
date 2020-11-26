/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button';
class ProductsList extends Component {
  render() {
    const value = '';
    return (
      <div>
        <form>
          <div>
            <label htmlFor="inputHome">
              <div>
                <input 
                  data-testid="query-input"
                  value={ value }
                  className="inputHome"
                  type="text"
                  onChange={ onChange }
                />
                <button data-testid="query-button">PESQUISAR</button>
                <span data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </span>
              </div>
            </label>
            <div>
              <Button />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
Button.propTypes = {
  onClhange: PropTypes.func.isRequired,
};
export default ProductsList;