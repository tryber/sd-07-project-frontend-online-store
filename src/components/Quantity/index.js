import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCartQuantity } from '../../services/localStorageService';
import { increaseTotal } from '../../actions/increaseTotal';
import './style.css';

class Quantity extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.state = {
      itemQuantity: props.item.cartQuantity,
    }
  }

  increment() {
    const { item, increaseTotal } = this.props;
    const { itemQuantity } = this.state;
    if ( itemQuantity >= item.quantity) {
      this.setState({
        itemQuantity: item.quantity,
      })
      return;
    };
    increaseTotal(1);
    changeCartQuantity(item, 1);
    this.setState((prevState) => ({
      itemQuantity: prevState.itemQuantity + 1,
    }));
  }

  decrement() {
    const { item, increaseTotal } = this.props;
    const { itemQuantity } = this.state;
    if (itemQuantity === 1) return;
    increaseTotal(-1);
    changeCartQuantity(item, -1);
    this.setState((prevState) => ({
      itemQuantity: prevState.itemQuantity - 1,
    }));
  }

  render() {
    const { itemQuantity } = this.state;
    return (
      <main>
        <div>
          <button
            data-testid="product-increase-quantity"
            type="button"
            className="btn"
            onClick={this.increment}
          >
            +
          </button>
        </div>
        <en>{itemQuantity}</en>
        <div>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            className="btn"
            onClick={this.decrement}
          >
            -
          </button>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  increaseTotal: (number) => dispatch(increaseTotal(number)),
})

export default connect(null, mapDispatchToProps)(Quantity);

Quantity.propTypes = { availableQuantity: PropTypes.string.isRequired };
