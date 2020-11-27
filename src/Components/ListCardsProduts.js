import React from 'react';
import Cart from '../Pages/Cart';
import { Link } from 'react-router-dom';


class ListCardsProduts extends React.Component {
  constructor() {
    super();
    this.state = {
      status : '',
      shouldRedirect: false,
      products: []
     }; 
   
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    /*
    const productCart = [];
    const { product } = this.props;
    const title = product.title;
    const price = product.price;
    productCart.push(title);
    productCart.push(price);
    console.log(productCart);

    this.setState({ products: productCart, status:'bought', shouldRedirect: true });    
    */
  }
    render() {
      const { product } = this.props;
     
      //const { status, products, shouldRedirect } = this.state;     
      
      return (
        
        <div data-testid="product">
             
                <p>{product.title}</p>
                <img src={product.thumbnail} alt={`${product.title} sprite`} />
                <p>{product.price}</p>
                <button onClick={this.handleClick}>ADICIONAR NO CARRINHO</button>
              
        </div>
      );
    }
  }

  export default ListCardsProduts;