import React from 'react';
import ItemCard from './ItemCard';
//import * as api from '../services/api'

class ListCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {    
      //product: [],
    }
    //this.requestApi = this.requestApi.bind(this);
  }

 /*  componentDidMount() {
    this.requestApi();
  } */

 /*  async requestApi() {
    const { search, category } = this.props;
    const teste = await api.getProductsFromCategoryAndQuery(category, search);
    console.log(teste)
      this.setState({
        product: await api.getProductsFromCategoryAndQuery(category, search) , 
      });   
  } */

  render() {
      const { product } = this.props;
      let teste = product === undefined ? [] : product;      
      console.log(product)
    return (
      <div className="list-card-product" >
       {teste.map((prod) => {
          return (
          <ItemCard key={prod.id} product={prod} title={prod.title} id={prod.id}
            image={prod.thumbnail} price={prod.price} />  
         )
        })}          
      </div>
    );
  }
}

export default ListCard;
