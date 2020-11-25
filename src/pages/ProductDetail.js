import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetail extends Component {
  constructor() {
    super();

    this.getProduct = this.getProduct.bind(this);
    
    this.state = {
      name: 'Teste',
      imagePath : '',
      price : 0,
      details: []
    };
  }

  async getProduct() {
    const { id, category_id, title } = this.props.match.params;
    const { results } = await api.getProductsFromCategoryAndQuery(category_id, title);

    const productDetail = results.filter( result => result.id === id);

    this.setState( { 
      name: productDetail[0].title,
      imagePath: productDetail[0].thumbnail,
      price: productDetail[0].price,
      details: productDetail[0].attributes,
    });
    //console.log(productDetail);
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { name, imagePath, price, details } = this.state;
    return (      
      <div>
        <Link to="/">Home</Link>
        <h1>Product Detail</h1>
          <p>Name: <span data-testid="product-detail-name">{name}</span></p>
          <img src={imagePath} alt={name} />
          <p>Price: <span>{price}</span> </p>
          <div>Details: {
            details.map( element => <div key={element.id}>{element.name} - <span>{element.value_name}</span></div>)
            }
          </div>
      </div>      
    )
  }
}

export default ProductDetail;
