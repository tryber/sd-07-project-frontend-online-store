import React from 'react';
import PropTypes from 'prop-types';

class CardProduct extends React.Component {
    render() {
        const { products } = this.props;
        const { title, thumbnail, price } = products;

        return (
            <div data-testid="product">
                <h1>{title}</h1>
                <img src={thumbnail} alt="product item" />
                <h2>{price}</h2>
            </div>
        )
    }
}

CardProduct.propTypes = {
    products: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default CardProduct;
