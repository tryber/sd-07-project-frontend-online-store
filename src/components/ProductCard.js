import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';
import * as api from '../services/api';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.onClickCategory = this.onClickCategory.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.saveItems = this.saveItems.bind(this);

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
    const {
      id,
      available_quantity: availableQuantity,
      title,
      price,
      thumbnail,
    } = item;
    if (!localStorage.length) {
      localStorage.setItem('items',
        JSON.stringify([{
          sku: id,
          name: title,
          cost: price,
          quantity: availableQuantity,
          image: thumbnail,
        }]));
      return;
    }
    const objectValues = JSON.parse(localStorage.getItem('items'));
    localStorage.setItem('items',
      JSON.stringify([...objectValues, {
        sku: id,
        name: title,
        cost: price,
        quantity: availableQuantity,
        image: thumbnail,
      }]));
  }

  handleUndefined() {
    const { loading, itemsFindOut, categoryId } = this.state;
    if (!itemsFindOut.lenght || loading === false || !categoryId) {
      return <Redirect to="./pages/ProductNotFound" />;
    }
  }

  render() {
    const { item } = this.props;
    const { id, available_quantity: availableQuantity, title, price, thumbnail } = item;
    return (
      <section data-testid="product" className=".item-section">
        <img className="card-image img-card" alt="" src={ thumbnail } />
        <div className="info">
          <h3 className="title">{title}</h3>
          <h5 className="subtitle"><b>{ price }</b></h5>
          <div>
            <h6>
              Quantidade disponível:
              { availableQuantity }
            </h6>
          </div>
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
        <button
          data-testid="product-add-to-cart"
          value="items"
          type="button"
          onClick={ this.saveItems }
        >
          Cart
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
    thumbnail: PropTypes.string,
    available_quantity: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
