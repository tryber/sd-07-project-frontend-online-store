import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  ProductItemButtonAdd,
  ProductItemContainer,
  ProductItemContent,
  ProductItemImage,
  ProductItemPrice,
  ProductItemTitle,
} from './styles';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.productAddToCart = this.productAddToCart.bind(this);
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
    const productCurrency = this.verifyIfExist(product, shopping);
    const productNew = this.refatoringProductForShopping(product);
    const products = this.filterProducts(product, shopping);
    if (productCurrency) {
      productCurrency.quantity += 1;
      localStorage.setItem('shopping', JSON.stringify([...products, productCurrency]));
    } else {
      localStorage.setItem('shopping', JSON.stringify([...products, productNew]));
    }
  }

  verifyIfExist(product, shopping) {
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

  refatoringProductForShopping(product) {
    return {
      id: product.id,
      quantity: 1,
      price: product.price,
      title: product.title,
      available_quantity: product.available_quantity,
    }
  }

  render() {
    const { product, updateQuantity } = this.props;
    const { id, title, price, thumbnail, shipping } = product;
    const { free_shipping: freeShipping } = shipping;
    return (
      <ProductItemContainer>
        <ProductItemContent data-testid="product">
          <ProductItemTitle>
            { title }
          </ProductItemTitle>
          <ProductItemImage src={ thumbnail } alt={ title } />
          <ProductItemPrice>
            { `R$ ${price}` }
            <Link to={ `/product-detail/${id}` } data-testid="product-detail-link">
              Ver detalhes
            </Link>
          </ProductItemPrice>
          {freeShipping && (
            <span data-testid="free-shipping">frete gratis</span>
          )}
          <ProductItemButtonAdd
            data-testid="product-add-to-cart"
            onClick={ (event) => {
              this.productAddToCart(event, id);
              updateQuantity();
            } }
          >
            adicionar ao carrinho
          </ProductItemButtonAdd>
        </ProductItemContent>
      </ProductItemContainer>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default ProductItem;
