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
    const { category_id } = this.props.match.params;
    let product = undefined;
    for(let index = 0; product === undefined; index += 50){
      console.log(index);
      let { results } = await getProductsFromCategoryAndQuery(category_id, undefined, index);
      product = results.find(({ id }) => id === this.props.match.params.id);
    }
    console.log(product);
    this.setState({
      product,
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