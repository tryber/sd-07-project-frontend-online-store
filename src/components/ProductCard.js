import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as api from '../services/api';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    
    this.onClickCategory = this.onClickCategory.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
        
    this.state = {
      categoryId: '',
    }
  }
  saveItems = () => {
    const {id, available_quantity, title, price, thumbnail } = this.props.item
    if (localStorage.length === 0) {
      localStorage.setItem('items', JSON.stringify([{sku:id, name:title, cost:price, quantity:available_quantity, image:thumbnail}]));
      return
    }
    const objectValues = JSON.parse(localStorage.getItem('items'))
    localStorage.setItem('items', JSON.stringify([...objectValues, {sku:id, name:title, cost:price, quantity:available_quantity, image:thumbnail}]));
    console.log(objectValues);
}


  handleTextInput(event) {
    this.setState({
      categoryId: event.target.id
    })
  }
  
    async onClickCategory(event) {
    
    const categoryId = event.target.id;
    const products = await api.getProductsFromCategoryAndQuery(categoryId);
    
    this.setState({
      itemsFindOut: products,
      categoryId: categoryId,
      loading: true,
    });
  }

  render() {
    const { item } = this.props
    const {id, available_quantity, title, price, thumbnail } = item
    return (
      <section data-testid="product">
          <p>
            {id}
          </p>
          <div>
            <img alt="Sell Product" className="card-image" src={thumbnail} />
          </div>
          <div className="info">
            <div>{available_quantity}</div>
            <div>{title}</div>
            <div>{price}</div>
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
          <hr />
          <button
            data-testid="product-add-to-cart"
            value="items"
            type="button" 
            onClick={this.saveItems}
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
  }).isRequired,
};

export default ProductCard;
