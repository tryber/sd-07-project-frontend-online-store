import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fecthProducts();
  }

  async fecthProducts() {
    const result = await getProductsFromCategoryAndQuery(undefined, undefined, this.props.match.params.id);
    await this.setState({
      product: result[0] ? result[0].body : result.results[0],
      loading: false,
    });
  }


  render() {
    const { loading, product } = this.state;
    if(loading){
      return <h1>Carregando</h1>
    }
    return (
      <div>
        <div data-testid="product" className="product">
          <img alt="Products" src={product.thumbnail} />
          <div>
            <h4 data-testid="product-detail-name">
              {product.title}
            </h4>
            <h5>{product.price}</h5>
          </div>
        </div>
      </div>
    );
  }
}



export default ProductDetail;