import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BackArrowButton from '../BackArrowButton';
import ShoppingCartButton from '../ShoppingCartButton';
import './Header.css';

class Header extends Component {
  render() {
    const { pathname } = this.props;
    return (
      <div className="header-container">
        <BackArrowButton visibility={ (pathname !== '/') } />
        <h1> ONLINE STORE (Tropa de ESLint)</h1>
        <ShoppingCartButton visibility={ (pathname !== '/checkout') } />
      </div>
    );
  }
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Header;
