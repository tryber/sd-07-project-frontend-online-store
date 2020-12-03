import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/productList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.saveItem = this.saveItem.bind(this);
  }

  saveItem() {
    const { product } = this.props;
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
    const { product } = this.props;
    const { id, title, thumbnail, price, shipping } = product;
    return (
      <div>
        <div>
          <Link to={ `/${id}` } data-testid="product-detail-link">
            <div data-testid="product">
              <h4>{title}</h4>
              <img src={ thumbnail } alt="Produto listado" />
              <p>{price}</p>
              {shipping.free_shipping
                ? <p data-testid="free-shipping">Frete Gratis!</p> : ''}
            </div>
          </Link>
        </div>
        <div>
          {/* <ButtonAddCart
            data-testid="product-add-to-cart"
            product={ this.teste }
          /> */}
          <button
            data-testid="product-add-to-cart"
            type="submit"
            name="button"
            onClick={ this.saveItem }
          >
            Clique Aqui
          </button>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.object,
    available_quantity: PropTypes.number,
  }).isRequired,
};

export default ProductList;
