import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCartButton from '../ShoppingCartButton';
import './Header.css';

class Header extends Component {
  render() {
    const { quantity } = this.props;
    return (
      <div className="header-container">
        <ShoppingCartButton quantity={ quantity } />
      </div>
    );
  }
}

Header.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Header;
