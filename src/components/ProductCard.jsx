import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ProductCard extends React.Component {
  render() {
    const { item } = this.props
    const { id ,title, price, thumbnail } = item
    return (
      <div>
        <section data-testid="product" >
          <img alt="Sell Product" className="card-image" src={thumbnail} />
          <div className="info">
            <h4>{title}</h4>
            <h5>{price}</h5>
          </div>
          <Link
            data-testid="product-detail-link"
            to={ {
              pathname: `/pages/ProductDetails/${id}`,
              state: { item },
            } }
          >
            Mais Detalhes
          </Link>
          <hr />
        </section>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
