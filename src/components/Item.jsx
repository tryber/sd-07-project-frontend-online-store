import React from 'react';
import { addItemCart, readCartItems} from '../services/Cart'

export default class Item extends React.Component {
  constructor(){
    super();
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
  }
  
    
  handleLocalStorage (id, title, thumbnail, price) {
    const item = {id:id, title:title, thumbnail:thumbnail, price:price};
    addItemCart(item)
    console.log(readCartItems(), "cart");
  }
  render() {
      const  {id, title, thumbnail, price} = this.props
    return (
      <div className="items" data-testid="product" key={id}>
        <h4>{title}</h4>
        <img className="item-image" src={thumbnail}/>
        <div className="item-price">R$ {price}</div>
        <button className="button"
        data-testid="product-detail-add-to-cart"
        onClick={()=>{this.handleLocalStorage(id, title, thumbnail, price)}}>
          Add Carrinho
        </button>
      </div>
    )
  }
}