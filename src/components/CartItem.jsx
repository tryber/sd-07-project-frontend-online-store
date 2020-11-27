import React, { Component } from 'react';

class CartItem extends Component {
  constructor(props) {
    super(props);
    const { id, title, price, image, number } = this.props;
    this.state = {
      id,
      title,
      price,
      image,
      number,
    };
  }

  addItemToLocalStorage = () => {
    const id = this.state.id;
    const title = this.state.title;
    const price = this.state.price;
    const imagePath = this.state.image;
    const number = this.state.number;
    if (Storage) {
      const getItemSaved = JSON.parse(localStorage.getItem("cart"));
      const values = getItemSaved === null ? [] : getItemSaved;
      let repeatedProduct = false;
      values.forEach((value) => {
        if (value.id === id) {
          value.number += 1;
          this.setState({number: value.number});
          value.price += price;
          this.setState({price: value.price});
          repeatedProduct = true;
        }
      });
      if (repeatedProduct)
        return localStorage.setItem("cart", JSON.stringify(values));
      values.push({ id, title, price, imagePath, number });
      localStorage.setItem("cart", JSON.stringify(values));
      
    }
  };

  render() {
    const { title, price, image, number } = this.state;
    // nota: acho que precisamos desestruturar localStorage aqui.
    const getItemSaved = JSON.parse(localStorage.getItem("cart"));
    console.log(getItemSaved)
    // return {
    //   getItemSaved.map((value) => {
    //   return (
    //     <div>
    //       <img src={value.image} alt={title} />
    //       <span data-testid="shopping-cart-product-name">{value.title}</span>
    //       <button>-</button>
    //       <span data-testid="shopping-cart-product-quantity">{value.number}</span>
    //       <button onClick={this.addItemToLocalStorage}>+</button>
    //       <span>{value.price}</span>
    //     </div>
    //   );  
    // })

    return (
      <div>
        <img src={image} alt={title} />
        <span data-testid="shopping-cart-product-name">{title}</span>
        <button>-</button>
        <span data-testid="shopping-cart-product-quantity">{number}</span>
        <button onClick={this.addItemToLocalStorage}>+</button>
        <span>{price}</span>
      </div>
    );
  }
  // }
}

export default CartItem;
