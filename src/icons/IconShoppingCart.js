import React, { Component } from 'react';
import propTypes from 'prop-types';

class IconShoppingCart extends Component {
  render() {
    const { iconTitle } = this.props;
    return (
      <svg
        className="shopping-cart"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        aria-labelledby="title"
      >
        <title id={ iconTitle }>Shopping Cart Icon</title>
        <path
          d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z
             M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h
             12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63
             h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48
             0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99
             2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
        />
      </svg>
    );
  }
}

export default IconShoppingCart;

IconShoppingCart.propTypes = {
  iconTitle: propTypes.string.isRequired,
};
