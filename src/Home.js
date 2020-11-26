import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from './images/cart.png';
import './App.css';
import Categories from './components/Categories';

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
                  value={ value }
                  className="inputHome"
                  type="text"
                  // onChange={ onChange }
                />
                <span data-testid="home-initial-message">
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </span>
              </div>
            </label>
            <div>
              <Link to="./pages/cart">
                <img
                  className="btImg"
                  data-testid="shopping-cart-button"
                  src={ cart }
                  alt="Carrinho de Compras"
                />
              </Link>
            </div>
          </div>
          <Categories />
        </form>
      </div>
    );
  }
}
// Button.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };

export default ProductsList;
