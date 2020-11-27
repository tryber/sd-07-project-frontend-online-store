import React from 'react';
import '../App.css';
import ItemCart from '../components/ItemCart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      listProduct: [],
    };

    this.loadList = this.loadList.bind(this);
  }

  componentDidMount() {
    this.loadList();
  }

  loadList() {
    const products = JSON.parse(localStorage.getItem('cartItems'));
    console.log(products);
    this.setState({
      listProduct: [...products],
    });
  }


  render() {
    const { listProduct } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message" className="empty-cart">
          Seu carrinho está vazio
        </p>

        <div>
          {listProduct.map((product) => (
            <ItemCart key={ product.id } product={ product } />
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
