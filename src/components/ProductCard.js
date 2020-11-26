import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleProduct = this.handleProduct.bind(this);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.handleProduct();
  }

  handleProduct() {
    const { product } = this.props;
    this.setState({ product });
  }

  render() {
    // const { product } = this.props;
    const { product: { title, thumbnail, price } } = this.props;
    const { product } = this.state;
    // const { title, thumbnail, price } = this.state.product;
    return (
      <div>
        <article data-testid="product">
          <header>
            <h2>{title}</h2>
          </header>
          <main>
            <img alt="product thumbnail" src={ thumbnail } />
          </main>
          <footer>
            <p>{`R$ ${price}`}</p>
          </footer>
        </article>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: '/product-details',
            state: {
              product,
            },
          } }
        >
          Detalhes
        </Link>

      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
