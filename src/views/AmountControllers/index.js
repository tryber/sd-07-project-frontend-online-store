import React, { Component } from 'react';
import * as css from './style';
import * as icon from '../../components/Icons';

export class AmountControllers extends Component {
  constructor(props) {
    super(props);
    const { amount } = this.props;

    this.increaseAmount = this.increaseAmount.bind(this);
    this.decreaseAmount = this.decreaseAmount.bind(this);
    this.state = {
      amount: amount,
    };
  }

  async increaseAmount() {
    const { onClick } = this.props;
    await this.setState({ amount: this.state.amount + 1 });
    onClick(this.state.amount);
  }

  async decreaseAmount() {
    const { amount } = this.state;
    const { onClick } = this.props;
    if (amount > 1) {
      await this.setState({ amount: this.state.amount - 1 });
      onClick(this.state.amount);
    }
  }

  render() {
    return (
      <css.Ctn>
        <icon.Minus
          data-testid="product-decrease-quantity"
          onClick={this.decreaseAmount}
        />
        <div className="display" data-testid="shopping-cart-product-quantity">
          {this.state.amount}
        </div>
        <icon.Plus
          data-testid="product-increase-quantity"
          onClick={this.increaseAmount}
        />
      </css.Ctn>
    );
  }
}

export default AmountControllers;
