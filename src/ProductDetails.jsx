import React from 'react';
import * as api from './services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.callAPI = this.callAPI.bind(this);
    this.state = {
      title: '',
      thumb: '',
      price: 0,
      attributes: [],
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  async callAPI() {
    const { id } = this.props.match.params;
    this.setState(async () => {
      const detailsOfProduct = await api.getProductDetails(id);
      const { title, thumbnail, price, attributes } = detailsOfProduct;
      this.setState({
        title,
        thumbnail,
        price,
        attributes, 
      });
    })
  }
  
  render() {
    const { title, thumbnail, price, attributes } = this.state;
    return(
      <div>
        <div>
          <h1 data-testid="product-detail-name">{title}<span>{price}</span></h1>
          <img src={thumbnail} />
        </div>
        <ul>
          <h2>Especificações Técnicas</h2>
    {attributes.map((attribute) => <li key={attribute.id}>{attribute.name}: {attribute.value_name}</li>)}
        </ul>
      </div>
    );
  }
}

export default ProductDetails;
