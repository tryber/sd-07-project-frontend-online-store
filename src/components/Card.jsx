import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

class CardProduct extends React.Component {
    render() {
        const { products } = this.props;
        const { title, thumbnail, price, category_id } = products;

        return (

                <div data-testid="product" className="cardProduct">
                    <h1>{title}</h1>
                    <img src={thumbnail} alt="product item" />
                    <h2>R${price}</h2>
                    <p>{category_id}</p>
                    <Link to={`/details/${category_id}`}> Ver detalhes! </Link>
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
