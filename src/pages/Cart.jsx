import React from 'react';
import '../App.css';
import ItemCart from '../components/ItemCart';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      listProduct: [],
      emptyCart: true,
    };
  }

  componentDidMount() {
    this.loadList();
  }

  loadList() {
    if (localStorage.length) {
      const products = JSON.parse(localStorage.getItem('cartItems'));
      this.setState({
        emptyCart: false,
        listProduct: [...products],
      });
    }
  }

  render() {
    const { listProduct, emptyCart } = this.state;
    const products = localStorage.getItem('cartItems');
    console.log(products);

    if (products === '[]' || emptyCart) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message" className="empty-cart">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }
    return (
      <div>
        {listProduct.map((product) => (
          <ItemCart key={ product.id } product={ product } />
        ))}
      </div>
    );
  }
}

export default Cart;
