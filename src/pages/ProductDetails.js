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
        const id2= 'MLB1532299476';
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
    const { title, price, pictures, attributes } = product;    

    console.log(product);

    if (loading === true) return <Loading />;

    return (
      <div className="product-detail">
        <div className="container-title-image">
          <h2 data-testid="product-detail-name">{title} - R${price}</h2>
          <img className="product-detail-image" src={pictures[0].url} alt={`imagem do produto ${title}`}/>
        </div>        
        <ul className="container-list">
          {attributes.map(({ name, value_name, id }) => 
          <li key ={id}>{name}: {value_name}</li>)}
        </ul>
        
      </div>
    );
  }
}


export default ProductDetails;
