import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../images/CartIcon.png';
import FilterList from '../filterList';

class home extends Component {
  constructor() {
    super();
    this.changeSelected = this.changeSelected.bind(this);
    this.state = {
      category: '',
    };
  }

  changeSelected(item) {
    const { category } = this.state;
    this.setState({ category: item });
    console.log(category);
  }

  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Link to="/shoppingCart">
          <img
            src={ CartIcon }
            width="70"
            height="70"
            alt="shopping-cart-icon"
            data-testid="shopping-cart-button"
          />
        </Link>
        <FilterList changeSelected={ this.changeSelected } />
      </div>
    );
  }
}
export default home;
