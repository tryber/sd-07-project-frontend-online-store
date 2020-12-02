import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as css from './style';
import * as cpIcons from '../../components/Icons';

class AmountControllers extends Component {
  constructor(props) {
    super(props);
    const { amount } = this.props;

    this.increaseAmount = this.increaseAmount.bind(this);
    this.decreaseAmount = this.decreaseAmount.bind(this);
    this.state = {
      amount,
    };
  }

  async increaseAmount() {
    const { onClick } = this.props;
    const { amount } = this.state;
    await this.setState({ amount: amount + 1 });
    onClick(amount);
  }

  async decreaseAmount() {
    const { amount } = this.state;
    const { onClick } = this.props;
    if (amount > 1) {
      await this.setState({ amount: amount - 1 });
      onClick(amount);
    }
  }

  render() {
    const { amount } = this.state;
    return (
      <css.Ctn>
        <cpIcons.Minus
          data-testid="product-decrease-quantity"
          onClick={ this.decreaseAmount }
        />
        <div className="display" data-testid="shopping-cart-product-quantity">
          {amount}
        </div>
        <cpIcons.Plus
          data-testid="product-increase-quantity"
          onClick={ this.increaseAmount }
        />
      </css.Ctn>
    );
  }
}

AmountControllers.propTypes = {
  amount: PropTypes.number,
  onClick: PropTypes.func,
};

AmountControllers.defaultProps = {
  amount: 1,
  onClick: () => {},
};

export default AmountControllers;
