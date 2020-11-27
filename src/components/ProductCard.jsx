import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddToCart from './AddToCart'

class ProductCard extends React.Component {
    render() {

      const { product } = this.props;
      const { title, id, thumbnail, price } = product;
      
      return (
        <div data-testid="product" className="product-card">
          <h1 className="title-card">{title}</h1>
          <img
            src={ thumbnail }
            alt={ `Produto: ${title}` }
            className="product-card-image"
          />
          <p>{`R$ ${price}`}</p>
          <Link
            data-testid="product-detail-link"
            to={ { pathname: `/details/${id}`, state: product } }
          >
            Detalhes do Produto
          </Link>
          <AddToCartButton product={product}/>
        </div>
      // // const { product } = this.props
      // // const { title, thumbnail, price } = product;
  
      // return (
      //   // <div className="product-card" data-testid="product">
      //   //   <h4>{title}</h4>
      //   //   <img alt="Product" src={thumbnail} />
      //   //   <p>{`R$ ${price}`}</p>
      //   // </div>
      );
    }
  }
  export default ProductCard;
