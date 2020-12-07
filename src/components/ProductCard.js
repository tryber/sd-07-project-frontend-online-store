import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addCartItem } from '../services/localStorageHandler';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.freeShipping = this.freeShipping.bind(this);
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

  addToCart() {
    const { product: { id, price, title } } = this.props;
    const initialQuantity = 1;
    addCartItem({ id, price, title, quantity: initialQuantity });
  }

  freeShipping(status) {
    return (
      status
        ? <div data-testid="free-shipping">Frete Grátis</div>
        : <div />
    );
  }


  render() {
    const { product: { title, thumbnail, price, shipping } } = this.props;
    const { product } = this.state;

    return (
      <div>
        <article data-testid="product">
          <header>
            <h2>{title}</h2>
          </header>
          <main>
            <img alt="product thumbnail" src={ thumbnail } />
            { this.freeShipping(shipping.free_shipping) }
          </main>
          <footer>
            <p>{`R$ ${price}`}</p>
          </footer>
          <button
            type="button"
            onClick={ this.addToCart }
            data-testid="product-add-to-cart"
          >
            ADICIONAR AO CARRINHO
          </button>
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
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductCard;
