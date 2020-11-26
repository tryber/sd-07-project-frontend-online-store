import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
	 constructor() {
		 super();
		 this.state = {
			 product: [],
     };
     
    this.fetchProduct = this.fetchProduct.bind(this);
   }
   
   componentDidMount() {
     this.fetchProduct();
   }

	async fetchProduct() {
    // const { match: { params: { id, category_id } } } = this.props;
    // const productCategory = await api.getProductsFromCategoryAndQuery(category_id);
    const { match: { params: { id } } } = this.props;
    console.log(id);
    const productCategory = await api.getProductsFromCategoryAndQuery('', id);
    // const { results } = productCategory;
    console.log(productCategory);
    // const product = results.find((element) => element.id === id);
    
    // this.setState({ product });
  }

	render() {
    const { product } = this.state;
    const { title, price, thumbnail } = product;
		return (
      <div>
        <h4 data-testid="product-detail-name">{`${title}`}</h4>
        <img src={ thumbnail } alt="Imagem" />
        <h4>{`R$ ${price}`}</h4>
        <p>Especificação</p>
      </div>
		);
	}
}

export default ProductDetails;

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
