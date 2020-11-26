import React from 'react';
import ButtonCart from '../components/ButtonCart';
import { Link } from 'react-router-dom';
class Details extends React.Component {
  render() {
    const { location: { state: { title } } } = this.props;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart"><i className="fas fa-shopping-cart" /></Link>
        <h2 data-testid="product-detail-name">{title}</h2>
        <ButtonCart title={title} test={"product-detail-add-to-cart"} />
      </div>
    );
  }
}
export default Details;