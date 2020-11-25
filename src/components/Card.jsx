import React from 'react';
import PropTypes from 'prop-types';
import * as mlAPI from '../services/api';

class CardProduct extends React.Component {
    render() {
        const { produts } = this.props;
        const { title, image, price } = produts;

        return(
            <div data-testid="product">
                <h3>{title}</h3>
                <img src={image}/>
                <spam>{price}</spam>
            </div>
        )
    }
}

CardProduct.propTypes = {
    produts: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default CardProduct;
