import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ButtonCart, Evaluation } from '../../components';

class Details extends React.Component {
  constructor(props) {
    super(props);
    const totalQty = sessionStorage.getItem('totalQuantity');
    this.upQty = this.upQty.bind(this);

    this.state = { totalQty };
  }

  upQty() {
    const totalQty = sessionStorage.getItem('totalQuantity');
    this.setState({ totalQty });
  }

  render() {
    const { location: { state: { title } } } = this.props;
    const { totalQty } = this.state;
    const { upQty } = this;

    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <i className="fas fa-shopping-cart" data-testid="shopping-cart-size">
            {totalQty}
          </i>
        </Link>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <ButtonCart title={ title } upQty={ upQty } test="product-detail-add-to-cart" />
        <Evaluation />
      </div>
    );
  }
}

export default Details;

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
