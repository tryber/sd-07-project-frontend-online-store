import React from 'react';
import PropTypes from 'prop-types';

import {
  Evaluation, EvaluationTextArea,
  ProductDetailContainer,
  ProductDetailContent, ProductDetailImage, ProductDetailTitle,
} from './styles';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
    this.productAddToCart = this.productAddToCart.bind(this);
  }

  async componentDidMount() {
    await this.setup();
  }

  async setup() {
    const { match } = this.props;
    const { id } = match.params;
    const response = JSON.parse(localStorage.getItem('products'));
    const product = response.find((cart) => cart.id === id);
    await this.setState({ product });
  }

  getProductForAdd(id) {
    const response = JSON.parse(localStorage.getItem('products'));
    return response.find((cart) => cart.id === id);
  }

  async productAddToCart(event, id) {
    event.preventDefault();
    const product = this.getProductForAdd(id);
    await this.addProduct(product);
  }

  async addProduct(product) {
    const shopping = JSON.parse(localStorage.getItem('shopping')) || [];
    const detailCurrency = this.verify(product, shopping);
    const productNew = this.refatoringProducts(product);
    const products = this.filterProducts(product, shopping);
    if (detailCurrency) {
      detailCurrency.quantity += 1;
      localStorage.setItem('shopping', JSON.stringify([...products, detailCurrency]));
    } else {
      localStorage.setItem('shopping', JSON.stringify([...products, productNew]));
    }
  }

  verify(product, shopping) {
    const empty = 0;
    if (shopping.length !== empty) {
      const response = shopping.find((cart) => cart.id === product.id);
      if (response) return response;
    }
    return false;
  }

  filterProducts(product, shopping) {
    return shopping.filter((cart) => cart.id !== product.id);
  }

  refatoringProducts(product) {
    return {
      id: product.id,
      quantity: 1,
      price: product.price,
      title: product.title,
      available_quantity: product.available_quantity,
    }
  }

  render() {
    const { match, updateQuantity } = this.props;
    const { id } = match.params;
    const { product } = this.state;
    const { title, price, thumbnail } = product;
    return (
      <ProductDetailContainer>
        <ProductDetailContent>
          <ProductDetailTitle data-testid="product-detail-name">
            { title }
            <span>{ ` - R$ ${price}` }</span>
          </ProductDetailTitle>
          <ProductDetailImage src={ thumbnail } alt={ title } />
          <button
            data-testid="product-detail-add-to-cart"
            onClick={ (event) => {
              this.productAddToCart(event, id);
              updateQuantity();
            } }
          >
            Adicionar ao carrinho
          </button>
        </ProductDetailContent>
        <Evaluation>
          <EvaluationTextArea data-testid="product-detail-evaluation" />
        </Evaluation>
      </ProductDetailContainer>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default ProductDetail;
