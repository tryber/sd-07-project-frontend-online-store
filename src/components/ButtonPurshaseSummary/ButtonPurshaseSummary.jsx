import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ButtonPurshaseSummary extends Component {
  render() {
    return (
      <Link data-testid="checkout-products" to="/purchasesummary">
        <button type="button">Finalizar Compra</button>
      </Link>
    );
  }
}

export default ButtonPurshaseSummary;
