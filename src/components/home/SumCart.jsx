import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cartIcon from '../../images/cart-icon.png';

class SumCart extends React.Component {
  render() {
    const { num } = this.props;
    return (
      <div>
        <Link to="/cart">
          <img
            data-testid="shopping-cart-button"
            src={ cartIcon }
            className="cartIcon"
            alt="Cart Icon"
          />
        </Link>
        <p data-testid="shopping-cart-size">{num}</p>
      </div>
    );
  }
}

SumCart.propTypes = {
  num: PropTypes.number.isRequired,
};

export default SumCart;
