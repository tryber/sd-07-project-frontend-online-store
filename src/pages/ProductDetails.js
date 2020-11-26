import React, { Component } from 'react';
import * as api from '../services/api';
import Loading from '../components/Loading';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      product: {},
    }
  }

  componentDidMount() {
    this.APIquery();
  }

  async APIquery() {
    this.setState(
      { loading: true },
      async () => {
        // const { id } = this.props.match.params;
        const id = 'MLB1689813027';
        const productID = await api.fetchAPIByID(id);
        console.log(productID);
        this.setState({
          loading: false,
          product: productID,
        });
      },
    );
  }

  render() {
    const { product, loading } = this.state;
    const { title, price, thumbnail, attributes } = product;    

    console.log(product);

    if (loading === true) return <Loading />;

    return (
      <div>
        <div>
          <h1 data-testid="product-detail-link">{title} - R${price}</h1>
          <img src={thumbnail} alt={`imagem do produto ${title}`}/>
        </div>        
        <ul>
          {attributes.map(({ name, value_name, id }) => 
          <li key ={id}>{name}: {value_name}</li>)}
        </ul>
        
      </div>
    );
  }
}


export default ProductDetails;
