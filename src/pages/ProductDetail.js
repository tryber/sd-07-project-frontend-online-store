import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '$CATEGORY_ID',
      query: '$QUERY',
      product: {},
    };
  }

  componentDidMount() {
    this.fecthProducts();
  }

  async fecthProducts() {
    const { category, query } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(category, query);
    const product = results.find(({ id }) => id === this.props.match.params.id);
    console.log(product);
    this.setState({ product: product });
  }


  render() {
    const { title, thumbnail, price, id } = this.state.product;
    return (
      <div>
        <div data-testid="product" className="product">
          <img alt="Products" src={thumbnail} />
          <div>
            <h4 data-testid="product-detail-name">
              {title}
            </h4>
            <h5>{price}</h5>
          </div>
        </div>
      </div>
    );
  }
}



export default ProductDetail;