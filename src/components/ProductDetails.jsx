import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;

    this.fetch = this.fetch.bind(this);
    this.addToCart = this.addToCart.bind(this);

    const initialIndex = 0;
    this.state = {
      productId: id.substring(initialIndex, id.indexOf('&')),
      filterId: id.substring(id.indexOf('&') + 1, id.length),
      product: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const { filterId, productId } = this.state;

    this.setState(
      {
        loading: true,
      },
      () => {
        api
          .getProductsFromCategoryAndQuery(filterId, undefined)
          .then((response) => {
            this.setState({
              loading: false,
              product: response.results.find(
                (element) => element.id === productId,
              ),
            });
          });
      },
    );
  }

  addToCart() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const { product } = this.state;
    const { title, price } = product;
    let flag = true;
    const size = 0;

    if (products.length === size) {
      products.push({ title, price, qtd: 1 });
    } else {
      products.forEach((element, index, array) => {
        if (element.title === title) {
          element.qtd += 1;
          flag = false;
        } else if (index === array.length - 1 && flag) {
          products.push({ title, price, qtd: 1 });
        }
      });
    }

    localStorage.setItem('products', JSON.stringify(products));
  }

  render() {
    const { product, loading } = this.state;

    if (loading) return <div>Carregando...</div>;

    return (
      <div>
        <p data-testid="product-detail-name">{product.title}</p>
        <img src={ product.thumbnail } alt="" />
        <p>
          R$
          {product.price}
        </p>
        <button
          type="button"
          onClick={ this.addToCart }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>

        <Link data-testid="shopping-cart-button" to="/cart">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCYOcz2do9rQylt8XnMawcSwL1a-qaEfXxQ&usqp=CAU"
            alt=""
            className="cart-image"
          />
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductDetails;
