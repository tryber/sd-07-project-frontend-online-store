import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../../services/api';
import { saveOnLocalStorage } from '../../services/localStorageService';
import './style.css';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.onClickCategory = this.onClickCategory.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.saveItems = this.saveItems.bind(this);
    this.freeShipping = this.freeShipping.bind(this);

    this.state = {
      categoryId: '',
    };
  }

  async onClickCategory(event) {
    const categoryId = event.target.id;
    const products = await api.getProductsFromCategoryAndQuery(categoryId);
    this.setState({
      itemsFindOut: products,
      categoryId,
      loading: true,
    });
  }

  handleTextInput(event) {
    this.setState({
      categoryId: event.target.id,
    });
  }

  saveItems() {
    const { item } = this.props;
    saveOnLocalStorage(item);
  }

  handleUndefined() {
    const { loading, itemsFindOut, categoryId } = this.state;
    if (!itemsFindOut.lenght || loading === false || !categoryId) {
      return <Redirect to="./pages/ProductNotFound" />;
    }
  }

  freeShipping() {
    const { shipping } = this.props.item;
    const values = Object.values(shipping);
    return values[0];
  }

  render() {
    const { item } = this.props;
    const { id, available_quantity: availableQuantity, title, price, thumbnail } = item;
    return (
      <section data-testid="product" className="item-section">
        <div className="card" style={{width: '20rem'}}>
          <img src={thumbnail} className="card-img-top" alt={title} />
          <div className="card-body product-title">
            <h5 className="card-title">{title}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">{id}</li>
            <li className="list-group-item text-center">Preço: R${price}</li>
            <li className="list-group-item text-center">Quantidade: {availableQuantity}</li>
          </ul>
          <div className="card-body">
            <Link
              data-testid="product-detail-link"
              className="btn btn-primary btn-xs"
              to={{
                pathname: `/pages/ProductDetails/${id}`,
                state: { item },
              }}
            >
              Mais Detalhes
            </Link>
            <button
              className="btn btn-primary btn-xs ml-1"
              data-testid="product-add-to-cart"
              value="items"
              type="button"
              onClick={this.saveItems}
            >
              Cart
            </button>
          </div>
        </div>
        <b
          className="btn btn-xs text-danger"
        >
          {this.freeShipping() ? (
            <p data-testid="free-shipping">Frete Grátis</p>
          ) : (
              <p>Frete Pago</p>
            )}
        </b>
      </section>
    );
  }
}

ProductCard.propTypes = {
  addCartQuantity: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
    available_quantity: PropTypes.number,
    shipping: PropTypes.bool,
  }).isRequired,
};

export default ProductCard;
