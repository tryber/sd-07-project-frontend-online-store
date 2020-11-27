import React, { Component } from 'react';
import * as css from './style';
import * as icon from '../../components/Icons';

export class AmountControllers extends Component {
  constructor() {
    super();

    this.increaseAmount = this.increaseAmount.bind(this);
    this.decreaseAmount = this.decreaseAmount.bind(this);
    this.state = {
      amount: 1,
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
        <icon.Minus onClick={this.decreaseAmount} />
        <div className="display">{this.state.amount}</div>
        <icon.Plus onClick={this.increaseAmount} />
      </css.Ctn>
    );
  }
}

export default AmountControllers;
