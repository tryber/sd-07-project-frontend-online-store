import React from 'react';
import PropTypes from 'prop-types';
import BuyerInformation from './checkout/BuyerInformation';
import PaymentMethod from './checkout/PaymentMethod';
import ReviewProducts from './checkout/ReviewProducts';
import * as utils from '../services/utils';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.setStateToComponent = this.setStateToComponent.bind(this);
  }

  componentDidMount() {
    this.setStateToComponent();
  }

  setStateToComponent() {
    const productsFromCart = utils.picksUpItemsFromTheCartInLocalStorage();
    this.setState({
      products: productsFromCart,
    });
  }

  render() {
    const { products } = this.state;
    const { location } = this.props;
    const { totalPrice } = location;
    return (
      <div>
        <ReviewProducts products={ products } totalPrice={ totalPrice } />
        <BuyerInformation />
        <PaymentMethod />
        <button type="button">Comprar</button>
      </div>
    );
  }
}

export default Checkout;

Checkout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};
