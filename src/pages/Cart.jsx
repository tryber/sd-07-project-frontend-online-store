import React from 'react';
import '../App.css';
import ItemCart from '../components/ItemCart';
import TopBar from '../components/TopBar';

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
    // console.log(products);

    if (products === '[]' || emptyCart) {
      return (
        <div className="page-container">
          <div className="page-sub-container">
            <TopBar />
            <h1 data-testid="shopping-cart-empty-message" className="empty-cart">
              Seu carrinho está vazio
            </h1>
          </div>
        </div>
      );
    }

    return (
      <div className="page-container">
        <div className="page-sub-container">
          <TopBar />
          <div className="items-card-container">
            { listProduct.map((product) => (
              <ItemCart key={ product.id } product={ product } />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
