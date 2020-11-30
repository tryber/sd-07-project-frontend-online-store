import React from 'react';
import * as api from '../services/api';

class ProductPage extends React.Component {

  componentDidMount() {
    const { Id } = this.props.match.params;
    api.getProductsFromCategoryAndQuery(Id, '').then(data => console.log(data));
  }

  render() {
    return(
      <div>
        Aqui é a ProductPage
      </div>);
  }
}

export default ProductPage