import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ProductReview from '../components/ProductReview';

class ProductDetails extends Component {
  constructor() {
    super();
    this.saveItem = this.saveItem.bind(this);
    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.fetchProduct(id);
  }

  async fetchProduct(id) {
    const endpoint = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(endpoint);
    const fetchedProduct = await response.json();
    this.setState({ product: fetchedProduct });
  }

  saveItem() {
    const { product } = this.state;
    const { id, title, price, thumbnail, shipping } = product;
    const availableQuantity = product.available_quantity;
    console.log(product);
    const items = JSON.parse(localStorage.getItem('itemsCart') || '[]');
    const itemsIndex = items.findIndex((element) => element.id === id);
    const flag = -1;
    if (itemsIndex === flag) {
      items.push({ id, title, price, availableQuantity, thumbnail, shipping, qtd: 1 });
    } else {
      items[itemsIndex].qtd += 1;
    }
    localStorage.setItem('itemsCart', JSON.stringify(items));
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <div>
        <Link to="/shopping-cart">
          <ShoppingCartOutlinedIcon data-testid="shopping-cart-button" />
        </Link>
        <div data-testid="product-detail-name">
          <h1>{ title }</h1>
          <h2>{`R$ ${price}`}</h2>
          <img src={ thumbnail } alt="Imagem do produto" />
          <button
            data-testid="product-detail-add-to-cart"
            type="submit"
            name="button"
            onClick={ this.saveItem }
          >
            Adicionar ao carrinho
          </button>
          <ProductReview />
        </div>
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
};

export default ProductDetails;
