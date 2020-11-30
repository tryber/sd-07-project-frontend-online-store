import React from 'react';
import ProductInCart from '../components/ProductInCart';

class ShoppingCartPage extends React.Component {
  constructor(props) {
    super(props);
    this.actualizeState = this.actualizeState.bind(this);
    this.state = {
      productsSelected: [],
      amount: [],
    };
  }

  componentDidMount() {
    const productName = Object.keys(localStorage);
    const productAmount = Object.values(localStorage);
    this.actualizeState(productName, productAmount);
  }

  actualizeState(productsSelected, amount) {
    this.setState({ productsSelected, amount });
  }

  render() {
    const { productsSelected, amount } = this.state;
    return (
      <div>
        {productsSelected.map((product, index) => (
          <div key={ product }>
            <ProductInCart
              product={ { title: product, quantityInCart: amount[index] } }
            />
          </div>
        ))}
        {
          !productsSelected.length
          && <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        }
      </div>
    );
  }
}
export default ShoppingCartPage;
