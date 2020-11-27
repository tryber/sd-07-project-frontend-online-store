import React from 'react';
import { Link } from 'react-router-dom';
import EmptyShopCar from '../components/EmptyShopCar';
import ItemCart from '../components/ItemCart';
import { readCartItems} from '../services/Cart'

class ShopPage extends React.Component {
  constructor(){
    super();
    this.state = {
      itemsCart: [],
    }
  }
  componentDidMount() {
    const items = readCartItems();
    this.setState({itemsCart: items})
  }
  render() {
    const {itemsCart} = this.state
    let conteudo;
    if(itemsCart.length > 0) {
      conteudo =  
      <div className="items-list">
         {itemsCart.map((product) => 
              <ItemCart
                key={product.id}
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price} />)}
        </div>
    } else {
      conteudo = <EmptyShopCar />
    }
    return (
      <div>
        {conteudo}
        <Link className="button" to="/"> Home</Link>
      </div>
   );
  }
}

export default ShopPage;