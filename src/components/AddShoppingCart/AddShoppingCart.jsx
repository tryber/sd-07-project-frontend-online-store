import React, { Component } from "react";

class AddShoppingcart extends Component {
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      listProducts: [],
      cont: 0,
      product: product,
    };

    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem() {
    const { product } = this.state;
    this.setState(
      (products) => ({ listProducts: [...products.listProducts, product] }),
      () =>
        localStorage.setItem("cart", JSON.stringify(this.state.listProducts))
    );
  }
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} data-testid="product-add-to-cart">
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

export default AddShoppingcart;
