import React from 'react';
import { Header, EvaluationForm, EvaluationList } from '../../components';
import './ProductDetail.css';
import * as lsapi from '../../services/lsapi';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCartQuantity: 0,
    };
    this.updateShoppintCartQuantity = this.updateShoppintCartQuantity.bind(this);
  }

  componentDidMount() {
    this.updateShoppintCartQuantity();
  }

  updateShoppintCartQuantity() {
    this.setState({ shoppingCartQuantity: lsapi.getTotalQuantity() });
  }

  addToCart(product) {
    const DEFAULT_QUANTITY_PER_CLICK = 1;
    lsapi.addToShoppingCartList(product, DEFAULT_QUANTITY_PER_CLICK);
    this.updateShoppintCartQuantity();
  }

  render() {
    const product = lsapi.getSelectedProduct();
    const { shoppingCartQuantity } = this.state;
    if (product) {
      return (
        <div className="detail-main-container">
          <Header quantity={ shoppingCartQuantity } />
          <div className="detail-title-content" data-testid="product-detail-name">
            <h2>{ product.title }</h2>
          </div>
          <div className="detail-info-container">
            <img
              className="detail-product-image"
              src={ product.thumbnail }
              alt="Product"
            />
            <div className="detail-summary-content">
              <h3> Especificações Técnicas </h3>
              <ul>
                {product.attributes.map(({ id, name, value_name: value }) => (
                  <li key={ id }>{`${name}: ${value !== null ? value : 'N/D'}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="detail-action-addcart">
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ () => this.addToCart(product) }
            >
              Adicionar ao Carrinho
            </button>
          </div>
          <EvaluationForm productId={ product.id } />
          <EvaluationList productId={ product.id } />
        </div>
      );
    }
    return (
      <div className="detail-main-container">
        <p> Produto não encontrado </p>
      </div>
    );
  }
}

export default ProductDetail;
