import React from 'react';
import PropTypes from 'prop-types';
import RatingForm from '../Components/RatingForm';
import AddToCartButton from '../Components/AddToCartButton';
import Header from '../Components/Header';

class ProductDetails extends React.Component {
  render() {
    // const { product } = this.props;
    const { location: { state: product } } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <Header />
        <h4 data-testid="product-detail-name">{`${title}`}</h4>
        <img src={ thumbnail } alt="Imagem" />
        <h4>{`R$ ${price}`}</h4>
        <p>Especificação</p>
        <AddToCartButton
          dataTestId="product-detail-add-to-cart"
          product={ product }
        />
        <RatingForm />
      </div>
    );
  }
}
ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
