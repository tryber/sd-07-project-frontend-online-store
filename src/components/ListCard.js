import React from 'react';
import ItemCard from './ItemCard';
import * as api from '../services/api'

class ListCard extends React.Component {
  constructor(props) {
    super()
    this.state = {
      searchProd: 'games',
      product: [],
    }
    this.requestApi = this.requestApi.bind(this);
  }

  componentDidMount() {
    this.requestApi();
  }

  async requestApi() {
    const { searchProd } = this.state;
    this.setState({
      product: await api.getProductsFromCategoryAndQuery(searchProd), 
    });
    console.log(this.state.product)
  }

  render() {
      const { product } = this.state;
    return (<p>teste</p>
      // <div>
      //   {product.map((prod) => {
      //     return (
      //       <ItemCard title={prod.title} foto={prod.thumbnail} preco={prod.price} />  
      //     )
      //   })}
              
      // </div>
    );
  }
}

export default ListCard;
